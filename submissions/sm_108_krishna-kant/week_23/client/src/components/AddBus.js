import React, { useRef, useEffect, useState } from "react";
import { connect } from "react-redux";
import { loadLocation } from "../redux/actions/location";
import { addBus } from "../redux/actions/bus";
import {
  Typography,
  Input,
  Button,
  Row,
  Col,
  Select,
  InputNumber,
  notification
} from "antd";

const { Option } = Select;
const { Title } = Typography;

function AddBus({ loadLocation, locations, addBus }) {
  useEffect(() => {
    loadLocation();
  }, []);

  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [pid, setPid] = useState("");
  const [busType, setType] = useState("");
  const [hours, setHours] = useState(0);
  const [minute, setMinute] = useState(0);

  function handleChangeSource(value) {
    setSource(value);
  }

  function handleChangeDestination(value) {
    setDestination(value);
  }

  function handleChangeHours(value) {
    setHours(value);
  }

  function handleChangeMinute(value) {
    setMinute(value);
  }

  function handleChangePID(value) {
    setPid(value);
  }

  function handleChangeType(value) {
    setType(value);
  }

  function saveBusData() {
    let data = {
      pid,
      bus_type: busType,
      source,
      destination,
      hours,
      minute
    };

    addBus(data);

    notification.open({
      message: "Bus Added",
      description: "Bus Added Successfully Please go to Home Page to Check"
    });

    handleChangeType("");
    handleChangePID("");
    handleChangeDestination("");
    handleChangeSource("");
    handleChangeMinute(0);
    handleChangeHours(0);
  }

  return (
    <div>
      <Title level={3}>Add Bus</Title>
      <p>Please Fill the Data and Add Bus Details</p>
      <form>
        <Row style={{ margin: "1rem 0" }}>
          <Col
            lg={{ span: 8, offset: 0 }}
            md={{ span: 10, offset: 0 }}
            sm={{ span: 22, offset: 1 }}
          >
            <Input
              placeholder="Enter PID"
              value={pid}
              onChange={e => handleChangePID(e.target.value)}
            ></Input>
            <Input
              placeholder="Enter Bus Type"
              style={{ margin: "1rem 0rem" }}
              value={busType}
              onChange={e => handleChangeType(e.target.value)}
            ></Input>
            <Select
              placeholder="Enter Source"
              onChange={handleChangeSource}
              style={{ width: "50%" }}
              value={source}
            >
              {locations.map(item => (
                <Option value={item.id} key={item.id}>
                  {item.name}
                </Option>
              ))}
              <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Select
              placeholder="Enter Destination"
              onChange={handleChangeDestination}
              value={destination}
              style={{ width: "50%" }}
            >
              {locations.map(item => (
                <Option value={item.id} key={item.id}>
                  {item.name}
                </Option>
              ))}
            </Select>
            <small style={{ margin: ".5rem 0" }}>
              Enter Starting Time 24Hours Format
            </small>
            <br></br>
            <InputNumber
              placeholder="Hours"
              style={{ margin: "0rem 0rem", width: "50%" }}
              value={hours}
              min={1}
              max={24}
              onChange={handleChangeHours}
            ></InputNumber>
            <InputNumber
              placeholder="Minute"
              style={{ margin: "0rem 0rem", width: "50%" }}
              min={1}
              value={minute}
              max={60}
              onChange={handleChangeMinute}
            ></InputNumber>
            <Button
              type="primary"
              style={{ margin: "1rem 0rem" }}
              onClick={saveBusData}
            >
              Add Bus
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

const mapStateToProps = state => ({
  locations: state.location.locations
});

export default connect(mapStateToProps, { loadLocation, addBus })(AddBus);
