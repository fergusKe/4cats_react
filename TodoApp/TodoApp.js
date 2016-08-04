const {
	TodoHeader,
	TodoList,
	InputField
} = window.App;

class TodoApp extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			todos: []
		}
	}

	// componentDidMount在元件第一次 render 後，會被呼叫
	componentDidMount() {
	  fetch('./todos.json')                         // 1. 使用 fetch 回傳的是 promise 物件
	    .then((response) => response.json())        // 2. 解析 response 資料，將它轉成 js 物件
	    .then((todos) => this.setState({ todos })); // 3. 更新元件 state
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
					onSubmitEditing={(title) => this.setState({
						todos: _createTodo(todos, title)
					})}
				/>
				<TodoList 
				todos={todos} 
				onUpdateTodo={(id, title) => this.setState({
					todos: _onUpdateTodo(todos, id, title)
				})}
				onToggleTodo={(id, completed) => this.setState({
					todos: _toggleTodo(todos, id, completed)
				})}
				onDeleteTodo={(id) => this.setState({
					todos: _deleteTodo(todos, id)
				})}
				/>
			</div>
		)
	}
}

window.App.TodoApp = TodoApp;