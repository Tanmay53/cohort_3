import React from 'react'


class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      itemName:'',
      list:[],
      status : 'none'
    }
  }


 deleteItem = (e) =>{
      let list = [...this.state.list]
      const updatedList  = list.filter(inp=> inp.id!==e);

      this.setState({
        list:updatedList
      })
 }

 
 addItem = () => {
   //creating new item
   const item = {
     id:Math.random()+10,
     value:this.state.itemName
   }

   //put it in list and update the list
   let list = [...this.state.list]
   list.push(item)

   //update the state
   this.setState({
     itemName:'',   
     list:list
   })
 }

 strikeThrough = (id) =>{
   let status = {
     id:id,
     value:'line-through'
   }
     this.setState({
       status:status  
     })
 }
 

  render(){ 
        return(
          <div className='container' style={{margin:'30px auto'}}> 
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="addon-wrapping">+</span>
             </div>
              <input type="text" className="form-control" value={this.state.itemName} onChange={e => this.setState({itemName:e.target.value})} placeholder="Add a To-do item" aria-label="Recipient's username" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-primary" type="button" id="button-addon2" onClick={()=>this.addItem()}>Add</button>
              </div>
            </div>
      
              {this.state.list.map(ele =>   
                                            <div key={ele.id} className="form-check">
                                                  <input className="form-check-input" onClick={()=>this.strikeThrough(ele.id)} type="checkbox" value="" key={ele.id} />
                                                  <label style={(this.state.status.id === ele.id)?({textDecoration:this.state.status.value}):{textDecoration:'none'}} className="form-check-label" htmlFor="defaultCheck1">
                                                    {ele.value}
                                                  </label>
                                                <button className='btn btn-sm btn-danger' onClick={()=>this.deleteItem(ele.id)}>delete</button>
                                            </div>             
                                           )
                                       }
            
          </div>
        )
      }
}

export default App