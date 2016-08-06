const { Container } = FluxUtils;
const {
  TodoStore,
  TodoHeader
} = window.App;

class TodoHeaderContainer extends React.Component {
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
      <TodoHeader
        title="我的待辦清單"
        username="Jason"
        todoCount={this.state.todos.filter((todo) => !todo.completed).length}
      />
    );
  }
}

// 3. 使用 create() 建立 Container component
window.App.TodoHeaderContainer = Container.create(TodoHeaderContainer);