import React, { useState } from "react"
import { Button, Checkbox, Col, Divider, Form, Input, Row, Space, Table, Tag, Typography } from "antd"
import { ColumnType } from "antd/lib/table"
import { useLocation } from "react-router-dom"

const { Text } = Typography

interface props {
  title?: string
}
const columns_0: ColumnType<any>[] = [
  {
    title: "Max in plane velocity",
    dataIndex: "max_in_plane_velo",
    align: "center",
  },
  {
    title: "mm/s",
    dataIndex: "mm_s",
    align: "center",
  },
]

const columns_1: ColumnType<any>[] = [
  {
    title: "Starting corner of device",
    dataIndex: "starting_corner_device",
    align: "center",
  },
  {
    title: "mm",
    dataIndex: "mm",
    align: "center",
  },
]

const columns_2: ColumnType<any>[] = [
  {
    title: "Max travel (device dimensions)",
    dataIndex: "max_travel",
    align: "center",
  },
  {
    title: "mm",
    dataIndex: "mm",
    align: "center",
  },
]

const columns_3: ColumnType<any>[] = [
  {
    title: "Max in place acceleration",
    dataIndex: "max_acceleration",
    align: "center",
  },
  {
    title: "m/s²",
    dataIndex: "m_s",
    align: "center",
  },
]

const columns: ColumnType<any>[] = [
  {
    title: "Pt",
    dataIndex: "pt",
    align: "center",
  },
  {
    title: "X location (mm)",
    dataIndex: "x_loc",
    align: "center",
  },
  {
    title: "Y location (mm)",
    dataIndex: "y_loc",
    align: "center",
  },
  {
    title: "Haptic location (Y/N)",
    dataIndex: "haptic_loc",
    render: (val: boolean) => <Tag color={val ? "green" : "red"}>{(val ? "yes" : "no").toUpperCase()}</Tag>,
    align: "center",
  },
  {
    title: "Test to load (N)",
    dataIndex: "test_to_load",
    align: "center",
  },
  {
    title: "Min Z (mm)",
    dataIndex: "min_z",
    align: "center",
  },
  {
    title: "Z velocity no load (mm/s)",
    dataIndex: "z_velo_load",
    align: "center",
  },
  {
    title: "Z velocity press (mm/s)",
    dataIndex: "z_velo_press",
    align: "center",
  },
  {
    title: "Z velocity release (mm/s)",
    dataIndex: "z_velo_release",
    align: "center",
  },
  {
    title: "Dwell (ms)",
    dataIndex: "dwell",
    align: "center",
  },
  {
    title: "Z velocity ramp (Y/N)",
    dataIndex: "z_velo_ramp",
    align: "center",
  },
]

const date_0 = [
  {
    max_in_plane_velo: "Max velocity (x,y)",
    mm_s: 24,
  },
]

const date_1 = [
  {
    starting_corner_device: "X zero position",
    mm: 24,
  },
  {
    starting_corner_device: "Y zero position",
    mm: 24,
  },
]

const date_2 = [
  {
    max_travel: "X zero position",
    mm: 300,
  },
]

const date_3 = [
  {
    max_acceleration: "Max acceleration (x,y)",
    m_s: 3.8,
  },
]

const data = [
  {
    key: "1",
    pt: "1",
    x_loc: 12,
    y_loc: 32,
    haptic_loc: true,
    test_to_load: 24,
    min_z: 147,
    z_velo_load: 7,
    z_velo_press: 7,
    z_velo_release: 7,
    dwell: 1.1,
    z_velo_ramp: 15,
  },
  {
    key: "2",
    pt: "2",
    x_loc: 24,
    y_loc: 21.1,

    haptic_loc: true,
    test_to_load: 24,
    min_z: 24,
    z_velo_load: 85,
    z_velo_press: 85,
    z_velo_release: 85,
    dwell: 2.78,
    z_velo_ramp: 44.85,
  },
  {
    key: "3",
    pt: "3",
    x_loc: 1.7,
    y_loc: 125,
    haptic_loc: false,
    test_to_load: 24,
    min_z: 2,
    z_velo_load: 42,
    z_velo_press: 42,
    z_velo_release: 42,
    dwell: 23.1,
    z_velo_ramp: 3.77,
  },
]
export const Home: React.FC<props> = ({ title }) => {
  const { pathname } = useLocation()

  return (
    <Row gutter={[0, 24]}>
      <Col span={24}>
        <Text style={{ fontSize: "1.5em", fontWeight: "bold" }}>{title ?? pathname.slice(1)}</Text>
      </Col>
      <Col span={24}>
        <Divider orientation="left" style={{ margin: 0 }}>
          <Text type="secondary" style={{ fontSize: ".8em" }}>
            General test information
          </Text>
        </Divider>
        <GeneralInfo />
      </Col>
      <Col span={24}>
        <Divider orientation="left" style={{ margin: 0 }}>
          <Text type="secondary" style={{ fontSize: ".8em" }}>
            Programming process
          </Text>
        </Divider>
        <Row gutter={[42, 10]}>
          <Col>
            <Table columns={columns_1} dataSource={date_1} pagination={false} style={{ marginTop: 20 }} />
          </Col>
          <Col>
            <Table columns={columns_0} dataSource={date_0} pagination={false} style={{ marginTop: 20 }} />
          </Col>
          <Col>
            <Table columns={columns_2} dataSource={date_2} pagination={false} style={{ marginTop: 20 }} />
          </Col>
          <Col>
            <Table columns={columns_3} dataSource={date_3} pagination={false} style={{ marginTop: 20 }} />
          </Col>
          <Col>
            <Table columns={columns} dataSource={data} style={{ marginTop: 20 }} />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

const GeneralInfo = () => {
  return (
    <Form name="basic" labelCol={{ span: 24 }} initialValues={{ remember: true }} autoComplete="off">
      <Row
        justify="space-around"
        gutter={[40, 0]}
        style={{ background: "#ebebeb", padding: "25px 35px", margin: "20px auto", boxShadow: "1px 2px 3px 0px #c5c5c5" }}
      >
        <Col span={8}>
          <Form.Item label="Name" name="name" rules={[{ required: true, message: "Please input your username!" }]}>
            <Input />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Device ID" name="device_id" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Serial Num" name="serial_num" rules={[{ required: true, message: "Please input your password!" }]}>
            <Input />
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Test Date" name="test_date">
            {/* <Text>Test Date : </Text> */}
            <Text type="secondary">12/12/2022 12:24:25</Text>
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Test profile creation date" name="profile_creation">
            {/* <Text>Test Date : </Text> */}
            <Text type="secondary">12/12/2022 12:24:25</Text>
          </Form.Item>
        </Col>

        <Col span={8}>
          <Form.Item label="Test profile author" name="profile_author">
            {/* <Text>Test Date : </Text> */}
            <Text type="secondary">tester_1@gmail.com</Text>
          </Form.Item>
        </Col>
      </Row>

      {/* <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item> */}
    </Form>
  )
}
