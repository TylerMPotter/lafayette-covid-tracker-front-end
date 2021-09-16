import React from 'react';
import styles from './styles';
import { withStyles } from '@material-ui/styles';
// import { FirebaseApp } from '@firebase/app';

const ExampleComponent = ({ classes }) => {
    return <div className={classes.root}>Test</div>;
};

export default withStyles(styles)(ExampleComponent);
