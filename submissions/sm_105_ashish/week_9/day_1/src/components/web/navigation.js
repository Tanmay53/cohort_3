import React from 'react'
import Listitem from './navlist'


function Nav(){
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-dark">
                <a class="navbar-brand text-light" href="#">Uber</a>
                
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link text-light" href="#">Product <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="#">Company</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link text-light" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Safety
                            </a>

                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled text-light" href="#" tabindex="-1" aria-disabled="true">Help</a>
                        </li>
                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <button class="btn mx-2 my-2 my-sm-0 text-light" type="submit">EN</button>
                        <button class="btn mx-2 my-2 my-sm-0 text-light" type="submit">Log in</button>
                        <button class="btn my-2 my-sm-0 bg-light" type="submit">Sign Up</button>
                    </form>
                </div>
            </nav>
        </div>
    )
}
export default Nav;