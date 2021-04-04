import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  'small': {
    'size': 14,
    'strokeWidth': 1,
    'padding': 4,
    'paddingLeft': 24,
  },
  'large': {
    'size': 18,
    'strokeWidth': 2,
    'padding': 7,
    'paddingLeft': 36,
  }
}

const IconInput = ({
  label,
  icon,
  width = 150,
  size,
  placeholder,
}) => {
  const styles = STYLES[size];
  if (!styles) {
    throw new Error(`Unknown size passed to IconInput: ${size}`);
  }
  return (
    <Wrapper width={width}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <InputElem type="text" placeholder={placeholder} style={{
        '--size': styles.size + 'px',
        '--strokeWidth': styles.strokeWidth + 'px',
        '--padding': styles.padding + 'px',
        '--paddingLeft': styles.paddingLeft + 'px',
      }}/>
      <IconWrapper style={{
        '--size': styles.size + 'px'
      }}>
        <Icon id={icon} strokeWidth={styles.strokeWidth} size={styles.size}></Icon>
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: ${p => p.width + "px"};  
`

const InputElem = styled.input`
  border: none;
  border-bottom: var(--strokeWidth) solid ${COLORS.black};
  padding: var(--padding);
  padding-left: var(--paddingLeft);
  width: 100%;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  font-size: var(--size);
  color: ${COLORS.gray700};
  font-weight: 700;

  &:hover {
    color: ${COLORS.black};
  }

  &:focus {
    outline-offset: 2px;
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: var(--size);
  height: var(--size);
  margin: auto;
  color: ${COLORS.gray500};
  pointer-events: none;

  ${InputElem}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
