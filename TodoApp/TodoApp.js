const {
	TodoHeader,
	TodoList,
	InputField
} = window.App;

class TodoApp extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			todos: [
				{
					id: 0,
					title: "Item 1",
					completed: false
				},
				{
					id: 1,
					title: "Item 2",
					completed: false
				},
				{
					id: 2,
					title: "Item 3",
					completed: false
				}
			]
		}
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

const _createTodo = (todos, title) => {
	todos.push({
		id: todos[todos.length - 1].id + 1,
		title,
		completed: false
	});
	return todos;
};
const _onUpdateTodo = (todos, id, title) => {
	const target = todos.find((todo) => todo.id === id);
	if (target) target.title =title;
	return todos;
}
const _toggleTodo = (todos, id, completed) => {
	const target = todos.find((todo) => todo.id === id);
	if (target) target.completed = completed;
	return todos;
};
const _deleteTodo = (todos, id) => {
	const idx = todos.findIndex((todo) => todo.id === id);
	if (idx !== -1) todos.splice(idx, 1);
	return todos;
};

window.App.TodoApp = TodoApp;