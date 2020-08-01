const addTodo = (content) => {
  return {
    type: 'ADD_TODO',
    content,
  };
};

export default addTodo;
