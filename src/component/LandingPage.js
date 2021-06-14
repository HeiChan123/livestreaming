import React, { useState, useEffect } from 'react';
import { Card, Button, Typography, Row, Col, Input, Layout, Menu, Affix } from 'antd';
import { LogoutOutlined, ShoppingCartOutlined, MenuOutlined, UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import bg from "../resource/bg.jpeg"
import { eventList } from "../constant/demoData";
import UserRoute from "./user/UserRoute"

import Events from "./user/Events";
import AdminRoute from './admin/AdminRoute';
import Title from 'antd/lib/skeleton/Title';
const { Meta } = Card;
const { Paragraph, Text } = Typography;
const { Search } = Input;
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

function LandingPage() {
    useEffect(() => {
        window.scrollTo(0, 0);
    });
    const [redirection, setRedirection] = useState("/landing-page");

    const handleOnClick = (e, value) => {
        if (e == "edit") {
            localStorage.setItem("id", value)
            return setRedirection("/admin")
        } else if (e == "buy") {
            localStorage.setItem("id", value)
            return setRedirection("/payment")
        } else if (e == "logout") {
            localStorage.removeItem("id")
            return setRedirection("/")
        }
    }

    const userMenu = [
        { title: "Events", link: "/landing-page/events" },
        { title: "Payment History", link: "/landing-page/payment-history" },
        { title: "Profile", link: "/landing-page/profile" }
    ]

    const adminMenu = [
        { title: "Event Management", link: "/landing-page/event-management" },
        { title: "Order Management", link: "/landing-page/order-management" },
        { title: "Reports", link: "/landing-page/reports" }
    ]

    let role = localStorage.getItem("role");

    return (
        <>
            <Layout style={{ minHeight: "100vh" }}>
                <Affix offsetTop={0}>
                    <Header style={{ backgroundColor: "white", padding: "0", boxShadow: "2px 5px 5px 2px #ddd", lineHeight: "normal", height: "min-content" }} >
                        <div style={{ display: "flex", padding: "0 1rem" }}>
                            <div style={{ background: "brown", width: "8rem", height: "2rem", margin: "auto 0", fontWeight: "bold", fontSize: "2rem", fontStyle: "italic", borderRadius: "0.5rem" }}>
                                <text style={{ color: "yellow" }}>We</text> <text style={{ color: "silver" }}>Live</text>
                            </div>
                            <Menu theme="light" mode="horizontal" style={{ padding: "1rem", marginLeft: "auto" }}>
                                {role == "user" ?
                                    Object.keys(userMenu).map((e, i) => {
                                        return (
                                            <Menu.Item key={i}>
                                                <Link to={userMenu[i].link}>
                                                    {userMenu[i].title}
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })
                                    :
                                    <></>
                                }
                                <Menu.Item onClick={() => handleOnClick("logout", "")} key="" >
                                    <text>Logout</text>
                                </Menu.Item>
                            </Menu>
                        </div>
                    </Header>
                </Affix>
                <Layout >
                    {role == "admin" ?
                        <Sider width={200} className="site-layout-background" >
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['0']}
                                defaultOpenKeys={['sub1']}
                                style={{ height: '100%', borderRight: 0 }}
                            >
                                {
                                    Object.keys(adminMenu).map((e, i) => {
                                        return (
                                            <Menu.Item key={i}>
                                                <Link to={adminMenu[i].link}>
                                                    {adminMenu[i].title}
                                                </Link>
                                            </Menu.Item>
                                        )
                                    })
                                }
                            </Menu>
                        </Sider>
                        :
                        ""
                    }
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Content
                            className="site-layout-background"
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                            }}
                        >
                            {
                                localStorage.getItem("role") == "admin" ?
                                    <AdminRoute />
                                    :
                                    <UserRoute />
                            }
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            <Redirect to={redirection} />
        </>
        // <div style={{ minHeight: "100vh", backgroundImage: `url(${bg})`, backgroundRepeat: "repeat" }}>
        //     <div style={{ width: "100%", boxShadow: "2px 5px 5px 2px #ddd", display: "flex" }}>
        //         {/* <div style={{display: "flex"}}>
        //             <h2 style={{ margin: "1rem"}}>Home</h2>
        //             <h2 style={{ margin: "1rem"}}>Latest Events</h2>
        //             <h2 style={{ margin: "1rem"}}>Contact Us</h2>
        //         </div> */}
        //         {/* <div>
        //             <MenuOutlined style={{ fontSize: "1.5rem", margin: "1rem", cursor: "pointer" }} />
        //             <div style={{ position: "absolute", backgroundColor: "white", zIndex: 1 }}>
        //                 <div>
        //                     <h3 style={{ margin: "1rem", fontWeight: "bold" }}>Home</h3>
        //                 </div>
        //                 <div>
        //                     <h3 style={{ margin: "1rem", fontWeight: "bold" }}>Latest Events</h3>
        //                 </div>
        //                 <div>
        //                     <h3 style={{ margin: "1rem", fontWeight: "bold" }}>Contact Us</h3>
        //                 </div>
        //             </div>
        //         </div> */}
        //         <div style={{ marginLeft: "auto" }}>
        //             <Search placeholder="input search text" style={{ width: 200, borderRadius: "1rem", margin: "1rem 0" }} />

        //         </div>
        //     </div>
        //     {/*search bar*/}

        //     
        // </div>
    );
}

export default LandingPage;