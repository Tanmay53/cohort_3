import React from 'react'
import axios from 'axios'

class Folder extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            data : []
        }
    }

    componentWillMount = () =>{
        axios.post('http://127.0.0.1:5000/showbelow',{
            "ancestor": 1
        })
        .then (res =>{
            console.log(res.data)
            this.setState({
                data : res.data
            })
        }).catch(error => console.log(error))
    }

    show = (id) =>{
        alert(id)
        axios.post('http://127.0.0.1:5000/showbelow',{
            "ancestor": id
        })
        .then (res =>{
            console.log(res.data)
            this.setState({
                data : res.data
            })
        }).catch(error => console.log(error))
    }

    render() {
        return (
            <div className="container-fluid ">
                <i class="fas fa-chevron-left fa-2x mt-4"></i>
                <div className=" m-5 p-5 row justify-content-center bg-secondary">
                    {this.state.data.map(ele =>
                        <div className="mx-4">
                            <i className="far fa-3x fa-folder" onClick={()=> this.show(ele.id)} >{ele.folder_name}</i>
                        </div>
                    )}
                    <br></br>
                </div>
            </div>
        )
    }
}


export default Folder
