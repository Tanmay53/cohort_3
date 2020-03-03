import React from 'react'

class Userdetails extends React.Component{
    render(){
      //   console.log(this.props.userinfo)
        return(
            <div className="container my-5">
                <table className="table table-dark table-responsive col-10 offset-1 col-lg-8 offset-2">
                    <tbody>
                        {Object.keys(this.props.userinfo).map(key=> <tr key={key}><td>{key}</td><td>:</td><td>{this.props.userinfo[key]}</td></tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default Userdetails