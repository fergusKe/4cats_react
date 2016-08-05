const { TodoActions, InputField } = window.App;

class CreateTodoFieldContainer extends React.Component {
  render() {
    return (
      <InputField
        placeholder="新增待辦清單"
        onSubmitEditing={TodoActions.createTodo} // 1. 調用 TodoActions
      />
    );
  }
}

window.App.CreateTodoFieldContainer = CreateTodoFieldContainer;