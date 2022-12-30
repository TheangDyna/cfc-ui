const typographyTheme = {
  styleOverrides: {
    root: {
      color: "#000",
      fontSize: 16,
      display: "inline",
      fontFamily: "roboto",
      lineHeight: '25px',
    },
  },
  variants: [
    {
      props: { variant: "logo" },
      style: {
        fontSize: 20,
        color: "#FF9900",
        fontFamily: "Lobster",
        whiteSpace: "nowrap",
      },
    },
    {
      props: { variant: "secondary" },
      style: {
        color: "#666666",
      },
    },
    {
      props: { variant: "title" },
      style: {
        fontWeight: "bold",
      },
    },
    {
      props: { variant: "link" },
      style: {
        color: "#666666",
        cursor: "pointer",
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    {
      props: { variant: "small" },
      style: {
        color: "#666666",
        fontSize: 14,
      },
    },
  ],
};

export default typographyTheme;
