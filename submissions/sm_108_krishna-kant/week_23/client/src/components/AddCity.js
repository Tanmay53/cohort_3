import React, { useRef } from "react";
import { connect } from "react-redux";
import { addLocation } from "../redux/actions/location";
import { Typography, Input, Button, Row, Col, notification } from "antd";

const { Title } = Typography;

function AddCity({ addLocation }) {
  const inputEl = useRef(null);

  const saveLocation = () => {
    let location = inputEl.current.state.value;
    addLocation(location);
    notification.open({
      message: "Location Added Successfully",
      description:
        "location is added to list you can find it while creating Bus trip"
    });
  };

  return (
    <div>
      <Title level={3}>Add Location</Title>
      <p>Please Fill the Data and Add Location Details</p>
      <form>
        <Row style={{ margin: "2rem 0" }}>
          <Col
            lg={{ span: 6, offset: 0 }}
            md={{ span: 10, offset: 0 }}
            sm={{ span: 22, offset: 1 }}
          >
            <Input placeholder="Enter Location" ref={inputEl}></Input>
            <Button
              type="primary"
              style={{ margin: "2rem 0rem" }}
              onClick={saveLocation}
            >
              Add Location
            </Button>
          </Col>
        </Row>
      </form>
    </div>
  );
}

export default connect(null, { addLocation })(AddCity);
