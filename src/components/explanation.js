import React from 'react';
import { connect } from "react-redux";
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';

import { endTask } from '../state';


const mapStateToProps = (state) => {
    return { 
        currentTaskAnswered: state.currentTaskAnswered,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        endTask: (payload) => dispatch(endTask(payload))
    };
}

class Explanation extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {modalOpen: false};
    }
    
    toggleModal = () => {
        this.setState({
            modalOpen: !this.state.modalOpen,
        });
    }
    
    render() {
        if (this.props.currentTaskAnswered) {
            return (
                <Box>
                    <Modal open={ this.state.modalOpen } onClose={ this.toggleModal }>
                        <Container maxWidth="xs">
                            <Card>
                                <Typography>
                                    { this.props.text }
                                </Typography>
                            </Card>
                        </Container>
                    </Modal>
                    <Button onClick={ this.toggleModal } fullWidth>
                        Warum ist das so?
                    </Button>
                    <Button onClick={ () => { this.props.endTask(null) } } fullWidth>
                        Weiter
                    </Button>
                </Box>
            );
        } else {
            return (null);
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Explanation);