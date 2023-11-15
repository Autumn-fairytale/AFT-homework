import React, { Component } from 'react';

class UserComponent extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // Блокування оновлення для заборонених користувачів
    return !nextProps.isForbiddenUser;
  }

  render() {
    const { username } = this.props;

    return (
      <div>
        <h2>User Component</h2>
        <p>Username: {username}</p>
      </div>
    );
  }
}

export default UserComponent;
