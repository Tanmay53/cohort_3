import React from 'react'
class Amenities extends React.Component{
    render(){
        return(
            <div className="container">
                <h4 className="font-weight-bold">Amenities</h4>
                <div className="row">
                    {this.props.amen.map(elements=>
                    <div className="col-10 offset-1 col-md-6 offset-md-0 col-lg-3 d-flex" key={elements}>
                        <div style={{height:"5px",width:"20px"}}className="mt-3 mr-2 background"></div>
                        <div className="h6 my-2">{elements}</div>
                    </div> )} 
                </div>
            </div>
        )
    }
}
export default Amenities