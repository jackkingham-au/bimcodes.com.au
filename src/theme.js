import { createTheme } from '@mui/material';

export default createTheme({
    palette: {
        primary: {
            main: '#1a83c2' 
        },
        secondary: {
            main: '#1d164f'
        },
        text: {
            primary: '#424242'
        },
    },
    typography: {
        h1: {
            fontWeight: 700,
            color: '#1a83c2',
        },
        h2: {
            fontWeight: 700,
            color: '#1a83c2',
        },
        h3: {
            fontWeight: 700,
            color: '#1a83c2',
        },
        h4: {
            fontWeight: 700,
            color: '#1a83c2',
        },
        h5: {
            fontWeight: 700,
            color: '#1a83c2',
        },
        h6: {
            fontWeight: 700,
            color: '#1a83c2',
        },
        body1: {
            fontWeight: 100,
            fontFamily: 'Open Sans',
        },
        body2: {
            fontWeight: 100,
            fontFamily: 'Open Sans', 
        }, 
        button: {
            fontWeight: 100,
            fontFamily: 'Open Sans'
        }
    },
    components: {
        MuiTypography: {
            styleOverrides: {
                root: {
                    margin: '16px 0'
                } 
            }
        }, 
        MuiLink: {
            styleOverrides: {
                root: {
                    fontWeight: 300,
                    fontFamily: 'Open Sans'
                }
            }
        }
    }
});