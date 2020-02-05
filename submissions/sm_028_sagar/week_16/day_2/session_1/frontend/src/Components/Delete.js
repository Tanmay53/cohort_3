import React from 'react'
import axios from 'axios'

export default class Delete extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            name : '',
            email : '',
            age : 0,
            mobile : 0,
            id : 0,
            supportText:''
        }
    }

    componentDidMount = () =>{
        const query = new URLSearchParams(this.props.location.search)
        let name = query.get('name'),
            email = query.get('email'),
            age = query.get('age'),
            mobile = query.get('mobile'),
            id = query.get('id')
            console.log('id',id)
        
        this.setState({
            name:name,
            email:email,
            age:age,
            mobile:mobile,
            id:id
        }) 
    }

    handleDelete = () =>{
        axios.delete(`http://127.0.0.1:5000/users/${this.state.id}`)
            .then(res => this.setState({
                supportText:res.data,
                isDelete:!this.state.isDelete
            }))
    }

    handleDone = () =>{
        this.props.history.push('/users/listing')
    }

    render(){
        return (
            <div className='container'>
                <h3>Delete User:</h3>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name='name' value={this.state.name}  className="form-control" id="name" disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' value={this.state.email} className="form-control"  id="email" placeholder="...@gmail.com" disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="mobile">Mobile</label>
                        <input type="number" name='mobile' value={this.state.mobile} className="form-control"  id="mobile" placeholder="enter mobile no." disabled />
                    </div>
                    <div className="form-group">
                        <label htmlFor="age">Age:</label>
                        <input type='text' className='ml-2 px-1 py-1' value={this.state.age} disabled />
                    </div>
                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#DeleteModal">
                        Delete
                    </button>

                    <div className="modal fade" id="DeleteModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Delete User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                            <div>
                                <div className="modal-body">
                                        Are You Sure, You Want to Delete User?
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={()=>this.handleDelete()} data-toggle="modal" data-target="#Response">Yes, Sure</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>

                    {/* On Clicking Yes, Sure It will open another model */}
                    <div className="modal fade" id="Response" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalCenterTitle">Delete User</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                                <div>
                                    <div className="modal-body">
                                        {this.state.supportText}
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-success" data-dismiss="modal" onClick={()=>this.handleDone()}>Done</button>
                                    </div>
                                </div> 
                        </div>
                    </div>
                    </div>
            </div>
        )
    }
}


