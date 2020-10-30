import React from 'react';

import { createGlobalStyle } from 'styled-components';

import Header from './elements/Header';
import Home from './Home';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
`

const App = () => {
    return (
        <React.Fragment>
            <Header />
            <Home />
            <GlobalStyle />
        </React.Fragment>
    )
}

export default App;
