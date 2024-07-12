import styled from 'styled-components';
import { PropTypes } from 'prop-types';

import { devices, colors, otherVariables } from '../utils/style/variables';

const StyledBurger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  height: 25px;

  @media ${devices.tabletL} {
    display: flex;
  }

  &:before,
  &:after,
  & span {
    content: '';
    display: block;
    width: 35px;
    height: ${otherVariables.burgerLineHeight}px;
    background: #fff;
  }

  &.indexTop:before,
  &.indexTop:after,
  &.indexTop span {
    background: #000;
  }

  &.menuOpen {
    justify-content: center;
  }

  &.menuOpen span {
    display: none;
  }

  &.menuOpen:before,
  &.menuOpen:after {
    background: linear-gradient(270deg, ${colors.secondaryDark}, ${colors.secondary});
  }

  &.menuOpen:before {
    transform: translateY(${otherVariables.burgerLineHeight / 2}px) rotate(45deg);
  }

  &.menuOpen:after {
    transform: translateY(-${otherVariables.burgerLineHeight / 2}px) rotate(-45deg);
  }
`;

export function Burger({ menuOpen, setMenuOpen, className }) {
  return (
    <StyledBurger
      className={className}
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    >
      <span></span>
    </StyledBurger>
  );
}

Burger.propTypes = {
  menuOpen: PropTypes.bool,
  setMenuOpen: PropTypes.func,
  className: PropTypes.string,
};
