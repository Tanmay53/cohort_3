import React from 'react'
import {Link} from 'react-router-dom'

function Carusal() {
    return (
            <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE37lBy?ver=c49d&q=90&m=8&h=472&w=1259&b=%23FFFFFFFF&l=f&x=0&y=193&s=2120&d=795&aim=true" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className="h4 pb-2 text-dark font-weight-bold">This is your 365</h5>
                        <p className="text-dark pb-2 sm-font">Discover what's possible every day with Office 365</p>
                        <Link to="/cart" className="text-white bg-dark py-3 px-4 font-weight-bold" >Shop Now >></Link>
                    </div>
                    </div>
                    <div class="carousel-item">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE2Ni4z?ver=0f5a&q=90&m=8&h=472&w=1259&b=%23FFFFFFFF&l=f&x=0&y=185&s=2120&d=795&aim=true" class="d-block w-100" alt="..."/>
                    <div class="carousel-caption d-none d-md-block">
                        <h5 className="h4 pb-2 font-weight-bold">Go a touch above odinary</h5>
                        <p className="pb-2">Surface Laptop 2</p>
                        <Link to="/cart" className="text-dark bg-white py-2 px-4 font-weight-bold">Shop Now ></Link>
                    </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
    )
}

export default Carusal
