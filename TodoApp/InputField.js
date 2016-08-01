class InputField extends React.Component {
	render() {
		const { placeholder } = this.props;
		return <input {...this.props} type="text" />;
	}
}

window.App.InputField = InputField;