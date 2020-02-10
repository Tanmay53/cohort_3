import React from 'react'
import styles from './userinter.module.css'
function Userinter(props){
    return(
        <div className={styles.header}>
            <div className="container my-5">
                <div className="card border rounded">
                        <div className="row">
                            <div className="col-10">
                                 <img src={props.data.url} alt="" className={styles.height}/>
                            </div>
                        </div>
                        <div className="card-body text-danger h1">
                            <h1 className="card-title">{props.data.name}</h1>
                            <h4>{props.data.summary}</h4>
                            <h4>{props.data.listOfActors}</h4>
                            <h4>{props.data.url}</h4>
                            <h4>{props.data.rating}</h4>
                            <h4>{props.data.year}</h4>
                            <h4>{props.data.language}</h4>
                            <h4>{props.data.Rrated}</h4>
                        </div>
                </div>
            </div>
        </div>
    )
}
export default Userinter

