const {
	TodoActions,
	TodoHeaderContainer,
	CreateTodoFieldContainer,
	TodoListContainer
} = window.App;

class TodoApp extends React.Component {
	componentDidMount() {
		TodoActions.loadTodos();
	}
	
	render() {
		return (
			<div>
				<TodoHeaderContainer />
				<CreateTodoFieldContainer />
				<TodoListContainer />
			</div>
		)
	}
}

window.App.TodoApp = TodoApp;