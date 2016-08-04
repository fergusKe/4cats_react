const { TodoItem } = window.App;

class TodoList extends React.Component {
  render() {
    const { 
      todos,
      onUpdateTodo,
      onToggleTodo,
      onDeleteTodo
    } = this.props;
    const element = todos.map((todo) => (
      <li key={todo.id}>
        <TodoItem 
          title={todo.title} 
          completed={todo.completed} 
          onUpdate={(title) => onUpdateTodo && onUpdateTodo(todo.id, title)}
          onToggle={(completed) => onToggleTodo && onToggleTodo(todo.id, completed)}
          onDelete={() => onDeleteTodo && onDeleteTodo(todo.id)}
          />
      </li>
    ));
    return (
      <ul>
        {element}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
  onUpdateTodo: React.PropTypes.func,
  onToggleTodo: React.PropTypes.func,
  onDeleteTodo: React.PropTypes.func
}

window.App.TodoList = TodoList;