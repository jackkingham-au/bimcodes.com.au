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
            <Grid container alignItems="center" sx={{maxWidth: 2000, margin: '0 auto 32px auto'}}>
                <Grid item xs={12} md={6}>
                    <Container>
                        <Typography sx={{py: 2}} variant="h3" children="Design with compliance, improve your efficiency." />
                        <Typography sx={{py: 2}}>BIMCodes is an Autodesk Revit Plugin that allows you to assess Building Information Models (BIM) as they are designed and updated in real time as a guide to ensuring compliance with relevant building codes and standards is achieved.</Typography>
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
                <Grid container spacing={2} sx={{textAlign: 'center'}}>
                    <Grid item xs={12} md={4}>
                        <Image sx={{maxWidth: 75}} src="/assets/icons/compliance-icon.png" alt="Compliance Icon" />
                        <Typography variant="h5" children="Improve compliance" />
                        <Typography>Ensure compliance with relevant building codes and standards is achieved during the design process; and as the design progresses.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Image sx={{maxWidth: 75}} src="/assets/icons/export-icon.png" alt="Export Icon" />
                        <Typography variant="h5" children="Export assessment results to PDF or Excel Spreadsheet" />
                        <Typography>Export your assessment results to a PDF or Excel Spreadsheet for reference during consultations or for records of assessment.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Image sx={{maxWidth: 75}} src="/assets/icons/realtime-icon.png" alt="Realtime Icon" />         
                        <Typography variant="h5" children="Improve Design & Project Efficiency" />
                        <Typography>Assess models as they are being designed in real-time; or when making amendments reducing compliance correspondence.</Typography>
                    </Grid>
                    <Grid xs={0} md={2}></Grid>
                    <Grid item xs={12} md={4}>
                        <Image sx={{maxWidth: 75}} src="/assets/icons/integration-icon.png" alt="Integration Icon" />
                        <Typography variant="h5" children="Integrates with your design current workflow" />
                        <Typography>As an Autodesk Revit Plug-in, BIMCodes is designed to integrate with your current workflow and can be utilised at any point in time throughout the design process.</Typography>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Image sx={{maxWidth: 75}} src="/assets/icons/all-icon.png" alt="All Aspects Icon" />
                        <Typography variant="h5" children="Covers all aspects of Building Information Models" />
                        <Typography>From small to large models – BIMCodes is designed to assess all scales and aspects of projects.</Typography>
                    </Grid>
                </Grid>
            </Container>
            <Grid container spacing={4} sx={{my: 2, ...glassSection.container, justifyContent: 'center'}}>
                <Grid item xs={12} md={6}>
                    <Box sx={{...glassSection.glassEffect, height: 268, p: 2, borderRadius: 2}}>
                        <Image src="/assets/icons/correction-icon.png" alt="Correction Icon" sx={{display: 'block', width: 60, mx: 'auto', my: 2}} />
                        <Typography color="common.white" align="center" children="2" variant="h4" />
                        <Typography color="common.white" align="center" children="Current Software Functions Available" variant="h5" />
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
