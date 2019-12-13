import React from 'react'
import './card.css'

class Card extends React.Component{
    constructor(props){
        super(props)
        // this.name = props.data.name,
        // console.log(this.name)
        // this.location = props.data.location,
        // this.description = props.data.description,
        // this.skills = props.data.skills
    }

    render(){
        return(
               <div className='card'>
                    <div className='profile'>
                        <div className='profilePic'>
                            <p className='pro'>PRO</p>
                            <img src='https://www.publicdomainpictures.net/download-picture.php?id=28763&check=40d0c7d2a335794339b3a2023655e58f'></img>
                        </div>
                        <div><h3 className='heading'>{this.props.data.name}</h3></div>
                        <div><small>{this.props.data.location}</small></div>
                        <div>{this.props.data.description}</div>
                        <div>
                            <button>Message</button>
                            <button>Following</button>  
                        </div>
                    </div>
                    <div className='skill'>
                        <div>SKILLS</div>
                        <div className='skillList'>
                            {this.props.data.skills.map(ele=><div>{ele}</div>)}
                        </div>
                    </div>
                </div>
        )
    }
}


export default Card