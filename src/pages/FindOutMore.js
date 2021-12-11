import React from 'react';
import { Typography, Stack, Box, Grid, Container } from '@mui/material';
import Image from '../components/core/Image';
import Btn from '../components/core/Btn';

const FindOutMore = ({triggerAction}) => {
    return (
        <Container>
            <Typography variant="h2" children="BIMCodes overview" />
            <Typography>BIMCodes is a software that introduces National Construction Code compliance assessments for design consultants and Building Certifiers to assist in the concept, schematic & design development phases of a building project.</Typography>
            <Typography>The software, which is configured as an Autodesk Revit Plugin, can be utilised to assess the design of elements of a project (such as distances of walls to boundaries, egress, stairs, sanitary facilities & accessibility) against the provisions of the Australian National Construction Code, outling the compliance status, both within the BIM model & exported data, on the current design.</Typography>
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
                <Image src="/assets/images/office-floor-plan.jpg" alt="Office Floor Plan Wireframe" sx={{maxHeight: {xs: 'auto', md: 250}, borderRadius: 2}} />
                <Box>
                    <Typography variant="h5" color="common.white" sx={{p: 4}}>Ultimately, this means establishing a platform of compliance that integrates with leading design software to inform consultants of a project's compliance with the National Construction Code.</Typography>
                </Box>       
            </Stack>
            <Typography variant="h3" children="How does this apply to further fields?" sx={{my: 6}} />
            <Grid container spacing={2} sx={{my: 4, textAlign: 'center'}}>
                <Grid item xs={12} md={4}>
                    <Image src="/assets/icons/designer-icon.png" alt="Designer Icon" sx={{maxWidth: 200}} />
                    <Typography variant="h5" children="Architect/Building Designer" />
                    <Typography>As principal consultant for building projects, BIMCodes will assist to improve coordination efficiency of reports/documentation to ensure compliance with the NCC is maintained. The software will assist in demonstrating to the client, building certifier and other consultants that compliance is achieved.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image src="/assets/icons/builder-icon.png" alt="Builder Icon" sx={{maxWidth: 200}} />
                    <Typography variant="h5" children="Contractor/Builder" />
                    <Typography>BIMCodes can provide certainty to contractors when tendering on projects, where the project has been reviewed to ensure compliance with the NCC, in addition to the Building Certifier report. THis level of assessment reduces possibilities of non-conformances resulting in costly rectification work throughout the construction phase of the project.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image src="/assets/icons/certifier-icon.png" alt="Certifier Icon" sx={{maxWidth: 200}} />
                    <Typography variant="h5" children="Building Certifier" />
                    <Typography>As the primary consultant to manage building code compliance, BIMCodes can be utilised to regularly assess design changes for non-compliances, reduce time-spent on assessment tasks and imrpove tracking of compliance status prior to issuing Building Approvals. This assists increasing the accuracy and reliability of advice and mitigate risks of non-compliances occuring.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image src="/assets/icons/owner-icon.png" alt="Owner Icon" sx={{maxWidth: 200}} />
                    <Typography variant="h5" children="Owner/Building Developer" />
                    <Typography>As the client, the building owner has an obligation to provide a quality development while not over capitalizing on costs. BIMCodes provides building owners with assurity that multiple design changes throughout the development phase are thoroughly reviewed and compliant. Resulting in reduced re-design/construction costs and improved design quality.</Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Image src="/assets/icons/accessibility-icon.png" alt="Accessibility Icon" sx={{maxWidth: 200}} />
                    <Typography variant="h5" children="Accessibility Consultant" />
                    <Typography>As the primary consultant to manage disability access and design recommendations, BIMCodes can be implemented to assess accessibility compliance to and within the building, increasing accuracy of assessment and productivity, all while reducing time and risk.</Typography>
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
