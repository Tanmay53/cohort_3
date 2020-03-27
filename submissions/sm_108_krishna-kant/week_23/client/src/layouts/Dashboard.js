import React from "react";
import { Tabs, PageHeader, Row, Col } from "antd";
import { AppleOutlined, AndroidOutlined } from "@ant-design/icons";
import AddCity from "../components/AddCity";
import AddBus from "../components/AddBus";
import BusList from "../components/BusList";

const { TabPane } = Tabs;

export default function Dashboard() {
  return (
    <div>
      <PageHeader
        className="site-page__header"
        onBack={null}
        title="Dashboard"
        subTitle="List All Your Buses Route"
      />
      <Row>
        <Col span={22} offset={1}>
          <Tabs defaultActiveKey="1">
            <TabPane
              tab={
                <span>
                  <AppleOutlined />
                  Buses Routes
                </span>
              }
              key="1"
            >
              <BusList></BusList>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Location
                </span>
              }
              key="2"
            >
              <AddCity></AddCity>
            </TabPane>
            <TabPane
              tab={
                <span>
                  <AndroidOutlined />
                  Add Bus
                </span>
              }
              key="3"
            >
              <AddBus></AddBus>
            </TabPane>
          </Tabs>
        </Col>
      </Row>
    </div>
  );
}
