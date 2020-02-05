import React from 'react'

export default class Card extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)
    }

    render() {
        console.log(this.props.page[0])
        console.log(this.props.page[0].skills[1])
        return (
            <div>

                <div className="bg-dark">
                    <div className="container col-4 offset-4 shadow bg-dark text-secondary border">
                        <img className="offset-3 rounded-circle border border-info mt-5"src="/IMG-20170925-WA0004.png" width="200px" alt="Sujay" />

                       
                        <h3 className="text-center mt-2"> {this.props.page[0].name}    </h3>
                        <h5 className="text-center"> {this.props.page[0].location} </h5>
                        <p className="text-center font-weight-heavy">  {this.props.page[0].description} </p>
                        <div className="row">
                            <button className="btn btn-info offset-3 " > Message </button>
                            <button className="btn btn-outline-info m-2" > Following </button>
                        </div>

                        <div className="shadow-lg offset-2">
                            <p className="font-weight-heavy m-3 ">skills</p>

                            <div className="row m-2">
                                <p className="border m-2">  {this.props.page[0].skills[0]}</p>
                                <p className="border m-2">  {this.props.page[0].skills[1]}</p>
                                <p className="border m-2">  {this.props.page[0].skills[2]}</p>
                            </div>

                        <div className="row m-2">
                                <p className="border m-2">  {this.props.page[0].skills[3]}</p>
                                <p className="border m-2">  {this.props.page[0].skills[4]}</p>
                                <p className="border m-2">  {this.props.page[0].skills[5]}</p>
                            </div>
                        </div>



                    </div>

                </div>
            </div>
        )
    }
}
