const buttonTheme = {
    styleOverrides: {
        root: {
            color: '#FFFFFF',
            textTransform: 'none',
            borderRadius: 5,
            boxShadow: 'none',
            padding: '10px 20px',
            backgroundColor: '#FF9900',
            '&:hover': {
                boxShadow: '0px 0px 6px rgba(0, 0, 0, 0.25)',
            },
        },
    },
    variants: [
        {
            props: { variant: 'outlined' },
            style: {
                border: '2px solid #FF9900',
                padding: '8px 18px',
                '&:hover': {
                    border: '2px solid #FF9900',
                }
            },
        },
    ],
};

export default buttonTheme;