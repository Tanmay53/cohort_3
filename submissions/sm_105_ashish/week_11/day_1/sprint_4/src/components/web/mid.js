import React from 'react'

class Mid extends React.Component{
constructor(){
    super()
}
render(){
    return(
        <div className="row p-2">
            <div className="container bg-secondary p-3 rounded">
                <div className="row">
                    <div className="col-8">
                        <h3 className="font-weight-light text-white">Introducing an exclusive loyalty program that pays you back!</h3>
                        <button className="btn p-2 bg-light">KNOW MORE</button>
                        <button className="btn text-white ml-4">ALREADY A MEMBER?</button>
                    </div>
                    <div className="col-4">
                        <img src="https://www.pvrcinemas.com/assets/images/companies/herologo-pvr.png" />
                    </div>
                </div>
            </div>

        </div>
    )
}

}
export default Mid;


