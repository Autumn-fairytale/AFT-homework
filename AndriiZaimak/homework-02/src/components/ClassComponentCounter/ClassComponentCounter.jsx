import { Component } from 'react';

import styles from './ClassComponentCounter.module.css';

export default class ClassComponentCounter extends Component {
  state = {
    count: 0,
  };

  incrementHandler = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrementHandler = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count } = this.state;

    return (
      <section className={styles.section}>
        <h2>Class component counter: {count}</h2>
        <div className={styles.buttons}>
          <button type="button" onClick={this.incrementHandler}>
            Increment count
          </button>
          <button type="button" onClick={this.decrementHandler}>
            Decrement
          </button>
        </div>
      </section>
    );
  }
}
