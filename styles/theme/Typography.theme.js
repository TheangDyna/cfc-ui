const typographyTheme = {
    styleOverrides: {
        root: {
            color: '#000000',
            fontSize: 16,
            display: 'inline',
        },
    },
    variants: [
        {
            props: { variant: 'secondary' },
            style: {
                color: '#666666',
            },
        },
        {
            props: { variant: 'title' },
            style: {
                fontSize: 16,
                fontWeight: 'bold',
            },
        },
        {
            props: { variant: 'date' },
            style: {
                color: '#666666',
                fontSize: 14,
            },
        },
    ],
};

export default typographyTheme;