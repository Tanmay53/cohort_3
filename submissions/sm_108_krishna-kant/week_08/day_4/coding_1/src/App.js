import React from 'react';
import './App.css';
import UserForm from './components/UserForm';
import Table from './components/Table';
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      employees: []
    };
  }
  formDataAdded = () => {
    let employeesList = JSON.parse(localStorage.getItem('Employees'));
    this.setState({ employees: employeesList }, () => {});
  };

  showDepartmentData = e => {
    let newEmployeeList = [];
    if (e.target.value == 'All') {
      newEmployeeList = JSON.parse(localStorage.getItem('Employees'));
    } else {
      let employeesList = JSON.parse(localStorage.getItem('Employees'));

      employeesList.forEach(data => {
        if (data.department == e.target.value) {
          newEmployeeList.push(data);
        }
      });
    }
    this.setState({ employees: newEmployeeList });
  };

  sortDataByOrder = e => {
    if (e.target.value == 'Ascending') {
      let employeesList = JSON.parse(localStorage.getItem('Employees'));
      employeesList.sort((a, b) => {
        let sa = parseInt(a.salary);
        let sb = parseInt(b.salary);

        return sa - sb;
      });
      this.setState({ employees: employeesList });
    } else {
      let employeesList = JSON.parse(localStorage.getItem('Employees'));
      employeesList.sort((a, b) => {
        let sa = parseInt(a.salary);
        let sb = parseInt(b.salary);

        return sb - sa;
      });
      this.setState({ employees: employeesList });
    }
  };

  render() {
    return (
      <div className='App'>
        <header className='container'>
          <div className='row'>
            <div className='col-md-4 mt-5'>
              <h3>Enter Employee Details</h3>
              <UserForm callback={this.formDataAdded} />
            </div>
            <div className='col-md-8 mt-5'>
              <h3>Employees Details</h3>
              <div className='row'>
                <div className='form-group col-md-8'>
                  <small className='text-danger'>Filter From Department</small>
                  <select
                    className='form-control'
                    onChange={this.showDepartmentData}
                  >
                    <option>All</option>
                    <option value='IT Department'>IT Department</option>
                    <option value='Management'>Management</option>
                    <option value='Sales Department'>Sales Department</option>
                    <option value='Financial Department'>
                      Financial Department
                    </option>
                  </select>
                </div>
                <div>
                  <small className='text-danger'>Sort From Salary</small>
                  <select
                    className='form-control'
                    onChange={this.sortDataByOrder}
                  >
                    <option value='Ascending'>Ascending</option>
                    <option value='Descending'>Descending</option>
                  </select>
                </div>
              </div>
              <Table data={this.state.employees} />
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
