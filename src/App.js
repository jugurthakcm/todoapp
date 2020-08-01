import React from 'react';
import Container from '@material-ui/core/Container';
import AddTodo from './components/AddTodo';

function App() {
  return (
    <div className='App'>
      <Container maxWidth='sm'>
        <AddTodo />
      </Container>
    </div>
  );
}

export default App;
