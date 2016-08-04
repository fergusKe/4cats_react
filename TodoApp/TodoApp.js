const {
	// 1. 引入 TodoActions 和 TodoStore
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
			// 3. 初始資料改為從 TodoStore 中拿取
			todos: TodoStore.all()
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

  // 7. 所有渲染的資料從 state 中取，這份 state 與 TodoStore 是同步的；
  //    所有改變資料的操作都改為調用 TodoActions
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
					onSubmitEditing={TodoActions.createTodo}
				/>
				<TodoList 
				todos={todos} 
				onUpdateTodo={TodoActions.updateTodo}
				onToggleTodo={TodoActions.toggleTodo}
				onDeleteTodo={TodoActions.deleteTodo}
				/>
			</div>
		)
	}
}

window.App.TodoApp = TodoApp;