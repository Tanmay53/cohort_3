import React from 'react'
class Table extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: this.props.info
        }
    }
    render() {
        return (
            <div>
                <table class="table"><thead class="text-white bg-dark"><th>ID</th><th>NAME</th><th>CREATED_AT</th><th>OPEN_ISSUES_COUNT</th></thead>
                    <tbody>
                        {this.state.data.map((item) => (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.created_at}</td>
                                <td>{item.open_issues_count}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Table