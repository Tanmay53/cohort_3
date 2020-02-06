import React from 'react';
const  Button = (props) => {
    // console.log(props)
        return (
            <div>
                <html>
                    <head>
                    </head>
                    <body>
                    <div className="row">
                        <div className="col">
                            <button className="badge badge-pill" id="blue" style={{backgroundColor:props.butt2[0]}}>{props.butt1[0]}</button>
                            <button className="badge badge-pill" id="lightblue" style ={{backgroundColor:props.butt2[1]}}>{props.butt1[1]}</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="badge badge-pill" id="orange" style={{backgroundColor:props.butt2[2]}}>{props.butt1[2]}</button>
                            <button className="badge badge-pill "id="brown" style={{backgroundColor:props.butt2[3]}}>{props.butt1[3]}</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="badge badge-pill "id ="green" style={{backgroundColor:props.butt2[4]}}>{props.butt1[4]}</button>
                            <button className="badge badge-pill "id ="purple" style={{backgroundColor:props.butt2[5]}}>{props.butt1[5]}</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <button className="badge badge-pill "id ="pink" style={{backgroundColor:props.butt2[6]}}>{props.butt1[6]}</button>
                            <button className="badge badge-pill "id="gold" style={{backgroundColor:props.butt2[7]}}>{props.butt1[7]}</button>
                        </div>
                    </div>
                </body>
                </html>
            </div>
        );
}
export default Button