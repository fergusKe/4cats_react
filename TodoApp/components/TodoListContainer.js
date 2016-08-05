const { TodoStore, TodoActions, TodoList } = window.App;

class TodoListContainer extends React.Component {
	constructor(props, context) { 
  	/* 1. 向 TodoStore 取得初始資料，並同步到 state 中 */ 
  	super(props, context);
  	this.state = {
  		todos: TodoStore.getAll()
  	};
  }

  componentDidMount() { 
  	/* 2. 向 TodoStore 註冊監聽器 */ 
  	this._removeChangeListener = TodoStore.addChangeListener(
      () => this.setState({ todos: TodoStore.getAll() })
    );
	}

  componentWillUnmount() { 
  	/* 3. 向 TodoStore 註銷監聽器 */
  	this._removeChangeListener(); 
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

window.App.TodoListContainer = TodoListContainer;