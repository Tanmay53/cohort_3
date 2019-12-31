/* eslint-disable no-useless-constructor */
import React from 'react';
import {connect} from 'react-redux';

class Total extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <h1>Non Completed Tasks Count: {this.props.count}</h1>
            </>
        );
    }
}

const mapStateToProps = (state) => {
    return {count: state.count};
};

export default connect(mapStateToProps, null)(Total);