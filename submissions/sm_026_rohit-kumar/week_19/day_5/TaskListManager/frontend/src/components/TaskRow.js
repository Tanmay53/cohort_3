import React from 'react'

class TaskRow extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {

        }
    }

    render() {
        return (
            <tr>
                <td>1. </td>
                <td>First ever task </td>
                <td className='text-right'>
                    <button className='btn btn-sm btn-primary'>
                        <i class="fa fa-minus" style={{"font-size":"15px"}} aria-hidden="true"></i>
                    </button>
                </td>
            </tr>
        )
    }
}

export default TaskRow