/* eslint-disable no-undefined */
import React, { useContext, useState } from 'react';
import styles from './styles';
import { withStyles } from '@mui/styles';
import { Button, TextField, Typography } from '@mui/material';
import { FirestoreContext } from '../../App';
import { addDoc, collection, getDocs } from 'firebase/firestore';
import { EMAIL_REGEX } from './constants';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = ({ classes }) => {
    const [email, setEmail] = useState('');

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
                toast.success('Successfully Registered!', {
                    position: 'bottom-left',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } catch (e) {
                toast.error('An error has occurred' + e, {
                    position: 'bottom-left',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        } else {
            if (invalidEmail) {
                toast.error('Email Address is Invalid', {
                    position: 'bottom-left',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.error('This Email Address is Already Subscribed', {
                    position: 'bottom-left',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
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
            <Button className={classes.subscribeButton} onClick={registerUser}>
                Subscribe
            </Button>
            <ToastContainer />
        </div>
    );
};

export default withStyles(styles)(SignUp);
