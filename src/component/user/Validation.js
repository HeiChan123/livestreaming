import React, { useState } from 'react';
import { Form, Input, Button, Space, DatePicker, Select, TimePicker, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import bg from "../resource/bg.jpeg"

const { RangePicker } = TimePicker;
const { Option } = Select;

function Validation() {
    const [redirection, setRedirection] = useState("/validation");

    const handleOnClick = (e) => {
        if (e == "back") {
            return setRedirection("/payment")
        }
    }

    const onFinish = (values) => {
        /* if (values.username == "a1" && values.password == "p") {
             localStorage.setItem("role", "admin")
         } else if (values.username == "u1" && values.password == "p") {
             localStorage.setItem("role", "user")
         }
         return setRedirection("/landing-page")*/
    };

    return (
        <>
            <div style={{ display: "flex", minHeight: "100vh", textAlign: "center", backgroundImage: `url(${bg})`, padding: "1rem", backgroundRepeat: "repeat" }}>
                <Card style={{ margin: "auto", boxShadow: "2px 5px 5px 2px #ddd" }}>
                    <h2><b>Validation</b></h2>
                    <hr />
                    <Form
                        layout="vertical"
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                        >
                            <Input style={{ borderRadius: "1rem", minWidth: "17rem", width: "60vw", maxWidth: "40rem" }} />
                        </Form.Item>

                        <Form.Item
                            label="Phone"
                            name="phone"
                        >
                            <Input style={{ borderRadius: "1rem", minWidth: "17rem", width: "60vw", maxWidth: "40rem" }} />
                        </Form.Item>

                        <Form.Item >
                            <Button type="default" htmlType="submit" style={{ borderRadius: "1rem" }}>
                                Submit
                        </Button>
                            {"  "}
                            <Button type="default" onClick={() => handleOnClick("back")} style={{ borderRadius: "1rem" }}>
                                Back
                        </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
            <Redirect to={redirection} />
        </>
    );
}

export default Validation;