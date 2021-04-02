/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--bottom": 4 + "px",
    "--height": 8 + "px",
    "--border-radius": 4 + "px",
    "--padding": 0 + "px"
  },
  medium: {
    "--bottom": 4 + "px",
    "--height": 12 + "px",
    "--border-radius": 4 + "px",
    "--padding": 0 + "px"
  },
  large: {
    "--bottom": -4 + "px",
    "--height": 24 + "px",
    "--border-radius": 8 + "px",
    "--padding": 4 + "px"
  }
}

const Wrapper = styled.div`
  position: relative;
`

const Indicator = styled.div`
  font-family: 'Roboto', sans-serif;
`;

const OuterBar = styled.div`
  position: absolute;
  left: 115px;
  bottom: var(--bottom);
  width: 370px;
  height: var(--height);
  border-radius: var(--border-radius);
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
`;

const InnerBar = styled.div`
  width: ${p => p.value + "%"};
  height: 100%;
  background-color: ${COLORS.primary};
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  border-top-right-radius: ${p => (p.value - 98) * 2 + "px"};
  border-bottom-right-radius: ${p => (p.value - 98) * 2 + "px"};
`;

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return ( 
    <Wrapper>
      <Indicator role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100">{value}%</Indicator>
      <OuterBar style={styles}>
        <InnerBar value={value}></InnerBar>
      </OuterBar>
    </Wrapper>
  )
};

export default ProgressBar;
