import React, { useState } from 'react';
import { Grid, Box, Button } from '@mui/material';
import Input from '../core/Input';
import withForm from './withForm';

const ContactForm = ({submit}) => {
    const [values, setValues] = useState({
        name: {
            value: '',
        },
        email: {
            value: '',
        },
        phone: {
            value: '',
            optional: true,
        },
        message: {
            value: '',
        }
    });

    const submitAction = async () => {
        console.log('Form Submitted');
        console.log(values)
        return {
            ok: true
        }
    }

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={e => submit(e, values, submitAction)}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Input setValues={setValues} name="Name" />        
                </Grid>
                <Grid item xs={12} md={6} sx={{display: {xs: 'none', md: 'block'}}} />
                <Grid item xs={12} md={6}>
                    <Input setValues={setValues} name="Email" />        
                </Grid>
                <Grid item xs={12} md={6}>
                    <Input setValues={setValues} name="Phone" optional />        
                </Grid>
                <Grid item xs={12}>
                    <Input setValues={setValues} name="Message" label="What can we help you with?" textarea />        
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" color="secondary" sx={{textTransform: 'capitalize'}} size="large" type="submit">Submit</Button>
                </Grid>
            </Grid>
        </Box>
    );
}

export default withForm(ContactForm);
