import React, { useEffect, useState } from "react";
import { Typography, Col, Row, Radio, notification, Button } from "antd";
import Table from "./Table";
import { connect } from "react-redux";
import { busList, busListCustom, changePage } from "../redux/actions/bus";
import { loadLocation } from "../redux/actions/location";
import { Select } from "antd";

const { Title } = Typography;
const { Option } = Select;

function BusList({
  busList,
  data,
  locations,
  loadLocation,
  busListCustom,
  prev,
  next,
  changePage
}) {
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

  function handleChangePage(e) {
    if (e.target.value == "prev") {
      changePage({ page: prev });
    } else {
      changePage({ page: next });
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
          <Select
            style={{ width: 120 }}
            onChange={handleChange}
            placeholder="Choose Location"
          >
            {locations.map(item => (
              <Option value={item.name} key={item.id}>
                {item.name}
              </Option>
            ))}
          </Select>
          <div style={{ margin: "2rem 0" }}>
            <Title level={4}>Change Page</Title>
            <Button onClick={handleChangePage} value="prev">
              Prev
            </Button>
            <Button onClick={handleChangePage} value="next">
              Next
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

const mapStateToProps = state => ({
  data: state.bus.buses,
  locations: state.location.locations,
  prev: state.bus.previous,
  next: state.bus.next
});

export default connect(mapStateToProps, {
  busList,
  loadLocation,
  busListCustom,
  changePage
})(BusList);
