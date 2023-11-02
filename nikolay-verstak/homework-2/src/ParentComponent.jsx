import React from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
		};
	}

	incrementCount = () => {
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}));
	};

	render() {
		return (
			<div>
				<h1>Parent Component</h1>
				<p>Count: {this.state.count}</p>
				<button onClick={this.incrementCount}>Increment Count</button>
				<ChildComponent message="Hello from Parent" />
			</div>
		);
	}
}

export default ParentComponent;
