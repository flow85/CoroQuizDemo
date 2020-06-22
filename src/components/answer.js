import React from 'react';
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';

import { giveAnswer } from '../state';


const mapStateToProps = (state) => {
    return { 
        currentTask: state.currentTask,
        currentTaskAnswered: state.currentTaskAnswered,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        giveAnswer: (data) => dispatch(giveAnswer(data))
    };
}

class Answer extends React.Component {

    render() {
        let currentTask = this.props.currentTask;
        let isCorrectAnswer = currentTask.correctAnswerIndex == this.props.answerIndex;
        let hasBeenUncorrectlyChosen = !isCorrectAnswer && currentTask.answerIndex == this.props.answerIndex;

        let color = "default";
        if (this.props.currentTaskAnswered) {
            if (isCorrectAnswer) {
                color = "primary";
            } else if (hasBeenUncorrectlyChosen) {
                color = "secondary";
            }
        }
    
        return (
            <Button 
                onClick={ () => { this.props.giveAnswer(this.props.answerIndex) } }
                answerIndex={ this.props.answerIndex }
                variant="contained" 
                color={ color }
                fullWidth>
                { this.props.text }
            </Button>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Answer);