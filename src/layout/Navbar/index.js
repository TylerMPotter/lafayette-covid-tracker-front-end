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
            <Grid item>
                <Paper
                    onClick={() => {
                        history.push(ROUTE_HOME);
                    }}
                >
                    <Typography>Home</Typography>
                </Paper>
            </Grid>
            <Grid item>
                <Paper
                    onClick={() => {
                        history.push(ROUTE_SIGNUP);
                    }}
                >
                    <Typography>Sign Up</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default withStyles(styles)(Navbar);
