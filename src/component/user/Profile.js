import React, { useState } from 'react';
import { Form, Typography, Button, Card, Checkbox, Input } from 'antd';
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

function Profile() {
    const onFinish = (e) => {
        // if (e == "back") {
        //     return setRedirection("/landing-page")
        // } else if (e == "confirm") {
        //     return setRedirection("/validation")
        // }
    }

    let id = localStorage.getItem("id")

    const addressForm = [
        { label: "Room", name: "room" },
        { label: "Floor", name: "floor" },
        { label: "Building", name: "building" },
        { label: "Estate", name: "estate" },
        { label: "Street", name: "street" },
        { label: "District", name: "district" },
        { label: "Sub District", name: "sub_district" },
        { label: "Region", name: "region" }
    ]

    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };

    return (
        <>
            <Form
                {...layout}
                layout="horizontal"
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridGap: "5rem" }}>
                    <div style={{borderRight: "grey 1px solid"}}>
                        <h2 style={{ fontWeight: "bold" }}>
                            My Account:
                        </h2>
                        <hr style={{ width: "80%", textAlign: "left", marginLeft: "0", color: "grey" }} />
                        <br />
                        <Form.Item
                            label="Username"
                            name="username"
                            labelAlign="left"
                        >
                            <Input style={{ borderRadius: "1rem" }} />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"
                            labelAlign="left"
                        >
                            <Input style={{ borderRadius: "1rem" }} />
                        </Form.Item>

                        <Form.Item
                            label="Phone"
                            name="phone"
                            labelAlign="left"
                        >
                            <Input style={{ borderRadius: "1rem" }} />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            labelAlign="left"
                        >
                            <Button>
                                Change Password
                            </Button>
                        </Form.Item>

                    </div>
                    <div>
                        <h2 style={{ fontWeight: "bold" }}>
                            Address:
                        </h2>
                        <hr style={{ width: "80%", textAlign: "left", marginLeft: "0", color: "grey" }} />
                        <br />
                        {
                            Object.keys(addressForm).map((e, i) => {
                                return (
                                    <Form.Item
                                        label={addressForm[i].label}
                                        name={addressForm[i].name}
                                        labelAlign="left"
                                    >
                                        <Input style={{ borderRadius: "1rem" }} />
                                    </Form.Item>
                                )
                            })
                        }

                    </div>
                </div>
                <br />
                <br />
                <br />
                <br />
                <div>
                    <Button type="default" htmlType="submit" style={{ borderRadius: "1rem" }}>
                        Save
                    </Button>
                </div>
            </Form>
        </>
    );
}

export default Profile;