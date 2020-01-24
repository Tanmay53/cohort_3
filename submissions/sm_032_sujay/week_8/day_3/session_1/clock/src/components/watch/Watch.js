import React from "react"

export default class Watch extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            hour:0,
            min:0,
            sec: 0,
            mil:0
        }
    }

   
    componentDidMount(){
        var watchman = setInterval(this.add,1000)
        var watchdog = setInterval(this.adder,10)
    }

     add = () => this.setState({sec:this.state.sec+1})
     adder = () => this.setState({mil:this.state.mil+1})
     
    sixty = () => {this.setState({min:this.state.min+1,sec:0}) }
    
      
   


    render() {
        return (
            <div className="container col-4 mt-5">
                    <div className="card text-center shadow">
                        <div className="card-header bg-dark text-white">
                            <div className="row">
                            <img style={{width:"70px",margin:"0 0 0 110px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSynCiSJTGE5tIWYw_On27NHyZszn6o1veo9cTqZF-sh6ZlpT09ZA&s"/>

                            <h4 className="mt-4 mx-3">StopWatch</h4>
                            </div>
                            
                        </div>

                        <div className="card-body">
                            <div className="row">
                            <h4 class=" display-3 card-title ml-5">{this.state.min}</h4><span>m</span>
                            <h4 class=" display-3 card-title ml-5"> {this.state.sec} </h4><span>s</span>
                            <h5 class="display-5 ml-5"> {this.state.mil} </h5>
                            </div>
                               
                        </div>
                        <div className="card-footer text-muted border-white">
<button type="button" class="btn btn-lg btn-info mx-2" onClick={()=>this.startTimer()}>Start</button>
<button type="button" class="btn btn-lg btn-outline-info mx-2"onClick={()=>this.resetTimer()}>Reset</button>

                        </div>
                    </div>

                    
    {this.state.mil===100?(this.state.mil=0):(this.state.mil) } 
    {this.state.sec===60?(this.sixty):(this.state.sec)}
            </div>
           
        )
    }

}

