import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import Routes from '../src/routes';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

import 'bootstrap/dist/css/bootstrap.min.css';


const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
          <GlobalStyles />
          <Routes/>
        </ThemeProvider>
    );
}

export default App;
