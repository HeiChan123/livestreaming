import React, { useState } from 'react';
import { Form, Input, Button, Space, DatePicker, Select, TimePicker, Card } from 'antd';
import { MinusCircleOutlined, PlusOutlined, EditOutlined } from '@ant-design/icons';
import { Upload } from 'antd';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import bg from "../resource/bg.jpeg"
import { eventList } from "../constant/demoData"

const { RangePicker } = TimePicker;
const { Option } = Select;

function Admin() {
    const [redirection, setRedirection] = useState("/admin");

    const uploadButton = (
        <div style={{ width: "10rem" }}>
            { <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    const handleOnClick = (e) => {
        if (e == "back") {
            return setRedirection("/landing-page")
        } else if (e == "save") {
            return setRedirection("/landing-page")
        }
    }

    const onFinish = (values) => {
        console.log(values)
        /* if (values.username == "a1" && values.password == "p") {
             localStorage.setItem("role", "admin")
         } else if (values.username == "u1" && values.password == "p") {
             localStorage.setItem("role", "user")
         }
         return setRedirection("/landing-page")*/
    };

    let id = localStorage.getItem("id")

    return (
        <>
            <div style={{ display: "flex", minHeight: "100vh", backgroundImage: `url(${bg})`, padding: "2rem", backgroundRepeat: "repeat" }}>
                <Card style={{ margin: "auto", boxShadow: "2px 5px 5px 2px #ddd" }}>
                    <Form
                        layout="vertical"
                        name="basic"
                        initialValues={{ item: id > -1 ? eventList[id].item : [], datetime: id > -1 ? eventList[id].datetime : [] }}
                        onFinish={onFinish}
                    >
                        {
                            id > -1 ?
                                <div style={{ textAlign: "center" }}>
                                    <Upload
                                        showUploadList={false}
                                        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                        style={{ minWidth: "100rem" }}
                                    >
                                        <img src={eventList[id].cover} style={{ width: "40vw", cursor: "pointer" }} />
                                    </Upload>
                                </div>
                                :
                                <Upload
                                    name="avatar"
                                    listType="picture-card"
                                    className="avatar-uploader"
                                    showUploadList={false}
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                    style={{ minWidth: "100rem" }}
                                >
                                    {uploadButton}
                                </Upload>
                        }
                        <Form.Item
                            label="Title"
                            name="title"
                        >
                            <Input style={{ borderRadius: "1rem", minWidth: "40rem", width: "70vw", maxWidth: "60rem" }} defaultValue={id > -1 ? eventList[id].title : ""} />
                        </Form.Item>

                        <Form.Item name={['user', 'introduction']} label="Description">
                            <Input.TextArea rows="6" style={{ borderRadius: "1rem", minWidth: "40rem", width: "70vw", maxWidth: "60rem" }} defaultValue={id > -1 ? eventList[id].desc : ""} />
                        </Form.Item>
                        <br />
                        <b>Time Sessions: </b>
                        <br />
                        <Form.List name="datetime">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(field => (
                                        <Card key={field.key}>
                                            <MinusCircleOutlined onClick={() => remove(field.name)} style={{ float: "right" }} />
                                            <Form.Item
                                                {...field}
                                                label="Date"
                                                name={[field.name, 'date']}
                                                fieldKey={[field.fieldKey, 'date']}
                                            >
                                                {/* <DatePicker style={{ borderRadius: "1rem" }} />*/}
                                                <Input style={{ borderRadius: "1rem", minWidth: "15rem", maxWidth: "20rem" }} />
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="Time"
                                                name={[field.name, 'time']}
                                                fieldKey={[field.fieldKey, 'time']}
                                            >
                                                {/*<RangePicker style={{ borderRadius: "1rem" }} />*/}
                                                <Input style={{ borderRadius: "1rem", minWidth: "15rem", maxWidth: "20rem" }} />
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="Price"
                                                name={[field.name, 'price']}
                                                fieldKey={[field.fieldKey, 'price']}
                                            >
                                                <Input type="number" style={{ borderRadius: "1rem", minWidth: "15rem", maxWidth: "20rem" }} prefix="$" suffix="HKD" />
                                            </Form.Item>
                                        </Card>
                                    ))}

                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} style={{ width: "fit-content", borderRadius: "1rem" }}>
                                            Add sessions
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                        <br />
                        <b>Additional Item: </b>
                        <br />
                        <Form.List name="item">
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(field => (
                                        <Card key={field.key}>
                                            <MinusCircleOutlined onClick={() => remove(field.name)} style={{ float: "right" }} />
                                            <Form.Item
                                                {...field}
                                                label="Name"
                                                name={[field.name, 'title']}
                                                fieldKey={[field.fieldKey, 'title']}
                                            >
                                                <Input style={{ borderRadius: "1rem", minWidth: "15rem", maxWidth: "20rem" }} />
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="Price"
                                                name={[field.name, 'price']}
                                                fieldKey={[field.fieldKey, 'price']}
                                            >
                                                <Input type="number" style={{ borderRadius: "1rem", minWidth: "15rem", maxWidth: "20rem" }} prefix="$" suffix="HKD" />
                                            </Form.Item>
                                        </Card>
                                    ))}

                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />} style={{ width: "fit-content", borderRadius: "1rem" }}>
                                            Add items
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                        <Form.Item >
                            <Button type="default" htmlType="submit" onClick={() => handleOnClick("save")} style={{ borderRadius: "1rem" }}>
                                Save
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

export default Admin;