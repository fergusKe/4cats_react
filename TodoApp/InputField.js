class InputField extends React.Component {
	constructor(props, context) {
		super(props, context);
		this.state = { value: props.value || '' };
		this.handleChange = this.handleChange.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}
	handleChange(e) {
		this.setState({ value: e.target.value });
	}
	handleKeyDown(e) {
		const { onSubmitEditing, onKeyDown } = this.props;
		const { value } = this.state;
		switch (e.keyCode) {
			case 13:
				if (value.trim()) {
					onSubmitEditing && onSubmitEditing(value);
				}
				e.target.value = '';
				this.setState({ value: '' });
				break;
		}
		onKeyDown && onKeyDown(e);
	}
	render() {
		const { placeholder } = this.props;
		return <input 
							{...this.props} 
							type="text" 
							value={this.state.value}
							onChange={this.handleChange}
							onKeyDown={this.handleKeyDown}
						/>;
	}
}

window.App.InputField = InputField;