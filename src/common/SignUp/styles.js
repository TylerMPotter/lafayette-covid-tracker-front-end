const styles = (theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
    },
    errorMessage: {
        color: theme.palette.error.main,
    },
    title: {
        textAlign: 'center',
    },
});

export default styles;
