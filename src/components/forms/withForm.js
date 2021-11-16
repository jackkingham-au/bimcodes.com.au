import React, { useState } from 'react';
import { Alert, LinearProgress, Box } from '@mui/material';   
import { validate } from '../../helpers/validate';

const withForm = WrappedComponent => {
    const WithForm = () => {
        const [success, setSuccess] = useState(false);
        const [error, setError] = useState(false);
        const [loading, setLoading] = useState(false);

        const submit = async (e, values, submitAction) => {
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
                setError('Not all fields are valid. Please  review all entries and try again.');
            } else {
                const result = await submitAction();
                if(result.ok) {
                    setLoading(false);
                    setSuccess('Your details have successfully been submitted!');
                } else {
                    setLoading(false);
                    setError('There was an error processing the form. Please try again later.');
                    console.error('FORM SUBMISSION ERROR - ', result.data);
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
