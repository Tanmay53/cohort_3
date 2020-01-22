import React from 'react'
export default class Navbar extends React.Component {
    render(props) {
        return (
            <>
                <nav className="navbar navbar-expand-lg navbar-light bg-warning d-flex justify-content-between">
                    <a className="navbar-brand" href="#"><img className="img-fluid" src="https://www.masaischool.com/static/img/logo.svg" alt=""/></a>
                    <div className="navbar-nav ">
                        {this.props.children}
                    </div>
                </nav>
            </>
        )
    }
}