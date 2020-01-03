import React from 'react'
import Button from './Button'

var label = ["JOIN US", "SETTINGS", "LOGIN", "CONTACT US", "SEARCH", "HELP", "HOME", "DOWNLOAD"]
var color = ["#1E8ACD", "#4D7486", "#FD7C00", "#DC0030", "#38963C", "#552A83", "#D90073", "#906F27"]

class Task2 extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className='container m-5'>
                <div className="row m-2">
                    <Button val={[label[0], color[0]]} />
                    <Button val={[label[1], color[1]]} />
                </div>
                <div className="row m-2">
                    <Button val={[label[2], color[2]]} />
                    <Button val={[label[3], color[3]]} />
                </div>
                <div className="row m-2">
                    <Button val={[label[4], color[4]]} />
                    <Button val={[label[5], color[5]]} />
                </div>
                <div className="row m-2">
                    <Button val={[label[6], color[6]]} />
                    <Button val={[label[7], color[7]]} />
                </div>
            </div>
        )
    }
}

export default Task2