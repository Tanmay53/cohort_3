import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {createStore} from 'redux'
import {incrementCounter,decrementCounter,update,multiplyCounter} from './action'
import counter from './reducer'


const store  = createStore(counter)

export default class Index extends Component {
    constructor(props){
        super(props)
        // this.state = {
        //     value:null
        // }
    }

    render(){
        return (
            <div style={{display:'flex'}}>
                <div style={{margin:'40px'}}>
                     Count : {store.getState().count}
                </div>
                <div>
                    <input type='number' placeholder='Enter x' onChange={(e)=>store.dispatch(update(Number(e.target.value.trim())))} style={{padding:'10px 20px'}}/>
                    <br/>
                    <button onClick={()=> store.dispatch(incrementCounter())}>
                        Increment By x                
                    </button>
                    <br />
                    <button onClick={()=>store.dispatch(decrementCounter())}>
                        Decrement By x
                    </button>
                    <br />
                    <button onClick={()=>store.dispatch(multiplyCounter())}>
                        Multiply By x
                    </button>
                    <br />
                    <button onClick={()=>store.dispatch({type:'Divide'})}>
                        Divide By x
                    </button>
                    <br />
                    <button onClick={()=>store.dispatch({type:'Mod'})}>
                        check modulus by x
                    </button>
                </div>            
            </div>
        )
    }
    
}


const render = () => ReactDOM.render(<Index />, document.getElementById('root'));
render()
store.subscribe(render)



