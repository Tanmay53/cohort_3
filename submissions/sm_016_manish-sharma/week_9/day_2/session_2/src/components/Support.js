import React from 'react'

class Support extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='bg-primary text-white text-center' style={{height:'400px'}}>
                <div className='container d-flex justify-content-between p-4'>
                    <h5>Support Portal</h5>
                    <h5>Login with Kite</h5>
                </div>
                <div className='my-5 col-7 mx-auto'>
                    <h4>Search for an answer or browse help topics to create a ticket</h4>
                    <input className='form-control p-4' placeholder='Eg. How do i activate F&O....' />
                </div>
            </div>
        )
    }
}

export default Support