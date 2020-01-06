import React from 'react'
import Show from './Showcompleted'


class Todo extends React.Component
{
    constructor(props)
    {
        super(props)

        this.state = {
            newItem : "",
            toDoList : [],
        }
    }
    addItem(todoValue)
    {
        if(todoValue != "")
        {
            const newItem ={
                id : Date.now(),
                value: todoValue,
                isDone: false,
            }
            let list =[...this.state.toDoList]
            list.push(newItem)

            this.setState({
                toDoList:list,
                newItem: ""
            })
        }
    }


    deleteItem =(id)=>{
       let list =[...this.state.toDoList]
        let updatedList = list.filter(item => item.id != id)
        console.log(updatedList)
        this.setState({toDoList: updatedList})
    }

    updateInput(input){
        this.setState({newItem:input})
    }

    strike(id)
    {
        console.log(this.state.toDoList)
        let list  = [...this.state.toDoList]
        list.forEach(ele => {
            if(ele.id == id)
            {
                ele.isDone = true
            }
        })
        this.setState({
            toDoList : list,
        })
    }

    render()
    {
        return(
            <div>
                <h1 className="text-center">ToDo App</h1>
                <div className="row">
                    <div className ="col my-2">
                        <div className="bgLogin" style={{backgroundColor:"#849576"}}>
                        <h5 className="mx-4 my-2 text-center">Add an Item</h5>
                        <br/>
                        <div className="row">
                            <input
                                type = "text"
                                className="form-control mx-4 "
                                placeholder="write a ToDo"
                                style={{width: "250px"}}
                                value={this.state.newItem}
                                onChange={e => this.updateInput(e.target.value)}
                            />
                            <button  
                                className = "btn btn-primary mx-2" 
                                style={{width: "100px"}}
                                onClick={() => this.addItem(this.state.newItem)}
                                >Add ToDo
                                </button>
                        </div>
                
                        <div className = "my-2">
                            <ul>
                                {this.state.toDoList.map(item => {
                                    if(item.isDone == false)
                                    return(
                                        <li key={item.id} className = {this.state.bg}>
                                            <input 
                                                type="checkbox"
                                                name="isDone"
                                                onClick={() => this.strike(item.id)}
                                            />
                                            {item.value}

                                        </li>
                                    ) 
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
                    <div className ="col my-2">
                        <Show label={this.state.toDoList} upd = {this.deleteItem}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo