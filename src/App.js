import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import ExampleComponent from './common/ExampleComponent';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { firebaseConfig } from './firebase/firebaseConfig';

const app = initializeApp(firebaseConfig);
getAnalytics(app);

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <ExampleComponent />
        </MuiThemeProvider>
    );
}

export default App;
