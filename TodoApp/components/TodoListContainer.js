const { Container } = FluxUtils;
const { TodoStore, TodoActions, TodoList } = window.App;

class TodoListContainer extends React.Component {
	static getStores() {
    return [ TodoStore ]; // 1. 向 Store 註冊及註銷監聽器
  }

  static calculateState(prevState) {
    return {
      todos: TodoStore.getState(), // 2. 同步 Store 中的狀態至元件的 state 中
    };
  }

  render() {
    return (
      <TodoList
        todos={this.state.todos}
        onUpdateTodo={TodoActions.updateTodo}
        onToggleTodo={TodoActions.toggleTodo}
        onDeleteTodo={TodoActions.deleteTodo}
      />
    );
  }
}

// 3. 使用 create() 建立 Container component
window.App.TodoListContainer = Container.create(TodoListContainer);