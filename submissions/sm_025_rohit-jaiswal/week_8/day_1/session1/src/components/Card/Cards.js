    import React from "react";
    export default class Cards extends React.Component {
    render() {
        return (
        <div>
            <div class="container bg-secondary  justify-content-center" style={{ height: "800px", marginLeft: "400px" }}>
            <div
                className="card bg-primary"
                style={({ height: "300px" }, { width: "300px" })}
            >
                <img
                src="https://ca.slack-edge.com/TQW9G4X2N-UQXMSH8M9-00f652d73753-512"
                style={{ "border-radius": "50%", width: "150px" }}
                class="card-img-top m-5"
                alt="dp"
                />
                <div class="card-body">
                <h5 class="card-title text-center">Rohit Jaiswal</h5>
                <p class="text-center"><b>NEW DELHI</b></p>
                <p class="text-center"> User Interface Designer and <br/> Front-end Devloper</p>
                <p class="card-text text-center">
                    <button type="button" class="btn btn-outline-danger btn-md m-2">
                    Messege
                    </button>

                    <button type="button" class="btn btn-danger btn-md">
                    Following
                    </button>
                </p>
                </div>
            </div>
            </div>
        </div>
        );
    }
    }
