import React from 'react';
import Card from './card';

class CardCont extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            url : [
                'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00015430.jpg',
                'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00010731.jpg',
                'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00016474.jpg',
                'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00015426.jpg',
                'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00016655.jpg',
                'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00015729.jpg',
                'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00016298.jpg',
                'https://originserver-static1-uat.pvrcinemas.com/newweb/movies/thumb/374x226/HO00016581.jpg'
            ]
        }
    }
    render(){
        return (
            <div>
                <div className="container-fluid bg-dark">
                    <h1 className="text-white">NOW SHOWING</h1>
                    <div className="row">
                        {this.state.url.map(val => {
                                    return(
                                        <Card imgUrl={val}/>
                                    )
                                })}
                        
                        {/* <div className="col m-2">
                            <Card/> 
                        </div>
                        <div className="col m-2">
                            <Card/>
                        </div>
                        <div className="col m-2">
                            <Card/>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}

export default CardCont;