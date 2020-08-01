const initState = {
  todos: [
    { id: 1, content: 'play football' },
    { id: 2, content: 'study react' },
  ],
};

const todoReducer = (state = initState, action) => {
  return state;
};

export default todoReducer;
