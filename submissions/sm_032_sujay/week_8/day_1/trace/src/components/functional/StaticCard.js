import React from'react'


export default class StaticCard extends React.Component{
    render(){
        return(
            <div className="bg-dark">
                <div className="offset-4">
                <div className="card showdow bg-dark text-secondary mx-5 " style={{width: "22rem"}}>
            <span className="badge bg-success mt-2 ml-3 text-dark" style={{width:"40px"}}>PRO</span>
  <img src="/sujay.jpg" className="card-img-top rounded-circle ml-5" style={{width:"250px"}} alt="Sujay"/>
  <div className="card-body">
    <h4 className="card-title font-weight-bold text-center">Sujay Nagaraj</h4>
    <p className="card-text font-weight-bold text-center">Bangalore</p>
    <p className="text-center"> Aspiring Full stack Developer, Masai School</p>
  </div>
  <div className="row">
  <button className="btn btn-lg btn-primary ml-5">Message</button>
            <button className="btn btn-lg btn-outline-primary ml-5">Following</button>
  </div>
            
  

  <div className="card-body shadow">
    <p>skills</p>
    <div className="row">
        <div className="border border-secondary mx-1">UI/UX</div>
        <div className="border border-secondary mx-1">Front End Development</div>
        <div className="border border-secondary mx-1">HTML5</div>

    </div>
    <div className="row">
        <div className="border border-secondary m-1">CSS3</div>
        <div className="border border-secondary m-1">Javascript</div>
        <div className="border border-secondary m-1">jQuery</div>
        <div className="border border-secondary m-1">React</div>
        
    </div>
  </div>
            </div>
                </div>
           
            </div>
        
        )
    }
}