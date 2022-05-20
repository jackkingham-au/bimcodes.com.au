import React from 'react';
import { Typography, Stack, Box, Grid, Container } from '@mui/material';
import Image from '../components/core/Image';
import Btn from '../components/core/Btn';

const FindOutMore = ({triggerAction}) => {
    return (
        <Container>
            <Typography variant="h2" children="BIMCodes overview" />
            <Typography>BIMCodes is an Autodesk Revit Plugin that introduces the national construction code and Australian standard assessments for Building Information Models (BIM). This software is to assist design consultants and building certifiers to assess compliance during concept, schematic, and design development phases of any/all construction projects.</Typography>
            <Typography>The software, which is configured as an Autodesk Revit Plugin, can be utilised to assess the design from conception to final deliverable and beyond, outlining the compliance status of the proposed model both within Revit or in an exported report format.</Typography>
            <Box sx={{width: {xs: 90/100, md: 70/100}, mx: 'auto'}}>
                <Typography variant="h3" children="Our objectives are..." align="center" />
                <Stack direction="row" alignItems="center" sx={{maxWidth: 600}}>
                    <Typography variant="h4" sx={{mr: 2}} children="1." />
                    <Typography>Synchronise assessment of prescriptive compliance throughout the project design phase to mitigate non-conformances, human interpretational error, reduce time spent and costs on a project.</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" sx={{maxWidth: 600}}>
                    <Typography variant="h4" sx={{mr: 2}} children="2." />
                    <Typography>Provide Building Certifiers with the tools to improve assessment efficiencies, reduce assessment timeframes and clarify prescriptive NCC requirements to design teams.</Typography>
                </Stack>
                <Stack direction="row" alignItems="center" sx={{maxWidth: 600}}>
                    <Typography variant="h4" sx={{mr: 2}} children="3." />
                    <Typography>Ability for consultants to understand compliance impacts of design changes/alterations as they occur concurrently with the project development.</Typography>
                </Stack>
            </Box>
            <Stack direction={{xs: 'column', md: 'row'}} sx={{bgcolor: 'primary.main', borderRadius: 2, my: 4, py: {xs: 0, md: 2}, boxShadow: 5}} alignItems="center">
                <Image src="/assets/images/office-floor-plan-mini.jpg" alt="Office Floor Plan Wireframe" sx={{maxHeight: {xs: 'auto', md: 250}, borderRadius: 2}} />
                <Box>
                    <Typography variant="h5" color="common.white" sx={{p: 4}}>Ultimately, this means establishing a platform of compliance that integrates with a leading design software to inform consultants of a project’s compliance with the National Construction Code and relevant Australian Standards.</Typography>
                </Box>       
            </Stack>
            <Typography variant="h3" children="How does this apply to further fields?" sx={{my: 6}} />
            <Grid container spacing={2} sx={{my: 4, textAlign: 'center'}}>
                <Grid item xs={12} md={4}>
                    <Image src="/assets/icons/designer-icon.png" alt="Designer Icon" sx={{maxWidth: 200}} />
                    <Typography variant="h5" children="Architect/Building Designer" />
                    <Typography>As the principal consultant for building projects, BIMCodes will assist to improve coordination and will provide efficient reports to ensure compliance with the NCC is maintained. The software will assist in demonstrating to the client, building certifier and other consultants that compliance is achieved.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image src="/assets/icons/builder-icon.png" alt="Builder Icon" sx={{maxWidth: 200}} />
                    <Typography variant="h5" children="Contractor/Builder" />
                    <Typography>BIMCodes can provide certainty to contractors when tendering on projects, by providing a platform for the design model to be assessed and a report can then be produced to review against the Building Certifiers Report. This level of assessment reduces possibilities of non-compliances resulting in costly rectification works throughout the design, and furthermore the construction phase of the project.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image src="/assets/icons/certifier-icon.png" alt="Certifier Icon" sx={{maxWidth: 200}} />
                    <Typography variant="h5" children="Building Certifier" />
                    <Typography>As the primary consultant managing building code compliance, BIMCodes can be utilised to regularly assess design changes and also QA completed reports. The result in reduced time-spent on assessment tasks and will improve tracking of compliance status prior issuing Building Approval. This assists increasing the accuracy and reliability of advice and mitigate risks of non-compliances occurring.</Typography>
                </Grid>
                <Grid xs={0} md={2}></Grid>
                <Grid item xs={12} md={4}>
                    <Image src="/assets/icons/owner-icon.png" alt="Owner Icon" sx={{maxWidth: 200}} />
                    <Typography variant="h5" children="Owner/Building Developer" />
                    <Typography>As the client, the building owner has an obligation to provide a quality development while not over capitalising on cost. BIMCodes provides building owners with assurity that multiple design changes throughout the development phase are thoroughly reviewed and compliant. Resulting in reduced re-design/construction costs and improved design quality.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image src="/assets/icons/accessibility-icon.png" alt="Accessibility Icon" sx={{maxWidth: 200}} />
                    <Typography variant="h5" children="Accessibility Consultant" />
                    <Typography>As the primary consultant managing disability access and accessibility design recommendations, BIMCodes can be implemented to assess accessibility compliance to and within the building, increasing accuracy of assessments and productivity, all while reducing time and risk.</Typography>
                </Grid>
            </Grid>
            <Typography variant="h3" children="Increase Compliance. Save Time." align="center" />
            <Stack direction="row" justifyContent="center" sx={{my: 4}}>
                <Btn children="Sign Up Now" onClick={() => triggerAction()} />
            </Stack>
        </Container>
    );
}

export default FindOutMore;
