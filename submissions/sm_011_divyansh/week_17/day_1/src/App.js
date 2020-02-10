import React from 'react'
import "./components/App.css"
// import Card from './components/card'
import Form from './components/form'
class App extends React.Component {
    // constructor(props){
    //     super(props)
    //     this.state={
    //         details:this.props.data
    //     }
    // }

    render() {
        return (
            <div className="container-fluid">
                <div className="container">
                    <marquee><h1>CREATE MOVIE DATABASE</h1></marquee>
                    <Form />
                    {/* <Card details={details}/> */}

                </div>




            </div >
        )
    }
}
export default App





