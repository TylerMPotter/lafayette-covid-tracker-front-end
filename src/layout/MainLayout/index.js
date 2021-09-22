import React from 'react';
import styles from './styles';
import { withStyles } from '@mui/styles';
import Navbar from '../Navbar';

const MainLayout = ({ classes, child }) => {
    return (
        <div className={classes.root}>
            <Navbar />
            {child}
        </div>
    );
};

export default withStyles(styles)(MainLayout);
