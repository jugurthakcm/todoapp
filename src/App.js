import React from 'react';
import Container from '@material-ui/core/Container';
import AddTodo from './components/AddTodo';
import TodoContainer from './components/TodoContainer';

function App() {
  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <h1>Todo App</h1>
        <TodoContainer />
        <AddTodo />
      </Container>
    </div>
  );
}

export default App;
