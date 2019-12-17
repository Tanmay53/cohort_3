import React from 'react'

class Uber extends React.Component {
    render() {
        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                        <nav class="navbar navbar-dark bg-dark">
                            <a class="navbar-brand" href="#">Uber</a>
                            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div class="navbar-nav">
                                <a class="nav-item nav-link active" href="#">Products <span class="sr-only">(current)</span></a>
                                <a class="nav-item nav-link" href="#">Company</a>
                                <a class="nav-item nav-link" href="#">Safety</a>
                                <a class="nav-item nav-link" href="#">Help</a>
                                </div>
                            </div>
                        </nav>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Uber