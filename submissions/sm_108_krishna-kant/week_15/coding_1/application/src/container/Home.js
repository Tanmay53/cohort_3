import React from 'react';
import {
  Typography,
  Layout,
  Table,
  Divider,
  Button,
  Popconfirm,
  message
} from 'antd';
import axios from 'axios';
import { Link } from 'react-router-dom';

const { Title } = Typography;
const { Header, Content, Footer } = Layout;

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      columns: [
        {
          title: <h3>Name</h3>,
          dataIndex: 'item',
          key: 'item'
        },
        {
          title: <h3>Quality</h3>,
          dataIndex: 'quality',
          key: 'quality'
        },
        {
          title: <h3>Purchased</h3>,
          dataIndex: 'purchased',
          key: 'purchased'
        },
        {
          title: 'Action',
          key: 'action',
          render: (text, record) => {
            return (
              <div>
                <Popconfirm
                  title='Are you sure delete this task?'
                  onConfirm={() => this.confirm(record.key, record.item)}
                  onCancel={this.cancel}
                  okText='Yes'
                  cancelText='No'
                >
                  <a href='#'>Delete</a>
                </Popconfirm>
                <Divider type='vertical' />
                <Link
                  to={`/edit?item=${record.item}&key=${record.key}&quality=${record.quality}&purchase=${record.purchased}`}
                >
                  Edit
                </Link>
                <Divider type='vertical' />
                <Popconfirm
                  title='Are you sure mark this as purchased?'
                  onConfirm={() => this.purchaseTrue(record.key, record.item)}
                  onCancel={this.cancel}
                  okText='Yes'
                  cancelText='No'
                >
                  <a href='#'>Mark Purchase</a>
                </Popconfirm>
              </div>
            );
          }
        }
      ],
      dataset: [],
      purchasedData: [],
      purchased: false
    };
  }

  confirm = async (key, item) => {
    let msg = await axios({
      method: 'post',
      url: 'http://localhost:5000/delete',
      data: {
        item_no: key + 1
      }
    });
    message.success(`Deleted Successfully ${item}`);
    this.fetchData();
  };
  cancel = e => {
    message.error('You Click No');
  };
  async componentDidMount() {
    this.fetchData();
  }

  purchaseTrue = async (key, item) => {
    let msg = await axios({
      method: 'post',
      url: 'http://localhost:5000/purchased',
      data: {
        item_no: key + 1
      }
    });
    message.success(`Item Purchased ${item}`);
    this.fetchData();
  };

  fetchData = async () => {
    let data = await axios.get('http://localhost:5000/listing');
    data.data.items.forEach((item, index) => (item.key = index));
    this.setState({ dataset: data.data.items });
  };
  showPurchasedData = async () => {
    let data = await axios.get('http://localhost:5000/purchased');
    data.data.items.forEach((item, index) => (item.key = index));
    this.setState({ purchasedData: data.data.items, purchased: true });
  };

  render() {
    const { columns, dataset, purchasedData, purchased } = this.state;
    return (
      <Layout>
        <Header>
          <Title level={2}>Groceries Data</Title>
        </Header>
        <Content>
          <Table
            columns={columns}
            dataSource={purchased ? purchasedData : dataset}
          ></Table>
        </Content>
        <Footer>
          <Button type='danger'>
            <Link to='/add'>Add Data</Link>
          </Button>
          <Button
            type='primary'
            style={{ marginLeft: '10px' }}
            onClick={this.showPurchasedData}
          >
            Show Purchased items
          </Button>
          <Button
            type='primary'
            style={{ marginLeft: '10px' }}
            onClick={() => {
              this.setState({ purchased: false });
            }}
          >
            Show All
          </Button>
        </Footer>
      </Layout>
    );
  }
}

export default Home;
