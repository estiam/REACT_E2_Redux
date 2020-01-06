export const INCREMENT_COUNTER = 'INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';

export const incremementCounter = counter => {
  return {
    type: INCREMENT_COUNTER,
    counter,
  }
}

export const decrementCounter = counter => {
  return {
    type: DECREMENT_COUNTER,
    counter,
  }
}