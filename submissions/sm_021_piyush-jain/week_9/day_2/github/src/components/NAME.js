import React from 'react'
import axios from 'axios'
import $ from 'jquery'
import PageInfo from './PageInfo'
class Name extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            api: [],
            pageInfo:[],
            boolean:false
        }
    }
    componentDidMount() {
        axios
            .get("https://api.github.com/search/users?q=" + this.props.user)
            .then(res => {
                this.setState({ api: res.data.items })
            })
    }
     moreDetails=async(index)=>{
         var repos=this.state.api.filter((item,i) => i==index)
         axios
         .get("https://api.github.com/users/"+repos[0]["login"]+"/repos")
         .then(res=>{
             var result=res.data
             console.log(result)
             this.setState({pageInfo:result,boolean:true})
         })
             $("#hiding").hide();
    }
    render() {
        console.log(this.state.api)
        return (
            <div>
                <table id="hiding"class="table"><thead class="text-white bg-dark"><td>URL</td><td>SCORE</td><td>OWNER</td><td>PROFILE</td><td>MORE DETAILS</td></thead>
                <tbody>
                    {this.state.api.map((item,index) => (
                        <tr key={item.url} class="spacing">
                            <td>{item.url}</td>
                            <td>{item.score}</td>
                            <td>{item.login}</td>
                            <td><img class="imgSize" src={item.avatar_url} onClick={()=>this.moreDetails(index)}alt=""/></td>
                            <td><button >MORE DETAILS</button></td>
                        </tr>
                    ))}
                </tbody>
                </table>
                {this.state.boolean &&<PageInfo info={this.state.pageInfo}/>}
            </div>
        )
    }
}
export default Name