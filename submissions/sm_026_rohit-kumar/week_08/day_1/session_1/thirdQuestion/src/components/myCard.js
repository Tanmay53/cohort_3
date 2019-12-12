import  React from 'react'
import  ReactDOM from 'react-dom'
import './myCard.css'


const MyCard = () => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-4 offset-4'>
                    <div className='row'>
                        <div className='col'>
                            <div class='card'>
                                <div class="card-body text-center">
                                    <img src='./woman.jpg' className='rounded-circle' />
                                    <h4 className="card-title mt-3">Ricky Park</h4>
                                    <p><b>NEW YORK</b></p>

                                    <p className="card-text">User interface designer and
                                    front-end developer</p>
                                    <div>
                                        <button className='btn btn-outline-primary m-1'>Message</button>
                                        <button className='btn btn-outline-primary m-1'>Following</button>
                                    </div>
                                </div>
                                <div className='card-footer p-3'>
                                        <p>SKILLS</p>
                                        <div class = 'border p-1 d-inline-block m-1 '>UI/UX</div>
                                        <div class = 'border p-1 d-inline-block m-1 '>Front End Development</div>
                                        <div class = 'border p-1 d-inline-block m-1 '>HTML</div>
                                        <div class = 'border p-1 d-inline-block m-1 '>CSS</div>
                                        <div class = 'border p-1 d-inline-block m-1 '>JavaScript</div>
                                        <div class = 'border p-1 d-inline-block m-1 '>React Node</div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyCard