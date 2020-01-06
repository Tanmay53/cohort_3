import React from "react";
import ReactDom from "react-dom";

const Fsd5 = () =>{
    const btnData = [
        {
            text :"JOIN US",
            background: "rgb(63, 63, 170)",
        },
          
        {
            text :"SETTING",
            background: "rgb(57, 180, 174)",
        },
        {
            text :"LOGIN",
            background: "rgb(240, 168, 34)",
            
        },
        {
            text :"CONTACT US",
            background: "rgb(230, 23, 23)",
            
        },
        {
            text :"SEARCH",
            background: "rgb(14, 224, 77)",
            
        },
        {
            text :"HELP",
            background: "rgb(149, 17, 201)",
            
        },
        {
            text :"HOME",
            background: "rgb(211, 21, 179)",
           
        },
        {
            text :"DOWNLOAD",
            background: "rgb(75, 87, 9)",
            
        },]
    return(
        <div>
            <div className="grid">
                {btnData.map((ele) =><button style={{background:ele.background}}>{ele.text}</button>)}
            </div>
        </div>
    )
}

export default Fsd5;