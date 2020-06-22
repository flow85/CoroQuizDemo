import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

import { changeToView, VIEWS } from '../state';


function mapDispatchToProps(dispatch) {
    return {
        changeToView: (view) => dispatch(changeToView(view))
    };
}

class Menu extends React.Component {
    render() {
        return (
            <Box>
                <Typography align="center">
                    <h1>CoroQuiz</h1>
                    <h2>Teste dein Wissen über Corona Richtlinien</h2>
                        <Button 
                            variant="contained" 
                            color="primary" 
                            fullWidth
                            onClick={() => {this.props.changeToView(VIEWS.QUIZ)}}>
                            Quiz starten
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            fullWidth
                            onClick={() => {this.props.changeToView(VIEWS.CATEGORIES)}}>
                            Kategorien ändern
                        </Button>
                        <Button 
                            variant="contained" 
                            color="secondary" 
                            fullWidth
                            onClick={() => {this.props.changeToView(VIEWS.FEDERAL_STATES)}}>
                            Bundesländer ändern
                        </Button>
                </Typography>
            </Box>
        );
    }
}

export default connect(null, mapDispatchToProps)(Menu);