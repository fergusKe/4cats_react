const {
  TodoStore,
  TodoHeader
} = window.App;

class TodoHeaderContainer extends React.Component {
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
      <TodoHeader
        title="我的待辦清單"
        username="Jason"
        todoCount={this.state.todos.filter((todo) => !todo.completed).length}
      />
    );
  }
}

window.App.TodoHeaderContainer = TodoHeaderContainer;