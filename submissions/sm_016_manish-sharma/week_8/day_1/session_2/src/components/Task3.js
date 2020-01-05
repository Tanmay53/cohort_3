import React from 'react'




class Task3 extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div>
            <div style={{background:'#2C1840'}}>
            <div className='card col-4 mx-auto text-white' style={{background:'#27153A'}}>
              <div className='row my-4'>
                <div className='col-2'>
                  <h4><span className='badge badge-warning'>PRO</span></h4>
                </div>
                <div className='col-7 mx-auto'>
                  <img className='rounded-circle border border-primary p-2' style={{width:'120px',height:'120px', objectFit:'cover'}} src='/Img12.jpg' alt='img' />
                </div>
                
              </div>
      
              <div className='text-center'>
                <h4>{this.props.obj.name}</h4>
                <p>{this.props.obj.location}</p>
                <p className='col-9 mx-auto'>{this.props.obj.description}</p>
              </div>
      
              <div className='row mx-auto'> 
                <div className='btn btn-info mr-1'>Message</div>
                <div className='btn btn-outline-info'>Following</div>
              </div>
              <div className='card-body' style={{background:'#230F37'}}>
                <div className='my-2'>Skills
                  <div className='row'>
                    <div className='btn btn-outline-light btn-sm m-1'>{this.props.obj.skills[0]}</div>
                    <div className='btn btn-outline-light btn-sm m-1'>{this.props.obj.skills[1]}</div>
                    <div className='btn btn-outline-light btn-sm my-1'>{this.props.obj.skills[2]}</div>
                  </div>
                  <div className='row'>
                    <div className='btn btn-outline-light btn-sm m-1'>{this.props.obj.skills[3]}</div>
                    <div className='btn btn-outline-light btn-sm m-1'>{this.props.obj.skills[4]}</div>
                    <div className='btn btn-outline-light btn-sm m-1'>{this.props.obj.skills[5]}</div>
                    <div className='btn btn-outline-light btn-sm m-1'>{this.props.obj.skills[6]}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </div>
        )
    }
}

export default Task3