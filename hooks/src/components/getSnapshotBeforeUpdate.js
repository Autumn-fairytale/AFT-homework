import React, { Component } from 'react';

class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      heightBeforeUpdate: null,
    };
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Отримання висоти елементу перед оновленням
    const container = this.myRef.current;
    return container ? container.offsetHeight : null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      // Використання збереженого значення після оновлення
      console.log('Height before update:', snapshot);
      this.setState({ heightBeforeUpdate: snapshot });
    }
  }

  render() {
    const { heightBeforeUpdate } = this.state;

    return (
      <div ref={this.myRef}>
        <h2>Example Component</h2>
        <p>Content goes here</p>
        <p>
          Height before update:{' '}
          {heightBeforeUpdate !== null ? heightBeforeUpdate : 'N/A'}
        </p>
      </div>
    );
  }
}

export default ExampleComponent;
