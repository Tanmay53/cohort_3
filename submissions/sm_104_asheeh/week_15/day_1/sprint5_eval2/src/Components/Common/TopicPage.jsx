import React, { Component } from 'react'
import { connect } from 'react-redux'


class TopicPage extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            objArr: []
             
        }
    }

    componentDidMount(){
      const  id = this.props.match.params.id
      const arr = this.props.topicList.filter(ele => (ele.id) == Number(id))
      this.setState({
          objArr: [...arr]
      })
      console.log(arr)
    }
    
    render() {
        console.log(this.state.objArr)
       return( this.state.objArr.length != 0 ?
             (
                <div className="border border-dark m-auto">
                   <div>Title: {this.state.objArr[0].title} </div>
                   <div>Body: {this.state.objArr[0].body} </div>
                   <div>Category: {this.state.objArr[0].category} </div>
                   <div>User Details: {this.state.objArr[0].userDetails} </div>
                   </div>
        )
         :
            
            <h1>Data is yet to come</h1>
)
        
}
}



const mapStateToProps = (state) => ({
    topicList: state.topicList,
    state: state
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps)(TopicPage)

