import React from 'react';
import Container from '@material-ui/core/Container';

import Navbar from './components/layout/Navbar';
import Main from './components/layout/Main';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976D2',
    },
  },
});

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <Container maxWidth='md'>
          <Navbar />
          <Main />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
