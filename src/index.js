import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import App from './App';
import store from './state';


ReactDOM.render(
    <Provider store={store}>
        <Typography>
            <Container maxWidth="xs">
                <App />
            </Container>
        </Typography>
    </Provider>,
    document.getElementById('root')
);