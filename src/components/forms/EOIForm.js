import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import Btn from '../core/Btn';
import Input from '../core/Input';
import withForm from './withForm';

const EOIForm = ({submit}) => {
    const [values, setValues] = useState({
        name: {
            value: '',
        },
        email: {
            value: ''
        },
    });

    const submitAction = async () => {
        const response = await fetch('/.netlify/functions/addToMailchimp', {
            method: 'POST',
            body: JSON.stringify(values)
        });

        const result = await response.json();
        return {
            ok: response.ok,
            data: result
        }
    }

    return (
        <Box component="form" noValidate autoComplete="off" onSubmit={e => submit(e, values, submitAction)}>
            <Stack spacing={3}>
                <Input setValues={setValues} name="Name" />
                <Input setValues={setValues} name="Email" />
                <Btn type="submit">Register Interest</Btn>
            </Stack>
        </Box>
    );  
}

export default withForm(EOIForm);
