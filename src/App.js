import React from 'react';
import Container from '@material-ui/core/Container';
import AddTodo from './components/todos/AddTodo';
import TodoContainer from './components/todos/TodoContainer';
import GoogleSign from './components/auth/GoogleSign';

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
          <GoogleSign />
          <h1>Todo App</h1>
          <AddTodo />
          <TodoContainer />
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
