import React from 'react';
import { connect } from 'react-redux';

const ResetButton = ({ dispatch }) => {
  return (
    <ResetButton label="Reset" onClick={dispatch}/>
  );
};

connect()(ResetButton);

export default ResetButton;