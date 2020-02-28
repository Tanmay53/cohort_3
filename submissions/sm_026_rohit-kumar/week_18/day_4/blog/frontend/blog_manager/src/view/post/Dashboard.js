import React from 'react'
import axios from 'axios'
import BlogPost from '../component/BlogPost'

class Dashboard extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            blogs: []
        }
    }

    componentWillMount = () => {
        axios.get('http://localhost:5000/post/blogs')
        .then(res => {
            console.log(res)
            if(res.status == 200) {
                this.setState({
                    blogs: res['data']['data']
                })
                
            }
        })
        .catch(err => {

        })
    }

    render() {
        return (
            <div className='row card-deck'>
                {this.state.blogs.map((item)=> {
                    return <BlogPost blog={item} />
                })}
            </div>
        )
    }
} 

export default Dashboard