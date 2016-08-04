const { InputField } = window.App;

class TodoItem extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { editable: false };
		this.toggleEditable = this.toggleEditable.bind(this);
	}
	toggleEditable() {
		this.setState({ editable: !this.state.editable });
	}
  render() {
  	return this.state.editable ?
  		this.renderEditModel() :
  		this.renderViewModel();
  }
  renderViewModel() {
  	const {
  		title,
  		completed,
  		onDelete,
      onToggle
  	} = this.props;
    return (
      <div>
        <input 
          type="checkbox" 
          checked={completed} 
          onChange={() => onToggle && onToggle(!completed)}
        />
        <span onDoubleClick={this.toggleEditable}>{title}</span>
        <button onClick={() => onDelete && onDelete()}>x</button>
      </div>
    );
  }
  renderEditModel() {
    const { title, onUpdate } = this.props;
  	return (
  		<InputField 
  			autoFocus
  			placeholder="編輯待辦項目"
  			value={title}
  			onBlur={this.toggleEditable}
  			onKeyDown={
  				(e) => {
  					if (e.keyCode === 27) {
  						e.preventDefault();
  						this.toggleEditable();
  					}
  				}
  			}
        onSubmitEditing={(content) => {
          onUpdate && onUpdate(content);
          this.toggleEditable();
        }}
  		/>
  	)
  }
}

TodoItem.propTypes = {
	title: React.PropTypes.string.isRequired,
	completed: React.PropTypes.bool.isRequired,
  onUpdate: React.PropTypes.func,
	onDelete: React.PropTypes.func,
  onToggle: React.PropTypes.func
}

window.App.TodoItem = TodoItem;