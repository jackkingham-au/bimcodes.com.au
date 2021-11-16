import React from 'react';
import { Typography, Box } from '@mui/material';
import Image from './Image';

const AutodeskLogo = ({white}) => {
    
    if(white) {
        return (
            <Box sx={{my: 2}}>
                <Typography variant="body2" children="A plugin developed for" color="white" />
                <Image src="/assets/autodesk-logo-white.png" alt="AutoDesk Logo White" type="autodesk" />
            </Box>
        );
    } else {
        return (
            <Box sx={{my: 2}}>
                <Typography variant="body2" children="A plugin developed for" />
                <Image src="/assets/autodesk-logo-color.png" alt="AutoDesk Logo Color" type="autodesk" />
            </Box>
        );
    }
}

export default AutodeskLogo;
