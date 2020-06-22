import React from 'react';
import { connect } from "react-redux";

import { VIEWS } from './state'
import Categories from './components/categories.js';
import FederalStates from './components/federalstates.js';
import Menu from './components/menu.js';
import Quiz from './components/quiz.js';
import Result from './components/result.js';
import BackgroundInformation from './components/backgroundinformation.js'

const mapStateToProps = (state) => {
    return { currentView: state.currentView };
};

class App extends React.Component {
    render() {
        switch(this.props.currentView) {
            case VIEWS.MENU: {
                return (
                    <Menu />
                );
            }
            case VIEWS.CATEGORIES: {
                return (
                    <Categories />
                );
            }
            case VIEWS.FEDERAL_STATES: {
                return (
                    <FederalStates />
                );
            }
            case VIEWS.QUIZ: {
                return (
                    <Quiz />
                );
            }
            case VIEWS.RESULT: {
                return (
                    <Result />
                );
            }
            case VIEWS.BACKGROUNDINFORMATION: {
                return (
                    <BackgroundInformation />
                );
            }
        }
    };
}

export default connect(mapStateToProps)(App)