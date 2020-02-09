import Search from './Search'
import React from 'react'

const UserInfo = (props) => {
    {console.log(props.name.id)}
    const style = {
        maxHeight : "250px"
    }
    return (

        <div>
             <div className = "container bg-light">
                <div className = "row">
                    <div className = "col-4">
                        <img className = "img-fluid" style = {style} src={props.name.avatar_url} />
                    </div>
                    <div className = "col-8">
                        <div className = "row text-center">
                            <div className = "col-6">
                                <div>Name:</div>
                            </div>
                            <div className = "col-6">
                                <div>{props.name.login} </div>
                            </div>
                        </div>
                        <div className = "row text-center">
                            <div className = "col-6">
                                <div>Type:</div>
                            </div>
                            <div className = "col-6">
                                <div>{props.name.type} </div>
                            </div>
                        </div>
                        <div className = "row text-center">
                            <div className = "col-6">
                                <div>Github Account Link:</div>
                            </div>
                            <div className = "col-6">
                                <div><a href={props.name.html_url}>My Github Acc</a></div>
                            </div>
                        </div>
                        <div className = "row text-center">
                            <div className = "col-6">
                                <div>ID</div>
                            </div>
                            <div className = "col-6">
                                <div>{props.name.id} </div>
                            </div>
                        </div>
                        <div className = "row text-center">
                            <div className = "col-6">
                                <div>Github Repository Link</div>
                            </div>
                            <div className = "col-6">
                                <div><a href={props.name.repos_url}>My Github Repos </a> </div>
                            </div>
                        </div>
                        <div className = "row text-center">
                            <div className = "col-6">
                                <div>My Score:</div>
                            </div>
                            <div className = "col-6">
                                <div>{props.name.score} </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInfo;