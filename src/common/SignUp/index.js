import React from 'react';
import styles from './styles';
import { withStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const SignUp = ({ classes }) => {
    return (
        <div className={classes.root}>
            <Typography>Sign Up Below</Typography>
            {/* TODO add sign up form here @Tyler */}
        </div>
    );
};

export default withStyles(styles)(SignUp);
