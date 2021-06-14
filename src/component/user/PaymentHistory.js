import React, { useState } from 'react';
import { Table, Tag } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { eventList } from "../../constant/demoData"

function PaymentHistory() {
    const onFinish = (e) => {
        // if (e == "back") {
        //     return setRedirection("/landing-page")
        // } else if (e == "confirm") {
        //     return setRedirection("/validation")
        // }
    }

    let id = localStorage.getItem("id")

    const columns = [
        {
            title: 'Order Date',
            dataIndex: 'orderDate',
            key: 'orderDate',
        },
        {
            title: 'Order Details',
            dataIndex: 'orderDetails',
            key: 'orderDetails',
        },
        {
            title: 'Payment Method',
            dataIndex: 'paymentMethod',
            key: 'paymentMethod',
        },
        {
            title: 'Event Status',
            dataIndex: 'eventStatus',
            key: 'eventStatus',
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
        {
            title: 'Delivery Status',
            dataIndex: 'deliveryStatus',
            key: 'deliveryStatus',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = ""
                        if (tag == "Processing") {
                            color = 'geekblue'
                        } else if (tag == "Shipped") {
                            color = 'volcano'
                        } else if (tag == "Delivered") {
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
        {
            title: 'Payment Status',
            dataIndex: 'paymentStatus',
            key: 'paymentStatus',
            render: tags => (
                <>
                    {tags.map(tag => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag == "Payment successful") {
                            color = 'green'
                        } else if (tag == "Transaction closed") {
                            color = 'volcano'
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
        {
            title: 'Total',
            dataIndex: 'total',
            key: 'total',
        },
        {
            title: 'Live Stream Link',
            dataIndex: 'liveStreamLink',
            key: 'liveStreamLink',
            render: link => <a>{link}</a>,
        }
    ];

    const data = [
        {
            key: '3',
            orderDate: '15 / 05 / 2021 19:00:32',
            orderDetails: "Event 3 (04 / 06 / 2021 18:00:00)",
            paymentMethod: 'Visa',
            eventStatus: ['Live!'],
            deliveryStatus: ['Shipped', "SF1038306898208"],
            paymentStatus: ['Payment successful'],
            total: "HKD $400",
            liveStreamLink: "Click to Join!"
        },
    ];

    const historyData = [
        {
            key: '1',
            orderDate: '01 / 11 / 2021 19:00:32',
            orderDetails: "Event 1 (04 / 11 / 2021 18:00:00), Poster x 1",
            paymentMethod: 'Visa',
            eventStatus: ['Coming soon'],
            deliveryStatus: ['Processing'],
            paymentStatus: ['Payment successful'],
            total: "HKD $1000",
            liveStreamLink: "Coming soon"
        },
        {
            key: '1',
            orderDate: '01 / 11 / 2021 19:00:32',
            orderDetails: "Event 1234 (04 / 11 / 2021 18:00:00), Poster x 1",
            paymentMethod: 'Visa',
            eventStatus: ['Coming soon'],
            deliveryStatus: ['Processing'],
            paymentStatus: ['Payment successful'],
            total: "HKD $1000",
            liveStreamLink: "Coming soon"
        },
        {
            key: '1',
            orderDate: '01 / 11 / 2021 19:00:32',
            orderDetails: "Event 1r (04 / 11 / 2021 18:00:00), Poster x 1",
            paymentMethod: 'Visa',
            eventStatus: ['Coming soon'],
            deliveryStatus: ['Processing'],
            paymentStatus: ['Payment successful'],
            total: "HKD $1000",
            liveStreamLink: "Coming soon"
        },
        {
            key: '2',
            orderDate: '01 / 09 / 2021 12:00:00',
            orderDetails: "Event 2 (04 / 10 / 2021 18:00:00)",
            paymentMethod: 'Master Card',
            eventStatus: ['Coming soon'],
            deliveryStatus: [''],
            paymentStatus: ['Transaction closed'],
            total: "HKD $0",
            liveStreamLink: ""
        },
        {
            key: '4',
            orderDate: '01 / 12 / 2020 19:00:32',
            orderDetails: "Event 4 (04 / 12 / 2020 18:00:00)",
            paymentMethod: 'Visa',
            eventStatus: ['Ended'],
            deliveryStatus: ['Completed'],
            paymentStatus: ['Payment successful'],
            total: "HKD $1200",
            liveStreamLink: ""
        },
    ];

    return (
        <>
            <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Live !</h1>
            <Table columns={columns} dataSource={data} pagination={{ position: ["bottomCenter"] }}/>
            <hr style={{ color: "#ddd" }} />
            <br/>
            <h1 style={{ fontSize: "36px", fontWeight: "bold" }}>Payment History</h1>
            <Table columns={columns} dataSource={historyData} pagination={{ position: ["bottomCenter"] }}/>
        </>
    );
}

export default PaymentHistory;