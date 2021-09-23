import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/firebaseConfig';
import MainRouter from './router';
import { createBrowserHistory } from 'history';
import { getFirestore } from 'firebase/firestore';

initializeApp(firebaseConfig);

const db = getFirestore();

export const FirestoreContext = React.createContext(null);

const history = createBrowserHistory();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <FirestoreContext.Provider value={db}>
                <MainRouter history={history} />
            </FirestoreContext.Provider>
        </ThemeProvider>
    );
}

export default App;
