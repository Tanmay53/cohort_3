import React from 'react'
import ReactDOM from 'react-dom'
import CustomCheck from './customCheck'
import CustomCheckStrike from './customCheckStrike'


class Todo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items : [],
            removedItems : [],
            textValue : ''
        }
    }
    
    appendItems = (item) => {
        // add the item to removed list
        let temp = this.state.removedItems
        temp.push(item)

        this.setState({
            removedItems : temp
        })
    }

    deletePermanet = (item) => {
        // remove the items from the removed list
        let allItems = this.state.items
        let allRemovedItems = this.state.removedItems

        allItems = allItems.filter((elem) => elem != item)
        allRemovedItems = allRemovedItems.filter((elem) => elem != item)

        this.setState({
            items : allItems,
            removedItems : allRemovedItems
        })    
    }

    removeItems = (item) => {
        // remove the items from the removed list
        let temp = this.state.removedItems
        // console.log('removedd :' , temp)
        temp = temp.filter((elem) => elem != item)

        this.setState({
            removedItems : temp
        })    
    }

    getSetDifference(arr1, arr2) {
        let arr = []
        let dict = {}
        for(let i = 0; i < arr2.length; i++)
            dict[arr2[i]] = true
    
        for(let i = 0; i < arr1.length; i++)
            if (dict[arr1[i]] != true)
                arr.push(arr1[i])

        return arr
    }

    handleChange = (event) => {
        this.setState({
            textValue : event.target.value
        })
    }

    addItem = () => {
        let temp_items_arr = this.state.items
        temp_items_arr.push(this.state.textValue)

        // now update
        this.setState({
            items : temp_items_arr,
            textValue : ''  
        })
    }

    render() {

        return (
            <div className='card'>
                <div className='card-body p-3 m-3'>
                    <div className='d-flex'>
                        <input onChange = {this.handleChange} value = {this.state.textValue} type='text' className='form-control mr-3' placeholder='ADD SOMETHING..' />
                        <button onClick={this.addItem} className='btn btn-outline-primary'>+</button>
                    </div>
                    <hr/>
                    <div className='text-muted small'>Tasks to do ...</div>
                    <div className='border my-2 px-4 py-2'>
                        {this.getSetDifference(this.state.items, this.state.removedItems).map((item) => {
                            return <CustomCheck key = {item} taskName = {item}
                                                actionRemoveItem = {this.removeItems}
                                                actionAppendItem = {this.appendItems}    
                                                />
                        })}
                    </div>
                    <hr/>
                    <div className='text-muted small'>Tasks completed ...</div>
                    <div className='border my-2 px-4 py-2'>
                    {this.state.removedItems.map((item) => {
                            return <CustomCheckStrike key = {item} taskName = {item}
                                                actionRemoveItem = {this.removeItems}
                                                actionAppendItem = {this.appendItems}  
                                                actionDeletePermanent = {this.deletePermanet}  
                                                />
                    })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo