import React from 'react';

const Table = (props) => {

    const data = props.data;
    console.log("table", data);


    return (

        < div >
            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Image</th>
                        <th scope="col">Username</th>
                        <th scope="col">Score</th>
                        <th scope="col">Github profile</th>
                        <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(((ele) =>
                        <tr key={ele.id}>
                            <td><img src={ele["avatar_url"]} style={{ width: "100px", height: "100px" }} /></td>
                            <td>{ele.login}</td>
                            <td>{ele.score}</td>
                            <td><a href={ele["html_url"]} className="btn btn-outline-info" target="_blank">Click</a></td>
                        </tr>



                    ))
                    }
                </tbody>
            </table>

        </div >
    )
}


export default Table;