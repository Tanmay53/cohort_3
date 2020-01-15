import React from "react";
import ReactDOM from "react-dom";


class Fsd4 extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            mobile:["Android","Blackberry","iPhone","Windows Phone"],
            manuf:["Samsung","HTC","Micromax","Apple"], 
        }
    }
    render(){
        return(
            <div>
                <h1>Mobile Operating System</h1>
                {this.state.mobile.map((ele)=><li>{ele}</li>)}
                <h1>Mobile Manufacturers</h1>
                {this.state.manuf.map((ele)=><li>{ele}</li>)}
            </div>
        )
    }
}

// const Fsd4 = () => {
//     const data = {
//         mobile:["Android","Blackberry","iPhone","Windows Phone"],
//         manuf:["Samsung","HTC","Micromax","Apple"], 
//     }
//     return(  
//         <div>
//             <h1>Mobile Operating System</h1>
//             {data.mobile.map((ele)=><li>{ele}</li>)}
//             <h1>Mobile Manufacturers</h1>
//             {data.manuf.map((ele)=><li>{ele}</li>)}
//         </div>
//     );
// }
export default Fsd4