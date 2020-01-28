import React from 'react';
import { Typography, Layout, Table, Divider, Button } from 'antd';
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
          render: (text, record) => (
            <div>
              <Link to='/delete'>Delete</Link>
              <Divider type='vertical' />
              <Link to='/edit'>Edit</Link>
              <Divider type='vertical' />
              <Link to='/purchased'>Mark Purchased</Link>
            </div>
          )
        }
      ],
      dataset: []
    };
  }

  async componentDidMount() {
    let data = await axios.get('http://localhost:5000/listing');
    data.data.items.forEach((item, index) => (item.key = index));
    this.setState({ dataset: data.data.items });
  }

  render() {
    const { columns, dataset } = this.state;
    return (
      <Layout>
        <Header>
          <Title level={2}>Groceries Data</Title>
        </Header>
        <Content>
          <Table columns={columns} dataSource={dataset}></Table>
        </Content>
        <Footer>
          <Button type='danger'>
            <Link to='/add'>Add Data</Link>
          </Button>
        </Footer>
      </Layout>
    );
  }
}

export default Home;
