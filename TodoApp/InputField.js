class InputField extends React.Component {
	render() {
		const { placeholder } = this.props;
		// return <input type="text" placeholder={placeholder} />;
		return <input {...this.props} type="text" />;
	}
}

window.App.InputField = InputField;