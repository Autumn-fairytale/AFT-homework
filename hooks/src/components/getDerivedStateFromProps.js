import React, { Component } from 'react';

class SyncStateWithProps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFilter: props.initialFilter,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.selectedFilter !== prevState.selectedFilter) {
      // Оновлюємо стан на основі нових властивостей (props)
      return { selectedFilter: nextProps.selectedFilter };
    }
    return null; // Не потрібно оновлювати стан
  }

  render() {
    const { selectedFilter } = this.state;

    return (
      <div>
        <h2>Component with Synced State and Props</h2>
        <p>Selected Filter: {selectedFilter}</p>
      </div>
    );
  }
}

export default SyncStateWithProps;
