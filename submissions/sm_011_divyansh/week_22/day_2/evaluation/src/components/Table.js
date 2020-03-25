import React from 'react';
class Table extends React.Component {
    constructor(props) {
        super(props)
    }
    del = (e) => {
        var id = e.target.id;
        var itemInstance = this.props.details;
        itemInstance.splice(id, 1)
        this.setState({
            Data: this.props.details,
        })
    }
    render() {
        return (
            <div >
                <table className="table mt-4">
                    <thead>
                        <tr>
                            <th scope="col">Teacher</th>
                            <th scope="col">Mobile</th>
                            <th scope="col">Section</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.details.map(((e, i) =>
                            <tr key={i}>
                                <td>{e.teacher}</td>
                                <td>{e.class}</td>
                                <td>{e.section}</td>
                                <td>{e.subject}</td>
                                <td onClick={this.del} className="btn border btn-danger" id={i}>Del</td>
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
