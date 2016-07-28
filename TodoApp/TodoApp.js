const {
	TodoHeader,
	TodoList,
	InputField
} = window.App;
class TodoApp extends React.Component {
	render() {
		return (
			<div>
				<TodoHeader />
				<InputField />
				<TodoList />
			</div>
		)
	}
}

window.App.TodoApp = TodoApp;