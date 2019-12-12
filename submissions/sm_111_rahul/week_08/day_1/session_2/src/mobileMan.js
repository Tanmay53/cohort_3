import React from 'react';

const MobileMan = (props) => {
    return (
        props.list2.map(function(ele){
            return <li>{ele}</li>
        })
    )
}


    
export default MobileMan
  
