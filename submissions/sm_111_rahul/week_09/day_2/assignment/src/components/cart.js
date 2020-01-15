/** @format */

import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
class Cart extends Component {
    
  render() {
      if(this.props.isAuth == false){
        {console.log(this.props)}
          return <Redirect to="/auth"></Redirect>
      }
    else{
        return(
       <div>
          {console.log(this.props)}

        item added
       </div>
     );
  }
}
}

export default Cart;
