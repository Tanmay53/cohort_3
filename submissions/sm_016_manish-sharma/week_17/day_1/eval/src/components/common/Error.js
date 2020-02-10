import React from 'react'

class Error extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='py-5' style={{background:'teal',height:'400px'}}>
                <div className='text-center h2'><i>-- error --</i></div>
                <div>
                    <div className='d-flex justify-content-center'>
                        <div className='display-1 text-danger font-weight-bold'>4</div>
                        <div className='display-1 text-warning font-weight-bold'>{`</>`}</div>
                        <div className='display-1 text-danger font-weight-bold'>4</div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Error