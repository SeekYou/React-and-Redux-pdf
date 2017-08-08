import React from 'react';
import PropTypes from 'prop-types';


const buttonStyle = {
	margin: '10px'
}

class CounterSummary extends React.Component {
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
		this.updateCount(true);
	}

	onClickDecrement() {
		this.updateCount(false);
	}

	updateCount(isIncrement) {
		const previousValue = this.state.count;
		const newValue = isIncrement ? previousValue + 1 : previousValue - 1;
		this.setState({
			count: newValue
		})
		this.props.onUpdate(newValue, previousValue)
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

CounterSummary.propTypes = {
	caption: PropTypes.string.isRequired,
	initValue: PropTypes.number,
	onUpdate: PropTypes.func
}

CounterSummary.defaultProps = {
	initValue: 0,
	onUpdate: f => f
}


export default CounterSummary;
