import React from 'react'
import styles from './home.module.css'

class Home extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div>
                <div className='d-flex flex-md-row flex-column justify-content-md-between rounded bg-info m-2' style={{backgroundImage:'url("./sale2.png")',objectFit:'cover',border:'5px solid red'}}>
                    <img src='/sale.png' className='col-4 ml-5 d-block w-100 p-2' style={{height:'120px'}} />
                    <div className='col text-md-right text-center mr-5'>
                        <h1>Use Coupon Code</h1>
                        <div className='h1 font-weight-bold'>VM202MAX</div>
                    </div>
                </div>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-interval="3000">
                            <img src="/BG1.jpg" className={`${styles.pic} d-block w-100`} alt="image" />
                            <div className={`${styles.carsl} carousel-caption d-none d-block`}>
                                <div>First slide label</div>
                                <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="3000">
                            <img src="./BG2.jpg" className={`${styles.pic} d-block w-100`} alt="image" />
                            <div className={`${styles.carsl} carousel-caption d-none d-block`}>
                                <div>First slide label</div>
                                <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                            </div>
                        </div>
                        <div className="carousel-item" data-interval="3000">
                            <img src="/BG3.jpg" className={`${styles.pic} d-block w-100`} alt="image" />
                            <div className={`${styles.carsl} carousel-caption d-none d-block`}>
                                <div>First slide label</div>
                                <h1>Nulla vitae elit libero, a pharetra augue mollis interdum.</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default Home