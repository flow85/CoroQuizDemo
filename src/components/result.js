import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { changeToView, VIEWS } from '../state';


const mapStateToProps = (state) => {
    return { 
        numberOfTasks: state.numberOfTasks,
        score: state.score,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        changeToView: (view) => dispatch(changeToView(view))
    };
}

class Result extends React.Component {
    render() {
        return (
            <Box>
                <Typography
                    align="center">
                    Du hast { this.props.score } von { this.props.numberOfTasks } Fragen richtig beantwortet. Gut gemacht!
                </Typography>   
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {this.props.changeToView(VIEWS.BACKGROUNDINFORMATION)}}>
                    Hintergrundinfos
                </Button>
                <Button 
                    variant="contained" 
                    color="primary" 
                    fullWidth
                    onClick={() => {this.props.changeToView(VIEWS.MENU)}}>
                    Zurück zum Menu
                </Button>
            </Box>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Result);