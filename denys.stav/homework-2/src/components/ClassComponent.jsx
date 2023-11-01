import React, {Component} from "react";

class ClassComponent extends Component {
    render() {
        return <h1>I'm Class Component, {this.props.name}</h1>
    }
}

export default ClassComponent