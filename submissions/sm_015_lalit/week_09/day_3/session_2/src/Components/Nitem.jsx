import React from 'react'
export default class Nitem extends React.Component{
    render(props){
        return(
            <a className="nav-item nav-link mx-2" href="#">{this.props.label}</a>
        )
    }
}