import React, { useState } from 'react';
import { Form, Typography, Button, Card, Checkbox, Row, Col } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import bg from "../../resource/bg.jpeg"
import { eventList } from "../../constant/demoData"

function Payment() {
    // const [redirection, setRedirection] = useState("/payment");

    const [sum, setSum] = useState(0)

    const handleOnClick = (e) => {
        // if (e == "back") {
        //     return setRedirection("/landing-page")
        // } else if (e == "confirm") {
        //     return setRedirection("/validation")
        // }
    }

    const handleSum = (e, type) => {
        let price = type == "date" ? eventList[id].datetime[e.target.value].price : eventList[id].item[e.target.value].price
        if (e.target.checked) {
            setSum(sum + price)
        } else {
            setSum(sum - price)
        }
    }

    let id = localStorage.getItem("id")

    return (
        <>
            <div style={{ display: "flex", minHeight: "100vh", backgroundImage: `url(${bg})`, padding: "1rem" }}>
                <Card style={{ margin: "auto", boxShadow: "2px 5px 5px 2px #ddd", minWidth: "320px", width: "100%", maxWidth: "75vw" }}>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))", gap: "3rem", justifyContent: "center" }}>
                        <div style={{ maxWidth: "100%", textAlign: "center" }}>
                            <img src={eventList[id].cover} style={{ maxWidth: "100%", height: "auto" }} />
                        </div>
                        <div>
                            <h3><b>{eventList[id].title}</b></h3>
                            <h4>
                                {eventList[id].desc}
                            </h4>
                            <br />
                            <Form
                                layout="vertical"
                                name="basic"
                                initialValues={{ remember: true }}
                            // onFinish={onFinish}
                            // onFinishFailed={onFinishFailed}
                            >
                                <h4><b>{"Time Arrangement:"}</b></h4>
                                <Card>
                                    <Checkbox.Group style={{ width: '100%', lineHeight: "1.5rem" }}>
                                        {
                                            Object.keys(eventList[id].datetime).map((e) => {
                                                return (
                                                    <div style={{ display: "flex" }}>
                                                        <Checkbox value={e} onChange={(e) => handleSum(e, "date")}>
                                                        </Checkbox>
                                                        <div style={{ display: "flex", flexWrap: "wrap", paddingLeft: "0.5rem" }}>
                                                            <Typography style={{ width: "6rem" }}>
                                                                {eventList[id].datetime[e].date}
                                                            </Typography>
                                                            <Typography style={{ whiteSpace: "nowrap", width: "14rem" }}>
                                                                {eventList[id].datetime[e].time}
                                                            </Typography>
                                                            <Typography style={{ textAlign: "right", whiteSpace: "nowrap", width: "6rem", position: "absolute", right: "10%" }}>
                                                                <label >HKD ${eventList[id].datetime[e].price}</label>
                                                            </Typography>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </Checkbox.Group>
                                </Card>
                                <br />
                                <h4><b>{"Additional Items:"}</b></h4>
                                <Card>
                                    <Checkbox.Group style={{ width: '100%' }}>
                                        {
                                            Object.keys(eventList[id].item).map((e) => {
                                                return (
                                                    <Row>
                                                        <Col span={18}>
                                                            <Checkbox value={e} onChange={(e) => handleSum(e, "item")}>{eventList[id].item[e].title}</Checkbox>
                                                        </Col>
                                                        <Typography style={{ whiteSpace: "nowrap", position: "absolute", right: "10%" }}>
                                                            <label>HKD ${eventList[id].item[e].price}</label>
                                                        </Typography>
                                                    </Row>
                                                )
                                            })
                                        }
                                    </Checkbox.Group>
                                </Card>
                                <br />
                                <h4 style={{ textAlign: "right", paddingRight: "8rem" }}><b>{"Total:"}</b></h4>
                                <h2 style={{ textAlign: "right", paddingRight: "1rem" }}>HKD ${sum}</h2>
                                <br />
                                <Form.Item style={{ textAlign: "right" }}>
                                    <Button type="default" htmlType="submit" onClick={() => handleOnClick("confirm")} style={{ borderRadius: "1rem" }}>
                                        Confirm
                                    </Button>
                                    {"  "}
                                    <Button type="default" onClick={() => handleOnClick("back")} style={{ borderRadius: "1rem" }}>
                                        Back
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </Card>
            </div>
            {/* <Redirect to={redirection} /> */}
        </>
    );
}

export default Payment;