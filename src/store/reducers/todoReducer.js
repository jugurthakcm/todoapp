const initState = {
  todos: [
    { id: 1, content: 'play football' },
    { id: 2, content: 'study react' },
  ],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log('Todo added');
      return state;

    case 'ADD_TODO_ERROR':
      console.log(action.err);
      return state;

    case 'CHECK_TODO':
      return state;

    case 'CHECK_TODO_ERROR':
      console.log(action.err);
      return state;

    case 'LOAD_CHECK_TODO':
      return state;

    case 'LOAD_CHECK_TODO_ERROR':
      console.log(action.err);
      return state;

    case 'DELETE_TODO':
      return state;

    case 'DELETE_TODO_ERROR':
      console.log(action.err);
      return state;

    default:
      return state;
  }
};

export default todoReducer;
