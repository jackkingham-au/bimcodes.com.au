import React from 'react';
import { Grid, Typography, Box, Stack, Container } from '@mui/material';
import Image from '../components/core/Image';
import Btn from '../components/core/Btn';
import AutodeskLogo from '../components/core/AutodeskLogo';
import background from '../bg-img/commercial-building-wireframe-wide-angle-mini.jpg';

const glassSection = {
    container: {
        backgroundImage: `url('${background}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        py: 6,
        px: {
            xs: 2,
            md: 4
        },
    },
    glassEffect: {
        bgcolor: 'rgba(26, 131, 194, .25)',
        backdropFilter: 'blur(5px)',
        boxShadow: 5,
        border: '1px solid rgba(26, 131, 194, .75)' 
    }
}

const Homepage = ({triggerAction}) => {
    return (
        <>
            <Grid container alignItems="center" sx={{maxWidth: 2000, margin: '0 auto'}}>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Typography sx={{py: 2}} variant="h3" children="Design with compliance, improve your efficiency." />
                        <Typography sx={{py: 2}}>BIMCodes is an Autodesk Revit Plugin that allows you to assess a building's compliance, using a design that is updated in realtime, to save hassle in conforming with the National Construction Code.</Typography>
                        <Stack direction={{xs: 'column', md: 'row'}} sx={{my: 2}} alignItems="center" justifyContent="center" spacing={2}>
                            <Btn sx={{height: '', width: {xs: 100/100, md: 'fit-content'}}} onClick={() => triggerAction()}>Sign Up For BIMCodes</Btn>
                            <AutodeskLogo />                    
                        </Stack>
                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                        <Image src="/assets/images/residential-office-wireframe-clear-background-mini.png" alt="Residential/Office Complex Wireframe" />
                </Grid>
            </Grid>
            <Container>
                <Typography variant="h2" children="Productivity at a glance..." align="center" sx={{my: 4}} />
                <Box sx={{display: {xs: 'block', md: 'flex'}, justifyContent: 'center'}}>
                    <Image sx={{maxWidth: {xs: 500,md: 400}, mx: 'auto', py: 4, display: 'block'}} src="/assets/cost-vs-time-graph.png" alt="BIMCodes Cost vs Time Graph" />
                    <Image sx={{maxWidth: {xs: 500,md: 400}, mx: 'auto', py: 4, display: 'block'}} src="/assets/productivity-graph.png" alt="BIMCodes Productivity Graph" />
                </Box>            
                <Grid container spacing={2} sx={{textAlign: 'center'}}>
                    <Grid item xs={12} md={4}>
                        <Image sx={{maxWidth: 75}} src="/assets/icons/compliance-icon.png" alt="Compliance Icon" />
                        <Typography variant="h5" children="Improve compliance with BCA" />
                        <Typography>Ensure you're always conforming with the Building Code of Australia (BCA) to reduce stress and hassle of further logistics.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Image sx={{maxWidth: 75}} src="/assets/icons/export-icon.png" alt="Export Icon" />
                        <Typography variant="h5" children="Export data to PDF or Excel spreadsheet" />
                        <Typography>Export your data straight to a PDF or Excel Spreadsheet for quick reference during your consultations and reviews.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Image sx={{maxWidth: 75}} src="/assets/icons/realtime-icon.png" alt="Realtime Icon" />         
                        <Typography variant="h5" children="Improve compliance with BCA" />
                        <Typography>See compliance calculated and justified in realtime, as you make changes to your design.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Image sx={{height: 75, width: 'auto'}} src="/assets/icons/geometry-icon.png" alt="Geometry Icon" />
                        <Typography variant="h5" children="2D to 3D Assessment" />
                        <Typography>Support for both 2D and 3D designs, meaning you can cover all aspects of your schematic.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Image sx={{maxWidth: 75}} src="/assets/icons/integration-icon.png" alt="Integration Icon" />
                        <Typography variant="h5" children="Easily integrate with your design" />
                        <Typography>As an Autodesk plugin, BIMCodes is designed to seamlessly integrate with your current workflow; the tools you already use.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Image sx={{maxWidth: 75}} src="/assets/icons/all-icon.png" alt="All Aspects Icon" />
                        <Typography variant="h5" children="Covers all aspects of design" />
                        <Typography>From floors to walls, to stairs and doors. BIMCodes is designed to cover each aspect of the building schematic.</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Grid container spacing={4} sx={{my: 2, ...glassSection.container}}>
                <Grid item xs={12} md={4}>
                    <Box sx={{...glassSection.glassEffect, height: 268, p: 2, borderRadius: 2}}>
                        <Image src="/assets/icons/code-icon.png" alt="Code Icon" sx={{display: 'block', width: 60, mx: 'auto', my: 2}} />
                        <Typography color="common.white" align="center" children="100k +" variant="h4" />
                        <Typography color="common.white" align="center" children="Sections of Code" variant="h5" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{...glassSection.glassEffect, height: 268, p: 2, borderRadius: 2}}>
                        <Image src="/assets/icons/clock-icon.png" alt="Clock Icon" sx={{display: 'block', width: 60, mx: 'auto', my: 2}} />
                        <Typography color="common.white" align="center" children="30%" variant="h4" />
                        <Typography color="common.white" align="center" children="More Time Saved" variant="h5" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Box sx={{...glassSection.glassEffect, height: 268, p: 2, borderRadius: 2}}>
                        <Image src="/assets/icons/correction-icon.png" alt="Correction Icon" sx={{display: 'block', width: 60, mx: 'auto', my: 2}} />
                        <Typography color="common.white" align="center" children="100%" variant="h4" />
                        <Typography color="common.white" align="center" children="Continuous Updates to Amendments" variant="h5" />
                    </Box>
                </Grid>
            </Grid>
            <Container>
                <Typography variant="h3" children="Increase Compliance. Save Time." align="center" sx={{my: 4}} />
                <Stack direction={{xs: 'column', md: 'row'}} spacing={{xs: 2, md: 4}} justifyContent="center">
                    <Btn  onClick={() => triggerAction()}>Sign Up Now</Btn>
                    <Btn sx={{textAlign: 'center'}} secondary href="/find-out-more">Find Out More</Btn>
                </Stack>
            </Container>
        </>
    );
}

export default Homepage;
