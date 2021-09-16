const styles = (theme) => ({
    '#root': {
        background: '#fcfcfc',
        minHeight: '100%',
        width: '100%',
    },
    a: {
        color: theme.palette.primary,
        '&:visited': {
            color: theme.palette.disabled,
        },
        '&:hover, &:active': {
            backgroundColor: theme.palette.primary,
            color: theme.palette.primaryForeground,
        },
    },
});

export default styles;
