import React, { useState } from 'react';
import { Form, Typography, Button, Card, Checkbox, Row, Col } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { eventList } from "../../constant/demoData"
const { Meta } = Card;
const { Paragraph } = Typography;

function Events() {
    const handleOnClick = (e) => {
        // if (e == "back") {
        //     return setRedirection("/landing-page")
        // } else if (e == "confirm") {
        //     return setRedirection("/validation")
        // }
    }

    let id = localStorage.getItem("id")

    return (
        <>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px ,400px))", gridGap: "3rem", justifyContent: "center", padding: "2rem" }}>
                {
                    localStorage.getItem("role") == "admin" ?
                        <Card style={{ display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "2px 5px 5px 2px #ddd" }} onClick={() => handleOnClick("edit")}>
                            <PlusOutlined style={{ fontSize: "2.5rem" }} />
                        </Card>
                        :
                        <></>
                }
                {Object.keys(eventList).map((e, i) => {
                    return (
                        <Card
                            cover={
                                <img
                                    alt="example"
                                    src={eventList[e].cover}
                                />
                            }
                            actions={[
                                localStorage.getItem("role") == "admin" ? <Link to="/landing-page/admin" onClick={() => localStorage.setItem("id", e)}><EditOutlined /> </Link> : <Link to="/landing-page/payment" onClick={() => localStorage.setItem("id", e)}><div >{"Choose"}</div></Link>,
                            ]}
                            style={{ height: "fit-content", boxShadow: "2px 5px 5px 2px #ddd" }}
                        >
                            <Meta
                                title={<h3><b>{eventList[e].title}</b></h3>}
                                description={
                                    <div>
                                        <Paragraph style={{ lineHeight: "1.5rem" }} ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>{eventList[e].desc}</Paragraph>
                                        <br />
                                        <h4>{"Time Arrangement:"}</h4>
                                        <ul style={{ padding: "1rem", margin: 0 }}>
                                            {
                                                Object.keys(eventList[e].datetime).map((x) => {
                                                    return (
                                                        <div style={{ display: "grid", gridTemplateColumns: "6rem 10rem" }}>
                                                            <Typography>
                                                                {eventList[e].datetime[x].date}
                                                            </Typography>
                                                            <Typography>
                                                                {eventList[e].datetime[x].time}
                                                            </Typography>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                }
                            />
                        </Card>)
                })
                }
            </div>
        </>
    );
}

export default Events;