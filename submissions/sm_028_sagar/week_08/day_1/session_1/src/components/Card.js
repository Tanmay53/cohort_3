import React from 'react' 
import styles from './card.css'

class Card extends React.Component{
    render(){
        return <div className='card'>
                    <div className='profile'>
                        <div className='profilePic'>
                            <p className='pro'>PRO</p>
                            <img src='https://www.publicdomainpictures.net/download-picture.php?id=28763&check=40d0c7d2a335794339b3a2023655e58f'></img>
                        </div>
                        <div><h3 className='heading'>Ricky Park</h3></div>
                        <div><small>NEW YORK</small></div>
                        <div>User interface designer and </div>
                        <div> front-end developer</div>
                        <div>
                            <button>Message</button>
                            <button>Following</button>
                        </div>
                    </div>
                    <div className='skill'>
                        <div>SKILLS</div>
                        <div className='skillList'>
                            <div>UI/UX</div> 
                            <div>Front End Development</div>
                            <div>HTML</div>
                            <div>CSS</div>
                            <div>JavaScript</div>
                            <div>React</div>
                            <div>Node</div>
                        </div>
                    </div>
               </div>
    }
}

export default Card