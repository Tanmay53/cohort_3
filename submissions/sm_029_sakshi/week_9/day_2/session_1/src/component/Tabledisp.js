import React, { Component } from 'react';
import Moreinformstion from './Moreinformstion';

class Tabledisp extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }
    render() {
        return (
            <div>
                <table class="table table-dark">
  <thead>
    <tr>
    
                        <th scope="col">User Avatar</th>
                        <th scope="col">Username</th>
                        <th scope="col">User ID</th>
                        <th scope="col">User Type</th>
                        <th scope="col">User Profile</th>
                        <th scope="col">More info</th>
                    
                    
    </tr>
  </thead>
  <tbody>
      {this.props.userrrdata.map((e)=>{
            return (
                <tr key={e.id}>
                <td>
                    <img style={{width:'70px'}} src={e.avatar_url} className='bg bg-warning border border-dark' alt="img"/>
                </td>
                <td>{e.login}</td>
                <td>{e.id}</td>)
                <td>{e.type}</td>
                <td><a href={e.html_url}>{e.html_url}</a></td>
                <td>
                <button   onClick={() => this.props.handleMoreInfoClick(e)}>More info</button>                    
                </td>
            </tr> 
)
      }
      )
      }
      
  
  </tbody>
</table>


            </div>


        );
    }
}

export default Tabledisp;