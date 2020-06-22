import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';

import Answer from './answer'
import Explanation from './explanation'


const mapStateToProps = (state) => {
    return { 
        currentTask: state.currentTask,
    };
};

class Quiz extends React.Component {

    render() {
        return (
            <Box>
                <p>{ this.props.currentTask.question }</p>
                
                {Object.keys(this.props.currentTask.answers).map(key => 
                    <Answer text={ this.props.currentTask.answers[key] } answerIndex={ key }></Answer>
                )}
                
                <Explanation text={ this.props.currentTask.explanation } />              
            </Box>
        );
    }
}

export default connect(mapStateToProps)(Quiz);