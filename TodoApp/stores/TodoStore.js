const { ReduceStore } = FluxUtils;
const {
  ActionTypes,
  AppDispatcher
} = window.App;

const _createTodo = (todos, title) => {
	// 每次新增項目，就回傳新陣列
	return [
		...todos,
		{
			id: todos[todos.length - 1].id + 1,
			title,
			completed: false
		}
	];
};
const _updateTodo = (todos, id, title) => {
	const idx = todos.findIndex((todo) => todo.id === id);
  if (idx === -1) return todos;

  // 每次修改項目，就回傳新陣列
  const newTodos = [ ...todos ];
  newTodos[idx] = {
    ...todos[idx],
    title
  };
  return newTodos;
}
const _toggleTodo = (todos, id, completed) => {
	const idx = todos.findIndex((todo) => todo.id === id);
  if (idx === -1) return todos;

  // 每次切換狀態，就回傳新陣列
  const newTodos = [ ...todos ];
  newTodos[idx] = {
    ...todos[idx],
    completed
  };
  return newTodos;
};
const _deleteTodo = (todos, id) => {
  // 每次刪除項目，就回傳新陣列
	const newTodos = [ ...todos ];
	const idx = newTodos.findIndex((todo) => todo.id === id);
	if (idx !== -1) newTodos.splice(idx, 1);
	return newTodos;
};

class TodoStore extends ReduceStore {
  // 1. 回傳初始狀態
  getInitialState() {
    return [];
  }

  // 2. 實作 reduce()，該函數提供你舊狀態及 action，你必須回傳新狀態回去
  reduce(state, action) {
    switch (action.type) {
      case ActionTypes.LOAD_TODOS_SUCCESS:
        return action.todos;
      case ActionTypes.CREATE_TODO:
        return _createTodo(state, action.title);
      case ActionTypes.UPDATE_TODO:
        return _updateTodo(state, action.id, action.title);
      case ActionTypes.TOGGLE_TODO:
        return _toggleTodo(state, action.id, action.completed);
      case ActionTypes.DELETE_TODO:
        return _deleteTodo(state, action.id);
      default:
        return state;
    }
  }
}

// 3. 建立 TodoStore 實例，必須將 Dispatcher 遞進去
window.App.TodoStore = new TodoStore(AppDispatcher);