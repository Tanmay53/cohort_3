import React from 'react';
import './App.css';
import RestaurantDetails from "./components/Restaurant/RestaurantDetails"





class App extends React.Component{

  constructor(props){
    super(props)
    this.state ={
         details:  [
        {name:'Punjab Bistro',costfor2:'2500',cuisines:['Indian,Italian,Punjabi,Afghani'],rating:'5',reviews:'2000'},
        {name:'Toit',costfor2:'2200',cuisines:['brewery,snacks,italian,mexican'],rating:'4.8',reviews:'1800',},
        {name:'Loft',costfor2:'2000',cuisines:['chinese,mexican,italian'],rating:'4.7',reviews:'1500',},
        {name:'Sheraton',costfor2:'4000',cuisines:['continental,italian,indian'],rating:'4.6',reviews:'1200',},
        {name:'Citrus',costfor2:'1700',cuisines:['punjabi,rajasthani'],rating:'4.4',reviews:'1000',},
        {name:'Jcubez',costfor2:'1000',cuisines:['fast food'],rating:'3.9',review:'800',},
        {name:'Chin Lungs',costfor2:'900',cuisines:['snacks,fast food'],rating:'3.3',reviews:'500',},
        {name:'Green Onion',costfor2:'800',cuisines:['authentic chinese'],rating:'3.6',reviews:'400',},
        {name:'Jhonny Fox',costfor2:'500',cuisines:['chinese, indian'],rating:'2.9',reviews:'200',},
        {name:'Holige Mane',costfor2:'300',cuisines:['north karnataka'],rating:'2.5',reviews:'158',},
        {name:'Krishna Sagar',costfor2:'150',cuisines:['north indian, south indian'],rating:'2.1',reviews:'77',},
        {name:'Upahara Darshini',costfor2:'100',cuisines:['south indian'],rating:'1.6',reviews:'32',},
      ]
    }
      

    } 


  
  
render(){
  return(
    <div>
      {/* {info.map[items=> <RestaurantDetails label={items} />]} */}
      <RestaurantDetails data = {this.state.details} />
    </div>
  )
}
}

export default App;

