import React from 'react';
class Tasks extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="row mx-auto">
                    <p onClick={this.props.selectX} className="h3 mx-auto" style={{ cursor: "pointer", color: "red" }}>{this.props.taskName}</p>
                    <i onClick={this.props.selectD} style={{ fontSize: "34px", cursor: "pointer" }} className="material-icons">
                        delete
            </i>
                </div>
            </div>

        )
    }
}

export default Tasks;