import React from 'react';

class Button extends React.Component {
	constructor(props){
		super(props);

	}
	render() {
		return (
			<button onClick={this.props.choose} className={this.props.classButton ? "light-button" : "dark-button"}>
				{this.props.children}
			</button>
		);
	}
}

export { Button };
//export default Button;