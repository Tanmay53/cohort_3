import React, { useEffect, useState } from "react";
import { Typography, Col, Row, Radio, notification } from "antd";
import Table from "./Table";
import { connect } from "react-redux";
import { busList, busListCustom } from "../redux/actions/bus";
import { loadLocation } from "../redux/actions/location";
import { Select } from "antd";

const { Title } = Typography;
const { Option } = Select;

function BusList({ busList, data, locations, loadLocation, busListCustom }) {
  useEffect(() => {
    busList();
    loadLocation();
  }, []);

  const [location, setLocation] = useState("");

  function handleChangeLocation({ target: { value } }) {
    setLocation(value);
    console.log(value);
  }

  function handleChange(value) {
    if (location == "") {
      notification.open({
        message: "Choose Location Type",
        description: "Please select a Location type "
      });
    } else {
      busListCustom({ location, value });
    }
  }

  return (
    <div style={{ width: "100vw" }}>
      <Title level={3}>Bus Trip Details</Title>
      <p>
        List of all Bus trips User is able to filter and check Pagewise Result
      </p>

      <Row>
        <Col lg={{ span: 12 }} sm={24}>
          <Table datasource={data.length > 0 ? [...data] : []}></Table>
        </Col>
        <Col lg={{ span: 12 }} sm={24}>
          <Title level={4}>Filter By Location</Title>
          <Radio.Group onChange={handleChangeLocation} value={location}>
            <Radio value="source">Source</Radio>
            <Radio value="destination">Destination</Radio>
          </Radio.Group>
          <Select style={{ width: 120 }} onChange={handleChange}>
            {locations.map(item => (
              <Option value={item.name} key={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.bus.buses,
  locations: state.location.locations
});

export default connect(mapStateToProps, {
  busList,
  loadLocation,
  busListCustom
})(BusList);
