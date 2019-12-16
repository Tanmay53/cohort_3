import React from 'react';
import Row from './rows/Row';
class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: this.props.data
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ employees: nextProps.data });
  }
  componentDidMount() {
    let employeesList = JSON.parse(localStorage.getItem('Employees'));
    if (employeesList != undefined) {
      this.setState({ employees: employeesList });
    }
  }
  render() {
    return (
      <table className='table table-striped'>
        <thead className='thead-dark'>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {this.state.employees.map(employee => {
            return <Row key={employee.name} employee={employee} />;
          })}
        </tbody>
      </table>
    );
  }
}

export default Table;
