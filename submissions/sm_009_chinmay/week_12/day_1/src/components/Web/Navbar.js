import React from 'react'

const Navbar = (props)=> {
        return (
            <React.Fragment>
                <nav className=" navbar navbar-expand-lg navbar-light">
                    {/* Slack Logo */}
                    <a className="navbar-brand" href="#">
                        <img src="https://www.stickpng.com/assets/images/5cb480b85f1b6d3fbadece78.png" width="130" height="50" alt="Slack Logo" />
                    </a>
                    {/* Navbar Info */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {props.data.map((e)=> 
                                <React.Fragment>
                                    {e.item.map((e) => <a className="nav-link text-dark" href="#">{e}</a>)}
                                </React.Fragment>
                            )}
                        </ul>
                    </div>


                    <form className="form-inline">
                            <button className='btn btn-primary p-2 mr-3'>Your workspaces</button>
                    </form>
                </nav>
            </React.Fragment>
        )
}

export default Navbar;
