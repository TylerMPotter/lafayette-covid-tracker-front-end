import React, { useContext, useState } from 'react';
import styles from './styles';
import { withStyles } from '@mui/styles';
import { Button, TextField, Typography } from '@mui/material';
import { FirestoreContext } from '../../App';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { EMAIL_REGEX } from './constants';

const SignUp = ({ classes }) => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const db = useContext(FirestoreContext);
    const registerUser = async () => {
        const invalidEmail = email.match(EMAIL_REGEX) === null;
        let exists = false;
        const querySnapshot = await getDocs(collection(db, 'users'));
        await querySnapshot.forEach((doc) => {
            if (doc.data().email.toLowerCase() === email.toLowerCase()) {
                exists = true;
            }
        });
        if (!exists && !invalidEmail) {
            try {
                await addDoc(collection(db, 'users'), {
                    id: email,
                    email: email,
                });
                setEmail('');
                setError('');
            } catch (e) {
                setError('An unknown error has occurred: ' + e);
            }
        } else {
            if (invalidEmail) {
                setError('Email Address is Invalid');
            } else {
                setError('User already exists');
            }
        }
    };
    return (
        <div className={classes.root}>
            <Typography className={classes.title}>Sign Up Below</Typography>
            <TextField
                placeholder="Enter an email..."
                onChange={(event) => {
                    setEmail(event.target.value);
                }}
            />
            <Button onClick={registerUser}>Dummy Button</Button>
            <Typography className={classes.errorMessage}>{error}</Typography>
        </div>
    );
};

export default withStyles(styles)(SignUp);
