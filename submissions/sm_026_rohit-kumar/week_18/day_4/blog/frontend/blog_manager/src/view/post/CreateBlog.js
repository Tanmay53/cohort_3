import React from 'react'
import axios from 'axios'


class CreateBlog extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            heading: '',
            body: '',
            category_id: '',
            categories: [],
            related_posts: []
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    

    handleClick = () => {

        const url = "http://localhost:5000/post/create"
        const data = {
                    "category_id": this.state.category_id,
                    "heading": this.state.heading,
                    "body": this.state.body,
                    "token": localStorage.getItem('token')
                }
        axios.post(url, data)
        .then(res => {
            
            if (res['data']['result'] == 'success') {
                this.props.history.push('/blog/dashboard')
            }
            else if (res['data']['result'] == 'failure' && res['data']['result'] == 'invalid') {
                this.props.history.push('/user/login')
            }
            
            // console.log(res)
        })
        .catch(err => {
            alert(err)
        })
    }

    componentWillMount = () => {
        // from backend get all available categories
        axios.get('http://localhost:5000/post/category')
        .then(res => {
            if(res.status == 200) {
                this.setState({
                    categories: res['data']['data']
                })
            }
        })
        .catch(err => {

        })

        axios.post('http://localhost:5000/post/blogs', {"n":"10"})
        .then(res => {
            this.setState({
                related_posts: res['data']['data']
            })
        }) 
        .catch(err => {
            console.log(err)
        })
    }

    render() {
        return (
            <div>
                <div className='row'>
                    <div className='col-md-8 col-xs-12'>
                        <div className="row">
                        <div className='col-12 form-group'>
                                <label><b>Blog Category</b></label>
                                <select onChange={this.handleChange} className='form-control' name='category_id'>
                                    <option value='--'>Select</option>
                                    {this.state.categories.map((item) => {
                                        return <option key={item['category']} value={item['category_id']}>{item['category']}</option>
                                    })}
                                </select>
                            </div>
                            <div className='col-12 form-group'>
                                <label><b>Blog Heading</b></label>
                                <input name="heading" onChange={this.handleChange} value={this.state.heading} className='form-control' placeholder='Keep a nice and catchy heading' type='text'></input>
                            </div>
                            <div className='col-12 form-group'>
                                <label><b>Blog Content</b></label>
                                <textarea name="body" onChange={this.handleChange} value={this.state.body} placeholder='Write what your heart says !!' className='form-control' rows="10"></textarea>
                            </div>
                            <div className='col-md-8 col-xs-12'>
                                <span>Go live by pressing post button !</span>
                            </div>
                            <div className='col-md-4 col-xs-12'>
                                <button onClick={this.handleClick} className='btn btn-sm btn-primary form-control'>Post</button>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 col-xs-12'>
                        <div className='card m-4 border'>
                            <div className='card-header'>
                                <h5>Previous posts</h5>
                            </div>
                            <div className='card-body'>
                                <ul class="list-group">
                                    {this.state.related_posts.map((item)=> {
                                        return <li className="list-group-item"><a href='#'>{item.heading}</a></li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }

}

export default CreateBlog