import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import bg from "../resource/bg.jpeg"

function Login() {
    const [redirection, setRedirection] = useState("/")
    const onFinish = (values) => {
        if (values.username == "a" && values.password == "p") {
            localStorage.setItem("role", "admin")
        } else if (values.username == "u" && values.password == "p") {
            localStorage.setItem("role", "user")
        }
        return setRedirection("/landing-page")
    };

    return (
        <>
            <div style={{display: "flex", textAlign: "center", height: "100vh", backgroundImage: `url(${bg})`}}>
                <Form
                    layout="vertical"
                    name="basic"
                    // initialValues={{ remember: true }}
                    onFinish={onFinish}
                    style={{margin: "auto"}}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input style={{ borderRadius: "1rem", minWidth: "20rem", width: "60vw", maxWidth: "40rem"}}/>
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password style={{ borderRadius: "1rem", minWidth: "20rem", width: "60vw", maxWidth: "40rem"}}/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="default" htmlType="submit" style={{ borderRadius: "1rem"}}>
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </div>
            <Redirect to={redirection} />
        </>
    );
}

export default Login;