import React, { useState } from "react"
import { HashRouter, Link, Route, Routes } from "react-router-dom"
import { Button, Col, Layout, Menu, Row, Tabs } from "antd"
import { FileOutlined } from "@ant-design/icons"
import "antd/dist/antd.css"
import "./index.css"

import { Home } from "./pages/home"

const { TabPane } = Tabs
const { Content, Footer, Sider, Header } = Layout

export const MyRoutes = () => {
  const [collapsed, setcollapsed] = useState(false)

  const onCollapse = () => {
    setcollapsed(!collapsed)
  }

  return (
    <HashRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <Button type="text" block style={{ color: "white", padding: "30px 20px", fontWeight: "bold" }}>
            LOGO
          </Button>

          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="0" icon={<FileOutlined />}>
              <Link to="/test_1">Test 1</Link>
            </Menu.Item>
            <Menu.Item key="1" icon={<FileOutlined />}>
              <Link to="/cycle">Cycle</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="site-layout-background" style={{ padding: 0, background: "#fff" }}>
            <Row>
              <Col span={24}>
                {/* <Button type="text" style={{ height: "100%", padding: "20px" }}>
                  Run
                </Button> */}
                <Tabs defaultActiveKey="1" style={{ height: "100%" }} onChange={(key: any) => console.log(key)}>
                  <TabPane tab="Run test" key="1" />
                  <TabPane tab="Test proccess" key="2" />
                  <TabPane tab="Test result" key="3" />
                </Tabs>
              </Col>
              {/* <Col>
                <Button type="text" style={{ height: "100%", padding: "20px" }}>
                  Analyis
                </Button>
              </Col> */}
            </Row>
          </Header>
          <Content style={{ margin: "0" }}>
            <div className="site-layout-background" style={{ padding: 24, margin: 10, minHeight: "85vh", background: "#fff" }}>
              <Routes>
                <Route path="/:name" element={<Home />} />
              </Routes>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Dell 2021</Footer>
        </Layout>
      </Layout>
    </HashRouter>
  )
}
