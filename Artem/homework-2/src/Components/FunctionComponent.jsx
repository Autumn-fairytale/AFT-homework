import React, {useState} from 'react';
import {Button, Stack, Typography} from "@mui/material";

export function FunctionComponentCounter() {
  const [counter, updateCounter] = useState(0);

  function increaseCounter() {
    updateCounter(counter + 1);
  }

  function decreaseCounter() {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  }

  function resetCounter() {
    updateCounter(0);
  }

  return (
    <>
      <Stack spacing={2} alignItems='center'>
        <Typography variant='h6'>Functional Component Counter</Typography>
        <Stack spacing={2} direction='row'>
          <Button variant='text' color='primary' size='small' onClick={increaseCounter}>
            <Typography variant='h3'>+</Typography>
          </Button>
          <Typography variant='h1'>{counter}</Typography>
          <Button variant='text' color='primary' size="small" onClick={decreaseCounter}>
            <Typography variant='h3'>-</Typography>
          </Button>
        </Stack>
        <Button variant='outlined' color='primary' size="small" onClick={resetCounter}>Reset</Button>
      </Stack>
    </>
  );
}
