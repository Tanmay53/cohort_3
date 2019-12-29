import React from 'react';
class CompletedTasks extends React.Component {
    render() {
        return (
            <div className="row">
                <del className="h3 mx-auto text-success" >{this.props.xtaskName}</del>
            </div>
        )
    }
};
export default CompletedTasks;