/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  return <div role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20 %</div>
};

export default ProgressBar;
