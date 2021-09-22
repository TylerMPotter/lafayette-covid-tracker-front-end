import React from 'react';
import styles from './styles';
import { withStyles } from '@mui/styles';
import { Button, Typography } from '@mui/material';

const SignUp = ({ classes }) => {
    const registerUser = () => {
        // TODO save users email in firestore
    };
    return (
        <div className={classes.root}>
            <Typography>Sign Up Below</Typography>
            {/* TODO add sign up form here @Tyler */}
            <Button onClick={registerUser}>Dummy Button</Button>
        </div>
    );
};

export default withStyles(styles)(SignUp);
