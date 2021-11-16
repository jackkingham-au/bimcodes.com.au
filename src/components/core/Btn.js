import React from 'react';
import { Button } from '@mui/material';

const Btn = ({children, sx, fullWidth, secondary, href, onClick, type}) => {

    if(secondary) {
        return (
            <Button type={(type) ? type : 'button'} onClick={(onClick) ? onClick : false} href={(href) ? href : false} variant="outlined" color="primary" sx={{display: 'block', textTransform: 'capitalize', ...sx, py: 2, px: 4, borderRadius: 1, borderColor: 'primary.main'}} size="large" fullWidth={(fullWidth) ? true : false} >
                {children}
            </Button>
        );
    } else {
        return (
            <Button type={(type) ? type : 'button'} onClick={(onClick) ? onClick : false} href={(href) ? href : false} variant="contained" color="secondary" sx={{display: 'block', textTransform: 'capitalize', ...sx, py: 2, px: 4, borderRadius: 1}} size="large" fullWidth={(fullWidth) ? true : false} >
                {children}
            </Button>
        );
    }
}

export default Btn;
