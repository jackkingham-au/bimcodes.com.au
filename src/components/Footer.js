import React from 'react';
import { Box, Stack, Link, Typography } from '@mui/material';
import Image from './core/Image';
import AutodeskLogo from './core/AutodeskLogo';

const Footer = ({triggerAction}) => {
    return (
        <Box component="footer" sx={{mt: 4, py: 2, bgcolor: 'primary.main'}}>
            <Stack spacing={{xs: 2, md: 4}} direction={{xs: 'column', md: 'row'}} alignItems="center" justifyContent="center">
                <Image src="/assets/bimcodes-logo-white.png" alt="BIMCodes Logo White" sx={{maxWidth: 150}} />
                <AutodeskLogo white />
            </Stack>
            <Stack component="nav" direction={{xs: 'column', md: 'row'}} spacing={4} justifyContent="center" alignItems="center" sx={{my: 4}}>
                <Link sx={{m: 0, fontWeight: 'bold'}} href="/" children="Home" color="common.white" underline="none" />
                <Link sx={{fontWeight: 'bold'}} href="/find-out-more" children="About" color="common.white" underline="none" />
                <Link sx={{fontWeight: 'bold'}} href="/contact" children="Contact" color="common.white" underline="none" />
                <Typography sx={{cursor: 'pointer', fontWeight: 'bold'}} children="Sign Up" color="common.white" onClick={() => triggerAction()} />
            </Stack>
        </Box>
    );
}

export default Footer;
