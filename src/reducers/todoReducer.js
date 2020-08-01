const initState = {
  todos: [
    { id: 1, content: 'play football' },
    { id: 2, content: 'study react' },
  ],
};

const todoReducer = (state = initState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      let newTodo = { id: Math.random(), content: action.content };

      return {
        ...state,
        todos: [...state.todos, newTodo],
      };
    default:
      return state;
  }
};

export default todoReducer;
