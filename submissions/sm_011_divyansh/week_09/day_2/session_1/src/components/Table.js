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
                            <th scope="col">Profile Pic</th>
                            <th scope="col">Username</th>
                            <th scope="col">Github Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.details.map(((e) =>
                            <tr key={e.id}>
                                <td><img src={e["avatar_url"]} style={{ width: "80px", height: "75px" }} /></td>
                                <td>{e.login}</td>
                                <td><a href={e["html_url"]} className="btn border btn-dark" target="_blank">show</a></td>
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