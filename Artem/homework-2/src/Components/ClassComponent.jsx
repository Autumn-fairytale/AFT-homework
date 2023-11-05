import React from 'react';
import {Button, Stack, Typography} from "@mui/material";

export class ClassComponentCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    }
    this.increaseCounter = this.increaseCounter.bind(this);
    this.decreaseCounter = this.decreaseCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }

  increaseCounter() {
    this.setState(previousValue => ({
      counter: previousValue.counter + 1,
    }));
  }

  decreaseCounter() {
    this.setState(previousValue => ({
      counter: previousValue.counter <= 0 ? 0 : previousValue.counter - 1,
    }));
  }

  resetCounter() {
    this.setState(() => ({
      counter: 0
    }));
  }

  render() {
    return (
      <>
        <Stack spacing={2} alignItems='center'>
          <Typography variant='h6'>Class Component Counter</Typography>
          <Stack spacing={2} direction='row'>
            <Button variant='text' color='primary' size='small' onClick={this.increaseCounter}>
              <Typography variant='h3'>+</Typography>
            </Button>
            <Typography variant='h1'>{this.state.counter}</Typography>
            <Button variant='text' color='primary' size="small" onClick={this.decreaseCounter}>
              <Typography variant='h3'>-</Typography>
            </Button>
          </Stack>
          <Button variant='outlined' color='primary' size="small" onClick={this.resetCounter}>Reset</Button>
        </Stack>
      </>
    );
  }
}