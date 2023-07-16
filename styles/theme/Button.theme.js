const buttonTheme = {
    styleOverrides: {
        root: {
            textTransform: 'none',
            borderRadius: 5,
            boxShadow: 'none',
            padding: '5px 20px',
            '&:hover': {
                boxShadow: 'none',
            },
        },
    },
    variants: [
        {
            props: { variant: 'contained' },
            style: {
                color: '#FFFFFF',
                background: 'secodary',
            }
        },
        {
            props: { variant: 'outlined' },
            style: {
                color: '#FF9900',
                border: '2px solid #FF9900',
                padding: '3px 18px',
                '&:hover': {
                    border: '2px solid #FF9900',
                }
            },
        },
        {
            props: { variant: 'text' },
            style: {
                color: '#FF9900',
            }
        }
    ],
};

export default buttonTheme;