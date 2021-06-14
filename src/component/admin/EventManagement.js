import React, { useState } from 'react';
import { Table, Tag, Space, Button } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { eventList } from "../../constant/demoData"

function EventManagement() {
    const onFinish = (e) => {
        // if (e == "back") {
        //     return setRedirection("/landing-page")
        // } else if (e == "confirm") {
        //     return setRedirection("/validation")
        // }
    }

    let id = localStorage.getItem("id")

    const columns = [
        //horizotal expand action
        {
            title: 'Actions',
            key: '',
            render: (_, record) => (
                <Space size="middle">
                    <Button>
                        Edit
                </Button>

                    <Button>
                        Delete
                </Button>
                </Space>
            )
        },
        //popup photo view
        {
            title: 'Cover Photo',
            dataIndex: 'photo',
            key: 'photo',
            render: (_, record) => (
                <a>
                    View..
                </a>
            )
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        //read more text
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
            ellipsis: true,

        },
        //click to expand
        {
            title: 'Time Slot',
            dataIndex: 'timeslot',
            key: 'timeslot'
        },
        //redirect to other table
        {
            title: 'Souvenirs',
            dataIndex: 'souvenirs',
            key: 'souvenirs',
            render: () => (
                <a>
                    More..
                </a>
            )
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = ""
                        if (tag == "Coming soon") {
                            color = 'geekblue'
                        } else if (tag == "Ended") {
                            color = 'volcano'
                        } else if (tag == "Live!") {
                            color = 'green'
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            name: "Event 1",
            timeslot: "01 / 06 / 2021 - 08 / 06 / 2021 ",
            description: "hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text ",
            status: ["Coming soon"]
        },
        {
            key: '2',
            name: "Event 2",
            timeslot: "01 / 06 / 2021 - 08 / 06 / 2021 ",
            description: "hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text ",
            status: ["Ended"]
        },
        {
            key: '3',
            name: "Event 3",
            timeslot: "01 / 06 / 2021 - 08 / 06 / 2021 ",
            description: "hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text ",
            status: ["Coming soon"]
        },
        {
            key: '4',
            name: "Event 4",
            timeslot: "01 / 06 / 2021 - 08 / 06 / 2021 ",
            description: "hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text ",
            status: ["Coming soon"]
        },
        {
            key: '5',
            name: "Event 5",
            timeslot: "01 / 06 / 2021 - 08 / 06 / 2021 ",
            description: "hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text ",
            status: ["Ended"]
        },
        {
            key: '6',
            name: "Event 6",
            timeslot: "01 / 06 / 2021 - 08 / 06 / 2021 ",
            description: "hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text ",
            status: ["Live!"]
        },
        {
            key: '7',
            name: "Event 7",
            timeslot: "01 / 06 / 2021 - 08 / 06 / 2021 ",
            description: "hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text ",
            status: ["Live!"]
        },
        {
            key: '8',
            name: "Event 8",
            timeslot: "01 / 06 / 2021 - 08 / 06 / 2021 ",
            description: "hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text hello text ",
            status: ["Coming soon"]
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={data} pagination={{ position: ["bottomCenter"] }} />
        </>
    );
}

export default EventManagement;