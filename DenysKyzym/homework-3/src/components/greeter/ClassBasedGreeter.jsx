import React from 'react';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '90vh',
  },
  input: {
    padding: '10px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ccc',
  },
  button: {
    padding: '10px 15px',
    borderRadius: '5px',
    backgroundColor: '#007BFF',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
  },
};

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
