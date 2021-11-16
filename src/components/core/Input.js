import React, { useState } from 'react';
import { TextField } from '@mui/material';
import { validate } from '../../helpers/validate';

const validStyles = {
    '& input:valid + fieldset, & textarea:valid + fieldset': {
        borderColor: '#69f0ae',
        borderWidth: 2,
    }
}

const Input = ({children, name, label, textarea, optional, setValues}) => {
    // ERROR LEGEND
    // Error is NULL = Yet to be validated.
    // Error is False = Is valid.
    // Error is String = Error to correct. 
    const [error, setError] = useState(null);
    
    return (
        <TextField
            required
            name={name.toLowerCase()}
            label={(!label) ? name : label}
            fullWidth
            error={(error) ? true : false}
            helperText={(error) ? error : false} 
            onBlur={e => setError(validate(e, optional))}
            valid={(error === false) ? true : false}
            sx={validStyles}
            multiline={(textarea) ? true : false}
            rows={4}
            onChange={e => setValues(prev => ({...prev, [e.target.name]: {value: e.target.value, optional}}))}
        >
            {children}
        </TextField>            
    );
}

export default Input;