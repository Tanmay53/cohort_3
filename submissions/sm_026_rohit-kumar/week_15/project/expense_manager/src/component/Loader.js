import React from 'react'
import IncomeSources from './IncomeSources'
import AddExpenses from './AddExpenses'

class Loader extends React.Component {
    render() {
        return (
            <div className='container-fluid mt-3'>
                <div className='row'>
                    <div className='col-12'>
                        <h2 className='bg-dark text-white p-3'>Expense Manager</h2>
                    </div>
                </div>
                <div className='row mt-3'>
                    <div className='col-8 offset-2'>
                        <IncomeSources />   
                    </div>
                </div>
                <div className='row'>
                    <div className='col-8 offset-2'>
                        <AddExpenses />     
                    </div>
                </div>
            </div>
        )
    }
}

export default Loader