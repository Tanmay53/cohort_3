import React from "react"

class Cards extends React.Component{
    constructor(props) {
        super()
        this.state={

        }
    }
    render(){
        return(
            <div className="row">
                {this.props.data.map((ele)=><div className="col-3 p-1"><div><img className="img-fluid" src={ele.img}/></div>
                <h3>{ele.titile}</h3>
                </div>)}
            </div>
        )
    }
}
export default Cards