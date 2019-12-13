import React from 'react';

const MobileOps = (props) => {
    return (
        props.list1.map(function(ele){
            return <li>{ele}</li>
        })
    )
}


    
export default MobileOps
  
