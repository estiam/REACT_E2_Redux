import React from 'react'
import { incremementCounter } from '../Redux/counter/actions';
import { connect } from 'react-redux';

const Incrementer = ({ increment }) => {
  return (
    <button onClick={increment}>INCREMENT</button>
  );
}

const mapDispatchToProps = dispatch => ({
  increment: () => {
    dispatch(incremementCounter());
  }
});

export default connect(null, mapDispatchToProps)(Incrementer)