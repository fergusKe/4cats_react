const {
  ActionTypes,
  AppDispatcher
} = window.App;

// 1. 為了讓程式能正常運作，你可以先保留 Flux 的 Action，
//    並且把 Redux 的 Action 獨立出來，再後面的關卡再覆蓋掉；
//    當然你也可以將原本 Flux 的 TodoActions 覆蓋成 Redux 的
window.App.TodoActions = {
  loadTodos() {
    fetch('./todos.json')
      .then((response) => response.json())
      .then((todos) => AppDispatcher.dispatch({
        type: ActionTypes.LOAD_TODOS_SUCCESS,
        todos
      }));
  },
  createTodo(title) {
    AppDispatcher.dispatch({
      type: ActionTypes.CREATE_TODO,
      title
    });
  },
  updateTodo(id, title) {
    AppDispatcher.dispatch({
      type: ActionTypes.UPDATE_TODO,
      id,
      title
    });
  },
  toggleTodo(id, completed) {
    AppDispatcher.dispatch({
      type: ActionTypes.TOGGLE_TODO,
      id,
      completed
    });
  },
  deleteTodo(id) {
    AppDispatcher.dispatch({
      type: ActionTypes.DELETE_TODO,
      id
    });
  }
};

window.App.TodoReduxActions = {
  createTodo(title) {
    // 2. 與 Flux 的 Action Creator 不同的是直接回傳 action 物件，不會將它遞給 Dispatcher
    return {
      type: ActionTypes.CREATE_TODO,
      title
    };
  },
  loadTodos() {
    // 3. 當我們遇到非同步的行為時，因為無法立即回傳 action 物件，我們可以回傳其他形式的 action，
    //    如這裡是回傳 thunk 函數，thunk 是將表達式封裝起來為了延遲調用的函數；
    //    Redux 提供一種方法叫 applyMiddleware，讓你的 Store 接收到這類型的 action 可以做額外的處理，
    //    如這裡是當 Store 接到 thunk 時才調用，並把 dispatch 函數遞進去。
    //    PS. 我們將會在下一章介紹如何使用 middleware 處理這類型的 action。
    return (dispatch) => {
      fetch('./todos.json')
        .then((response) => response.json())
        .then((todos) => dispatch({
          type: ActionTypes.LOAD_TODOS_SUCCESS,
          todos
        }));
    };
  },
  updateTodo(id, title) {
    return {
      type: ActionTypes.UPDATE_TODO,
      id,
      title
    };
  },
  toggleTodo(id, completed) {
    return {
      type: ActionTypes.TOGGLE_TODO,
      id,
      completed
    };
  },
  deleteTodo(id) {
    return {
      type: ActionTypes.DELETE_TODO,
      id
    };
  }
}
