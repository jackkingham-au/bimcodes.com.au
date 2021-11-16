import React from 'react';
import { styled } from '@mui/material';

const Logo = styled('img')({
    maxWidth: 125,
    height: 'auto',
    width: '100%',
});

const Default = styled('img')({
    height: 'auto',
    width: '100%'
});

const AutodeskLogo = styled('img')({
    height: 'auto',
    width: 180,
})

const Image = ({src, alt, type, sx}) => {

    switch(type) {
        case 'logo':
            return <Logo src={src} alt={alt} sx={sx} />
        case 'autodesk':
            return <AutodeskLogo src={src} alt={alt} sx={{mt: 1}} sx={sx} />
        default:
            return <Default src={src} alt={alt} sx={sx} /> 
    }
}

export default Image;
