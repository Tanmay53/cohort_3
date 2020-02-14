import React from "react";
import { Link } from "react-router-dom"

const Home = (props) => {

    const data = props.data;

    console.log("home", data);
    const listItems = data.map((ele) => {

        return (
            <tr key={ele.id}>
                <td><img src={`${ele.image}`} alt="sample-room" style={{ width: 100, height: 50 }} /></td>
                <td>{ele.id}</td>
                <td>{ele.capacity}</td>
                <td>{ele.floor}</td>
                <td>{ele.price}</td>
                <td><Link className="btn btn-lg btn-primary">Book</Link></td>
            </tr>
        )
    })

    return (
        <div className="mt-5">
            <h1 className="text-center font-weight-normal mb-4">Meeting Room</h1>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Images</th>
                        <th scope="col">Name</th>
                        <th scope="col">Capacity</th>
                        <th scope="col">Floor</th>
                        <th scope="col">Price/day</th>
                        <th scope="col">Link</th>
                    </tr>
                </thead>
                <tbody>
                    {listItems}
                </tbody>
            </table>
        </div>
    )
}



export default Home;