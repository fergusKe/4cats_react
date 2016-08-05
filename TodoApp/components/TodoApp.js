const {
	TodoHeaderContainer,
	CreateTodoFieldContainer,
	TodoListContainer
} = window.App;

class TodoApp extends React.Component {
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