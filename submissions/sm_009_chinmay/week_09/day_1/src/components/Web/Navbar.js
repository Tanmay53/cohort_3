import React, { Component } from 'react'

class Navbar extends Component {
    constructor(){
        super();

        this.state = {
            list: [
                {
                item: ["Product", "Company", "Safety", "Help"], 
                besideIconText: ["EN", "Log In"],
                icons: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmgSVIxQ556O81eXqQ5pb25tdMAjnYYHM1FjG21XUzh75wXbM3&s",
                "https://png.pngtree.com/svg/20170406/login_registration_small_user_300918.png"
            ]
            }
            ]
        }
    }

    render(){
        return (
            <React.Fragment>
                <nav className=" navbar navbar-expand-lg navbar-light">
                    {/* Uber Logo */}
                    <a className="navbar-brand" href="#">
                        <img src="https://mondrian.mashable.com/2018%252F09%252F13%252Ff8%252Fb8e27b3b340b4147b86c0d1c2cd7d1b5.67978.jpg%252F1200x630.jpg?signature=WzXjA-ZbPEBrTtMJ8waIt132wkk=" width="130" height="50" alt="" />
                    </a>
                    {/* Navbar Info */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {this.state.list.map((e)=> 
                                <React.Fragment>
                                    {e.item.map((e) => <a className="nav-link text-dark" href="#"><small>{e}</small></a>)}
                                </React.Fragment>
                            )}
                        </ul>
                    </div>


                    <form className="form-inline">
                            <a href="#" className='text-decoration-none text-dark'>
                                <span className=" ml-5 p-1"><img style={{width:21}} className='p-1' src="https://cdn3.iconfinder.com/data/icons/ui-ux-web-application-simplicon-set/102/internet-globe-512.png"></img>EN</span>
                            </a>

                            <a href="#" className='text-decoration-none text-dark'>
                                <span className="glyphicon glyphicon-search ml-3"><img className='p-1' style={{width:21}} src="https://png.pngtree.com/svg/20170406/login_registration_small_user_300918.png"></img>Log In</span>
                            </a>
                            <button className='btn btn-secondary  p-1 ml-3'>Sign Up</button>
                    </form>
                </nav>
            </React.Fragment>
        )
    }
}

export default Navbar;
