import React, { useState } from 'react';
import { Alert, LinearProgress, Box } from '@mui/material';   
import { validate } from '../../helpers/validate';

const withForm = WrappedComponent => {
    const WithForm = () => {
        const [success, setSuccess] = useState(false);
        const [error, setError] = useState(false);
        const [loading, setLoading] = useState(false);

        const submit = async (e, values, feedback, submitAction, errHandler = false) => {
            e.preventDefault();
            setLoading(true);
            setError(false);
            setSuccess(false);

            const validatedFields = Object.entries(values).map(field => {
                if(field[1].value === '' && field[1].optional !== true) return '';

                const e = {
                    target: {
                        name: field[0],
                        value: field[1].value
                    }
                }

                const optional = (typeof field[1].optional === 'undefined') ? false : true;

                return validate(e, optional)
            });

            const result = validatedFields.filter(value => typeof value === 'string');

            if(result.length > 0) {
                setLoading(false);
                setError('There is an invalid entry in the form fields. Please review the details and try again.');
            } else {
                const result = await submitAction();

                if(!errHandler) {
                    if(result.ok) {
                        setLoading(false);
                        setSuccess(feedback.success);
                    } else {
                        setLoading(false);
                        setError(feedback.error);
                        console.error('FORM SUBMISSION ERROR - ', result.data);
                    }
                } else {
                    const outcome = errHandler(result);
                    if(outcome.ok) {
                        setLoading(false);
                        setSuccess(outcome.msg);
                    } else {
                        setLoading(false);
                        setError(outcome.msg);
                        console.error('CUSTOM FORM HANDLER ERROR - ', outcome.msg);
                    }
                }
            }
        }

        return (
            <>
                <WrappedComponent submit={submit} />
                <Box sx={{my: 2}}>
                    {(loading) ? <LinearProgress color="primary" /> : ''}
                    {(success) ? <Alert severity="success" children={success} /> : ''}
                    {(error) ? <Alert severity="error" children={error} /> : ''}
                </Box>
            </>
        );
    }

    return WithForm;
}

export default withForm;
