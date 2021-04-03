import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);
  console.log(displayedValue);
  return (
    <Wrapper>
      {displayedValue}
      <CustomIcon id="chevron-down"></CustomIcon>
      <SelectWrapper value={value} onChange={onChange}>
        {children}
      </SelectWrapper>
    </Wrapper>
  );
};

const CustomIcon = styled(Icon)`
  position: absolute;
  top: 8px;
  right: 12px;
  color: ${COLORS.gray700};
`;

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  padding: 12px 60px 12px 16px;
  border: none;
  border-radius: 8px;

  font-size: 16px;
  font-family: 'Roboto', sans-serif;
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};

  &:hover {
    color: ${COLORS.black};
  }
  &:hover ${CustomIcon} {
    color: ${COLORS.black}; 
  }

`;

const SelectWrapper = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  appearance: none;
  font-size: 0;
`;

export default Select;
