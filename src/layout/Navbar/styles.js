const styles = (theme) => ({
    root: {
        width: '100%',
        height: theme.spacing(7),
        borderBottom: '2px solid black',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: theme.palette.primary.main,
        marginBottom: theme.spacing(3),
    },
    navbarButtonWrapper: {
        width: '15%',
    },
    navbarButton: {
        height: theme.spacing(7),
        width: '100%',
        backgroundColor: theme.palette.primary.main,
        cursor: 'pointer',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        '&:hover': {
            backgroundColor: theme.palette.primary.mainDark,
        },
    },
    navbarText: {
        color: theme.palette.primary.contrastText,
    },
});

export default styles;
