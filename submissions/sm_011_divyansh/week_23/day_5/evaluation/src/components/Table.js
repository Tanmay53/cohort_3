import React from 'react';
class Table extends React.Component {
    constructor(props) {
        super(props)
    }
  
   
    render() {
        return (
            <div >
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">name</th>
                            <th scope="col">gender</th>
                            <th scope="col">dept</th>
                            <th scope="col">salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {this.props.details.map(((e, i) =>
                            <tr key={i}>
                                <td>{e.name}</td>
                                <td>{e.gender}</td>
                                <td>{e.dept}</td>
                                <td>{e.salary}</td>
                                
                            </tr>
                        ))
                        }
                    </tbody>
                </table>

            </div >
        )
    }
}
export default Table;
