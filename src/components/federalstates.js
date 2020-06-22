import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

import { changeToView, toggleFederalState, VIEWS } from '../state';


const mapStateToProps = (state) => {
    return { federalStates: state.federalStates };
};

function mapDispatchToProps(dispatch) {
    return {
        changeToView: (view) => dispatch(changeToView(view)),
        toggleFederalState: (federalState) => dispatch(toggleFederalState(federalState)),
    };
}

class FederalStates extends React.Component {
    
    handleChange = (e) => {
        this.props.toggleFederalState(e.target.value);
    }
    
    render() {
        return (
            <Box>
                <h1>Für welche Bundesländer möchtest du dein Wissen testen?</h1>
                <FormGroup>
                    {Object.keys(this.props.federalStates).map(key => 
                        <FormControlLabel control={
                            <Checkbox color="primary" name={key} value={key} onChange={this.handleChange} />
                        } label={key} checked={this.props.federalStates[key]} />
                    )}
                </FormGroup>
                <Typography align="center">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        onClick={() => {this.props.changeToView(VIEWS.MENU)}}>
                        Ok
                    </Button>
                </Typography>
            </Box>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FederalStates);