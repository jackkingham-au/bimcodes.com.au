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

    const feedback = {
        success: 'Congratulations, you\'ve successfully joined the exclsuive list. You\'ll receive exclusive updates and news, on our progress straight to your inbox.',
        error: 'Oh no, there was an issue signing you up. Please come back and try later.',
            
    }

    const errHandler = result => {
        if(result.ok) return {ok: true, msg: feedback.success};
        if(result.data.error.response.text.match(/Member Exists/)) return {ok: true, msg: 'You\'ve already signed up to the list!'};
        // Else Case
        return {
            ok: false,
            msg: feedback.error
        }
    }

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
        <Box component="form" noValidate autoComplete="off" onSubmit={e => submit(e, values, feedback, submitAction, errHandler)}>
            <Stack spacing={3}>
                <Input setValues={setValues} name="Name" />
                <Input setValues={setValues} name="Email" />
                <Btn type="submit">Register Interest</Btn>
            </Stack>
        </Box>
    );  
}

export default withForm(EOIForm);
