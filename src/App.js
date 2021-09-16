import React from 'react';
import './App.css';
import { MuiThemeProvider } from '@material-ui/core';
import theme from './theme';
import ExampleComponent from './common/ExampleComponent';

function App() {
    return (
        <MuiThemeProvider theme={theme}>
            <ExampleComponent />
        </MuiThemeProvider>
    );
}

export default App;
