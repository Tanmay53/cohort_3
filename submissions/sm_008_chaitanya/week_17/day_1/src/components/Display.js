import React from 'react'
import styles from './display.module.css'

class Display extends React.Component{
    constructor(props){
        super(props)
        this.state={
           data:[ {name:''},
            {summary:''},
            {listOfActors:['']},
            {url:''},
            {rating:''},
            {year:''},
            {language:''},
            {Rrated:''}
        ]
        }
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.props.parentFun(this.state)
    }

    handleChange=(e)=>{
        if(e.target.name==='name'){
            this.setState({name:e.target.value})
        }

        else if(e.target.name==='summary'){
            this.setState({summary:e.target.value})
        }

        else if(e.target.name==='list'){
            this.setState({listOfActors:e.target.value})
        }

        else if(e.target.name==='url'){
            this.setState({url:e.target.value})
        }

        else if(e.target.name==='rating'){
            this.setState({rating:e.target.value})
        }

        else if(e.target.name==='year'){
            this.setState({year:e.target.value})
        }

        else if(e.target.name==='lang'){
            this.setState({language:e.target.value})
        }

        else if(e.target.name==="rrat"){
            this.setState({Rrated:e.target.value})
        }
    }


    render(){
        return(
            <div>
                <div className={styles.header}><u className="h1 text-info">MOVIE DATABASE FORM</u>
                    <form onSubmit={this.handleSubmit} className="border border-dark col-lg-4 offset-lg-4 my-3 py-3 container">
                        <label>Name</label><br/>
                        <input name="name" type="text" onChange={this.handleChange} placeholder="Enter movie Name"/><br/>

                        <label>Summary</label><br/>
                        <input name="summary" type="text" onChange={this.handleChange} placeholder="Enter the Movie Summary"/><br/>

                        <label>List of Actors</label><br/>
                        <input name="list" type="text" onChange={this.handleChange} placeholder="Enter the List of Actors"/><br/>
                        
                        <label>URL</label><br/>
                        <input  name="url" type="text" onChange={this.handleChange} placeholder="Copy Url"/><br/>
                        
                        <label >Rating</label><br/>
                        <input  name="rating" type="text" onChange={this.handleChange} placeholder="Enter the Rating"/><br/>

                        <label>Year</label><br/>
                        <input  name="year" type="text" onChange={this.handleChange} placeholder="Enter Movie Year"/><br/>
                        <br/>

                        <label>Select Language
                            <select name="lang" onChange={this.handleChange}>
                                <option value="--"> -- Select --</option>
                                <option value="English">English</option>
                                <option value="Telugu">Telugu</option>
                                <option value="Hindi">Hindi</option>
                                <option value="Tamil">Tamil</option>
                                <option value="Kannada">Kannada</option>
                            </select>
                        </label><br/>

                        <label className="px-4">R rated </label>
                        <select name="rrat" onChange={this.handleChange}>
                            <option value="--"> -- Select -- </option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select><br/>
                        <input type="submit" value="SUBMIT" className={styles.deco} />
                    </form>
                </div>
            </div>
        
        )
    }
}
export default Display