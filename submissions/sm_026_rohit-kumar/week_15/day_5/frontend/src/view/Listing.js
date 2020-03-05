import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Table from '../components/Table'


class Listing extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            users: [],
            per_page: 5,
            page_num: 1,
            noOfButtons: []
        }
    }

    handleChange = (event) => {
        // internally updates the per_page
        this.props.history.push(`/user/listing?per_page=${event.target.value}&page_num=1`)
        this.probe(event.target.value)
    }

    componentWillMount = () => {
        // will run only once in project lifetime
        console.log('component did mount')
                
        const query = new URLSearchParams(this.props.location.search)
        const page_num = query.get('page_num')
        const per_page = query.get('per_page')

        // console.log('page_num : ', page_num, ' per_page : ', per_page)
        // this.loadPageData(per_page, page_num)
        this.probe(per_page, page_num)
    }
    
    probe = (per_page, page_num) => {
        axios.post('http://localhost:5000/user/chunk/', {
            per_page: per_page,
            page_num: page_num
        })
        .then(res => {
            // console.log(res.data)
           console.log('calling...')
           const temp = []
            for(let i = 1; i <= Number(res.data.total_pages); i++) {
                temp.push(i)
            }

            this.setState({
                users: res.data.records,
                per_page: per_page,
                page_num: page_num,
                noOfButtons: temp
            })
        })
    }

   
    componentWillReceiveProps = (nextProps) => {
        const query = new URLSearchParams(nextProps.location.search)
        const page_num = query.get('page_num')
        const per_page = query.get('per_page')

        this.probe(per_page, page_num)
    }

    render() {
        return (
            <div className='container'>
                <div className='row mt-3'>
                    <div className='col-2'>
                        <select value={this.state.per_page} onChange={this.handleChange} className='form-control'>
                            <option value='5'>5</option>
                            <option value='10'>10</option>
                            <option value='15'>15</option>
                            <option value='20'>20</option>
                        </select>
                    </div>
                    <div className='col-8 offset-2'>
                        {this.state.noOfButtons && this.state.noOfButtons.map((item) => {
                            return <Link to={`/user/listing?per_page=${this.state.per_page}&page_num=${item}`} className='btn btn-primary btn-sm mr-1'>{item}</Link>
                        })}
                    </div>
                    <div className='col-12 mt-3'>
                       <Table users={this.state.users} />
                    </div>
                    <div className='col-12'>
                        <button onClick={() => this.props.history.push('/user/create')} className='btn btn-primary'>Add New</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Listing