import React from 'react'


class About extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='d-flex flex-row justify-content-around'>
                <div className=' d-flex flex-column m-3 p-0 text-width'>
                    <div className='p-1'><img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542256135/assets/dd/c53d7b-8921-4dc7-93f4-45fb59f4ffb9/original/person-multiple-outlined.svg'></img></div>
                    <div>
                        <h5>About us</h5>   
                        <p>Find out how we started, what drives <br/> us, and how we’re igniting opportunity.</p> 
                        <div className='px-0 py-2'>
                            <a href='#' className='py-2 text-dark border-bottom border-dark'>Learn More</a>    
                        </div>    
                    </div>    
                </div>
                <div className=' d-flex flex-column m-3 p-0 text-width'>
                    <div className='p-1'><img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542254244/assets/eb/68c631-5041-4eeb-9114-80048a326782/original/document-outlined.svg'></img></div>
                    <div>
                        <h5>Newsroom</h5>   
                        <p className='text-width'>See announcements about our latest <br/> releases, initiatives, and partnerships.</p> 
                        <div className='px-0 py-2'>
                            <a href='#' className='py-2 text-dark border-bottom border-dark'>Learn More</a>    
                        </div>    
                    </div>    
                </div>
                <div className=' d-flex flex-column m-3 p-0 text-width'>
                    <div className='p-1'><img src='https://www.uber-assets.com/image/upload/q_auto:eco,c_fill,w_24,h_24/v1542255370/assets/64/58118a-0ece-4f80-93ee-8041b53593d5/original/home-outlined.svg'></img></div>
                    <div>
                        <h5>Global citizenship</h5>   
                        <p className='text-width'>Read about our commitment to <br/> making a positive impact in the cities <br/> we serve.</p> 
                        <div className='px-0 py-2'>
                            <a href='#' className='py-2 text-dark border-bottom border-dark'>Learn More</a>    
                        </div>    
                    </div>    
                </div>
            </div>
        )
    }
}

export default About