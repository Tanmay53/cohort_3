import React from 'react';
import { Row, Col, Input, Typography, Button, message } from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';
const { Paragraph, Title } = Typography;

class Edit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item_name: '',
      purchase: '',
      quality: '',
      lineno: ''
    };
  }

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    let item_name = query.get('item');
    let purchase = query.get('purchase');
    let lineno = query.get('key');
    let quality = query.get('quality');
    this.setState({ item_name, purchase, quality, lineno });
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = async e => {
    e.preventDefault();
    let res = await axios({
      method: 'post',
      url: `http://localhost:5000/edit/${this.state.lineno + 1}`,
      data: {
        item: this.state.item_name,
        quality: this.state.quality
      }
    });
    console.log(res);
    message.success('Item Edited Successfully go to home page');
  };
  render() {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '350px' }}>
          <Title level={2} style={{ color: 'black', marginTop: '10px' }}>
            Edit Data{' '}
          </Title>
          <Paragraph>Item Name</Paragraph>
          <Input
            placeholder='item name'
            name='item_name'
            value={this.state.item_name}
            onChange={this.onChange}
          ></Input>
          <Paragraph>Purchase</Paragraph>
          <Input
            placeholder='item name'
            name='purchase'
            value={this.state.purchase}
            disabled
            onChange={this.onChange}
          ></Input>
          <Paragraph>Quality</Paragraph>
          <Input
            placeholder='item name'
            name='quality'
            value={this.state.quality}
            onChange={this.onChange}
          ></Input>
          <Button
            type='primary'
            style={{ marginTop: '10px' }}
            onClick={this.onSubmit}
          >
            Edit data
          </Button>
          <br></br>
          <Link to='/'>Back to home</Link>
        </div>
      </div>
    );
  }
}

export default Edit;
