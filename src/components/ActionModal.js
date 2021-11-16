import React from 'react';
import { Modal, Box, Typography, Grow } from '@mui/material';
import EOIForm from './forms/EOIForm';
import CloseIcon from '@mui/icons-material/Close';

const boxStyles = {
    position: 'absolute',
    top: {
        xs: 0,
        md: '50%',
    },
    left: {
        xs: 0,
        md: '50%',
    },
    transform: {
        xs: 'none',
        md: 'translate(-50%, -50%) !important',
    },
    bgcolor: 'common.white',
    p: 4,
    outline: 0
}

const closeStyles = {
    float: 'right',
    color: '#9e9e9e',
    cursor: 'pointer'
}

// This Refers to the Action People Will Take When A Sign Up Button is Clicked
const ActionModal = ({trigger, triggerAction}) => {
    const close = () => triggerAction(false);

    return (
        <Modal open={trigger} onClose={() => close()} onBackdropClick={() => close()} sx={{outline: 0}}>
            <Grow in={trigger}>
                <Box sx={boxStyles}>
                    <CloseIcon sx={closeStyles} onClick={() => close()} />
                    <Typography variant="h4" children="Get notified when we launch" />
                    <Typography>Want to be the first to hear when we launch? Sign up below to get the latest updates and news, straight to your inbox.</Typography>
                    <EOIForm />
                </Box>
            </Grow>
        </Modal>
    );
}

export default ActionModal;
