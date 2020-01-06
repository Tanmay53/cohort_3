import React from 'react'

export default function Menswear(props) {
        if(props.wear === 'foot'){
        return( <React.Fragment>
                <h1 className='mt-5'>This page is for mens wear</h1>
            </React.Fragment>)
        }else{
        return (<React.Fragment>
                <h1  className='mt-5'>This page is for glass wear</h1>
            </React.Fragment>)
        }
}
