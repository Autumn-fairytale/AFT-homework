import React from 'react';
import { styles } from './greeterStyles';

export class ClassBasedGreeter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      isSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ isSubmitted: true });
  }

  render() {
    if (this.state.isSubmitted) {
      return <h2 style={styles.container}>Hi, {this.state.name}!</h2>;
    }

    return (
      <div style={styles.container}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Who are you?
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              style={styles.input}
              placeholder="class based"
            />
          </label>
          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    );
  }
}
