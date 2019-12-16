import React from 'react'

class Navbar extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <nav class="navbar navbar-expand-lg bg-dark text-white p-3">
                <div className='container'>
                    <div className='row'>
                            <ul class="navbar-nav">
                                <li>
                                    <a class="navbar-brand text-white" href="#">Uber</a>
                                </li>
                                <li class="nav-item ">
                                    <a class="nav-link text-white" href="#">Products</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Company</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Safety</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Help</a>
                                </li>
                                
                                <li class="nav-item ml-5">
                                    <a class="nav-link text-white" href="#">En</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Login</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link text-white" href="#">Sign Up</a>
                                </li>
                            </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar   