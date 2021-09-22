import React from 'react';
import './App.css';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebase/firebaseConfig';
import MainRouter from './router';
import { createBrowserHistory } from 'history';

initializeApp(firebaseConfig);

const history = createBrowserHistory();

function App() {
    return (
        <ThemeProvider theme={theme}>
            <MainRouter history={history} />
        </ThemeProvider>
    );
}

export default App;
