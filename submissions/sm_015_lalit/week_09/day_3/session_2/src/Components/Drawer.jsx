import React from 'react'
export default class Drawer extends React.Component{
    render(props){
        return(
            <div className="col-2 bg-light border">
                <br></br>
                {this.props.children}
            </div>
        )
    }
}