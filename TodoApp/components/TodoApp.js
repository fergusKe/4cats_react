const {
	TodoActions,
  TodoStore,
	TodoHeader,
	TodoList,
	InputField
} = window.App;

class TodoApp extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			todos: TodoStore.getAll()
		}
	}
	
	// componentDidMount在元件第一次 render 後，會被呼叫
	componentDidMount() {
		// 4. 向 Server 請求資料改為調用 TodoActions
	  TodoActions.loadTodos();

	  // 5. 向 TodoStore 註冊監聽器：
    //    當監聽器被觸發，便讓 state 與 TodoStore 資料同步
	  this._removeChangeListener = TodoStore.addChangeListener(
      () => this.setState({ todos: TodoStore.getAll() })
    );
	}

	componentWillUnmount() {
    // 6. 向 TodoStore 註銷監聽器
    this._removeChangeListener();
  }

	render() {
		const { todos } = this.state;
		return (
			<div>
				<TodoHeader
					title="我的待辦清單"
					username="Jason"
					todoCount={todos.filter((todo) => !todo.completed).length}
				/>
				<InputField 
					placeholder="新增待辦事項" 
					onSubmitEditing={ TodoActions.createTodo}
				/>
				<TodoList 
				todos={todos} 
				onUpdateTodo={ TodoActions.onUpdateTodo }
				onToggleTodo={ TodoActions.toggleTodo }
				onDeleteTodo={ TodoActions.deleteTodo}
				/>
			</div>
		)
	}
}

window.App.TodoApp = TodoApp;