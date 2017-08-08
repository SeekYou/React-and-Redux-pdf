import React from 'react';
import PropTypes from 'prop-types';


const buttonStyle = {
	margin: '10px'
}

class Counter extends React.Component {
	constructor(props) {
		console.log('enter constructor: ' + props.caption);
		super(props);
		this.state = {
			count: props.initValue
		}

		this.onClickIncrement = this.onClickIncrement.bind(this);
		this.onClickDecrement = this.onClickDecrement.bind(this);

	}

	// getInitialState() {
	// 	console.log('getInitialState');
	// }

	// getDefaultProps() {
	// 	console.log('getDefaultProps');
	// }

	componentWillMount() {
		console.log('componentWillMount ' + this.props.caption);
	}

	componentDidMount() {
		console.log('componentDidMount ' + this.props.caption);
	}

	onClickIncrement() {
		this.setState({
			count: this.state.count + 1
		})
	}

	onClickDecrement() {
		this.setState({
			count: this.state.count - 1
		})
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (nextProps.caption !== this.props.caption) || (nextState.count !== this.state.count)
	}

	componentWillReceiveProps(nextProps) {
		console.log('componentWillReceiveProps '+ this.props.caption);
	}

	componentWillUpdate(nextProps, nextState) {
		console.log('componentWillUpdate ' + this.props.caption);
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('componentDidUpdate ' + this.props.caption);
	}

	render() {
		console.log('enter render ' + this.props.caption);
		const {caption} = this.props;
		return (
			<div>
				<button style={buttonStyle} onClick={this.onClickIncrement}>+</button>
				<button style={buttonStyle} onClick={this.onClickDecrement}>-</button>
				<span>{caption} count: {this.state.count}</span>
			</div>
		)
	}
}

Counter.propTypes = {
	caption: PropTypes.string.isRequired,
	initValue: PropTypes.number
}

Counter.defaultProps = {
	initValue: 0
}


export default Counter;
