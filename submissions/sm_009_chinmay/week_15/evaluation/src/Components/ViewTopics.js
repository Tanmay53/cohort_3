import React from 'react'
import {connect} from 'react-redux'
import TabularData from '../Components/TabularData'
import {sortAscTitle, sortDescTitle, sortAscDate, sortDescDate, filterCategoryRandom, filterCategoryGeneral, filterCategoryProgramming, filterCategoryAlgorithms, filterCategorySuggestions} from '../Redux/actions'
import {Link} from 'react-router-dom'

class ViewTopics extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange =(event) => {
        if(event.target.value=='AscTitle') {
            console.log(sortAscTitle)
            this.props.sortAscTitle()
        }
        else if(event.target.value=='DescTitle') {
            console.log(sortDescTitle)
            this.props.sortDescTitle()
        }
        else if(event.target.value=='AscDate') {
            console.log('AscDate')
            this.props.sortAscDate()
        }
        else if(event.target.value=='DescDate') {
            console.log('DescDate')
            this.props.sortDescDate()
        }
        else if(event.target.value=='Random') {
            console.log('in filter by Random')
            this.props.filterCategoryRandom(this.props.item)
        }
        else if(event.target.value=='General') {
            console.log('in filter by General')
            this.props.filterCategoryGeneral(this.props.item)
        }
        else if(event.target.value=='Programming') {
            console.log('in filter by Programming')
            this.props.filterCategoryProgramming(this.props.item)
        }
        else if(event.target.value=='Algorithms') {
            console.log('in filter by Algorithms')
            this.props.filterCategoryAlgorithms(this.props.item)
        }
        else if(event.target.value=='Suggestions') {
            console.log('in filter by Suggestions')
            this.props.filterCategorySuggestions(this.props.item)
        }
    }

    render() {
        return (
            <div className='container'>
                <div className='mt-5'>
                    <h3>..Displaying All Topics..</h3>
                    <div>
                        <table className='table table-responsive text-wrap' >
                            <thead>
                                <tr>
                                    <th>Title
                                        <select name='title'
                                            onChange={this.handleChange}>
                                            <option value='--'>---</option>
                                            <option value="AscTitle">Sort Asc</option>
                                            <option value="DescTitle">Sort Desc</option>
                                        </select>
                                    </th>
                                    <th>Date Created
                                        <select name='date_created'
                                            onChange={this.handleChange}>
                                            <option value='--'>---</option>
                                            <option value="AscDate">Sort Asc</option>
                                            <option value="DescDate">Sort Desc</option>
                                        </select>
                                    </th>
                                    <th className='text-wrap overflow-auto' style={{width: '150px'}}>Body</th>
                                    <th>Category</th>
                                    <th>User Name</th>
                                    <th>Mobile Number</th>
                                    <th>Comments</th>
                                </tr>
                            </thead>
                            <tbody>
                                {console.log(this.props.topics.topics)}
                                {this.props.topics.topics.map((item, id) => {
                                    console.log(item)
                                    return <TabularData item={item} id={id}/>
                                })}
                            </tbody>
                        </table>

                        <Link className='h3' to='/'>Go to Dashboard</Link>

                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        topics: state.topics
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        sortAscTitle: ()=> dispatch(sortAscTitle()),
        sortDescTitle: () => dispatch(sortDescTitle()),
        sortAscDate: ()=> dispatch(sortAscDate()),
        sortDescDate: () => dispatch(sortDescDate()),

    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ViewTopics)