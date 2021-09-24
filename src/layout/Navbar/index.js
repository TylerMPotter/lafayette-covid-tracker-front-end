import React from 'react';
import styles from './styles';
import { withStyles } from '@mui/styles';
import { Grid, Paper, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { ROUTE_HOME, ROUTE_SIGNUP } from '../../routeConstants';

const Navbar = ({ classes }) => {
    const history = useHistory();

    return (
        <Grid className={classes.root}>
            <Grid item className={classes.navbarButtonWrapper}>
                <Paper
                    className={classes.navbarButton}
                    onClick={() => {
                        history.push(ROUTE_HOME);
                    }}
                >
                    <Typography className={classes.navbarText}>Home</Typography>
                </Paper>
            </Grid>
            <Grid item className={classes.navbarButtonWrapper}>
                <Paper
                    className={classes.navbarButton}
                    onClick={() => {
                        history.push(ROUTE_SIGNUP);
                    }}
                >
                    <Typography className={classes.navbarText}>
                        Sign Up
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Navbar);
