import React, { Component} from 'react'
import {uploadImage} from '../redux/Action'
import {connect} from 'react-redux'

class EditUser extends Component {
    handleSubmit = (e) =>{
        e.preventDefault()
        if (e.target.picture.files.length) {
            const upload_file = e.target.picture.files[0];
            let data = new FormData()
            data.append("picture",upload_file)
            const url ='http://127.0.0.1:5000/uploader'
            const token = this.props.token
            console.log(upload_file)
            this.props.uploadImage(url,token,data)
        } else {
            console.log('file not selected');
        }
    }
    render() {
        if(this.props.user){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <input  name = "picture" type="file" className="form-control" id="picture" />
                    <button type ="submit" className="btn btn-success">ADD NEW USER</button>
                </form>
            </div>
        )
        }
        else{
            return (<div>data loading</div>)
        }
    }
}
const mapStateToProps = (state) => ({
    ...state,
    user:state.user,
    token:state.token
})

const mapDispatchToProps = dispatch=>({
    uploadImage:(url,token,formData)=>dispatch(uploadImage(url,token,formData))
})


export default connect (mapStateToProps,mapDispatchToProps)(EditUser);