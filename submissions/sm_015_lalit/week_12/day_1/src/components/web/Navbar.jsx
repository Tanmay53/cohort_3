import React from 'react';
import './JumboCSS.css';
class NavBar extends React.Component{
    render(){
        return(
            <div>
    <nav class="navbar navbar-expand-lg navbar-light mx-2 mb-2">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUwdv7Bab3bb6JIr81zPDCSP5MprGkSzUT2AzadT3GCnDeZRVs&s" width="130" height="34" alt=""/>
</a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active mx-2">
        <a class="nav-link" href="#">Why Slack?</a>
      </li>
      <li class="nav-item active mx-2">
        <a class="nav-link" href="#">Solutions</a>
      </li>
      <li class="nav-item active mx-2">
        <a class="nav-link" href="#">Resources</a>
      </li>
      <li class="nav-item active mx-2">
        <a class="nav-link" href="#">Enterprise</a>
      </li>
      <li class="nav-item active mx-2">
        <a class="nav-link" href="#">Pricing</a>
      </li>
     
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <button class="btn purple my-2 my-sm-0 text-light" type="submit">Your Workspaces</button>
    </form>
  </div>
</nav>
            </div>
        )
    }
}
export default NavBar