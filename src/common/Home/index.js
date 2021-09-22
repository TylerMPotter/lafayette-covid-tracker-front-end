import React from 'react';
import styles from './styles';
import { withStyles } from '@mui/styles';
import { Typography } from '@mui/material';

const Home = ({ classes }) => {
    return (
        <div className={classes.root}>
            <Typography>Welcome to the Lafayette Covid Tracker!</Typography>
        </div>
    );
};

export default withStyles(styles)(Home);
