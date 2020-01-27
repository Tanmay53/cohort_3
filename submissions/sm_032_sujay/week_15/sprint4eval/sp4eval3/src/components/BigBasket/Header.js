import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <div>


        <nav class="navbar fixed-top navbar-expand-lg navbar-white bg-white">
  <a class="navbar-brand" href=""><img src="http://bbinstant.bigbasket.com/img/logo.png" className="float-left" width="200" height="50" alt=""/></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  
  <div class="collapse navbar-collapse offset-5" id="navbarText">
    <ul class="navbar-nav mr-auto ">
      <li class="nav-item active">
        <a class="nav-link " href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-decoration-none" href="#">Range</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">How It Works</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Benefits</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Payment</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-right" href="#">Contacts</a>
      </li>
    </ul>
   
  </div>
</nav>

        {/* <div class="pos-f-t">
  <div class="collapse" id="navbarToggleExternalContent">
    <div class="bg-dark p-4">
      <h5 class="text-white h4">Collapsed content</h5>
      <span class="text-muted">Toggleable via the navbar brand.</span>
    </div>
  </div>
  <nav class="navbar navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  </nav>
</div> */}
            </div>
        )
    }
}