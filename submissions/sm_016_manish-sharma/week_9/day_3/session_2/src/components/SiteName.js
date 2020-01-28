import React from 'react'



class SiteName extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className='bg-info badge-pill'>
                {/* <span className='bg-info rounded'> */}
                    {this.props.children}
                    {/* </span> */}
            </div>
        )
    }
}

export default SiteName