import React from 'react';
import styles from './styles';
import { withStyles } from '@mui/styles';

const ExampleComponent = ({ classes }) => {
    return <div className={classes.root}>Test</div>;
};

export default withStyles(styles)(ExampleComponent);
