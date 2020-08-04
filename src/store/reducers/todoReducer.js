import firebase from 'firebase/app';

const initState = {
  todos: [
    { id: 1, content: 'play football' },
    { id: 2, content: 'study react' },
  ],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      firebase
        .firestore()
        .collection('todos')
        .add({ content: action.content, timeStamps: new Date() });
      return state;

    case 'DELETE_TODO':
      let newTodos = state.todos.filter((todo) => todo.id !== action.id);
      return {
        ...state,
        todos: newTodos,
      };

    default:
      return state;
  }
};

export default todoReducer;
