import React from 'react';
import SummaryStore from '../stores/SummaryStore';


class Summary extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			sum: SummaryStore.getSummary()
		}
		this.onUpdate = this.onUpdate.bind(this)
	}

	componentDidMount() {
		SummaryStore.addChangeListener(this.onUpdate)
	}

	componentWillUnmount() {
		SummaryStore.removeChangeListener(this.onUpdate)
	}

	onUpdate() {
		this.setState({
			sum: SummaryStore.getSummary()
		})
	}

	render() {
		return (
			<div>
				Total Count: {this.state.sum}
			</div>
		)
	}
}

export default Summary;

