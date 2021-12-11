import React from 'react';
import { Link, Stack, Typography, Container } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import  ContactForm from '../components/forms/ContactForm';

const Contact = () => {
    return (
        <Container>
            <Typography variant="h2" children="Connect with us" />
            <Stack direction={{xs: 'column', md: 'row'}} spacing={2} sx={{my: 4}}>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <PhoneIcon color="primary" sx={{fontSize: 36}} />
                    <Link underline="none" sx={{color: 'text.primary'}} href="tel:1300882788" variant="subtitle1" children="1300 882 788" />
                </Stack>
                <Stack direction="row" alignItems="center" spacing={2}>
                    <EmailIcon color="primary" sx={{fontSize: 36}} />
                    <Link underline="none" sx={{color: 'text.primary'}} href="mailto:info@bimcodes.com.au6" variant="subtitle1" children="info@bimcodes.com.au" />
                </Stack>                                
            </Stack>
            <ContactForm />
        </Container>
    );
}

export default Contact;
