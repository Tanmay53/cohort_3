import React from 'react';
import Child from "./smallComp";

const listSquare = {
    "list-style-type": "square"
}
const listCircle = {
    "list-style-type": "circle"
}

const OperatingSys={
    name:["Android","Blackberry","Iphone","Windows Phone"]
}

const Manufacturers={
    name:["Samsung","HTC","Micromax","Apple"]
}

class Task1 extends React.Component{
    render(){
        return(
            <div>
                 <h1>Mobile Operating System</h1>
                 <ul>   
                        <Child toshow={OperatingSys.name[0]} />
                        <Child toshow={OperatingSys.name[1]} />
                        <Child toshow={OperatingSys.name[2]} />
                        <Child toshow={OperatingSys.name[3]} />

                        
                 </ul>
                 <h1>Mobile Manufacturers</h1>
                 <ul>
                        <Child style={listSquare} toshow={Manufacturers.name[0]}/>
                        <Child style={listSquare} toshow={Manufacturers.name[1]}/>
                        <Child toshow={Manufacturers.name[2]}/>
                        <Child style={listCircle} toshow={Manufacturers.name[3]}/>
                 </ul>
             </div>
        )
    }
}



export default Task1;