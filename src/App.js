import React from 'react';
import Container from '@material-ui/core/Container';
import AddTodo from './components/AddTodo';
import TodoContainer from './components/TodoContainer';

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import Button from '@material-ui/core/Button';

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
          <div className='login-container'>
            <Button variant='outlined' color='primary' className='login-btn'>
              Login using Google
            </Button>
          </div>
          <h1>Todo App</h1>
          <AddTodo />
          <TodoContainer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
