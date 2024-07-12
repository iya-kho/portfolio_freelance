import { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import styled from 'styled-components';

import { colors, otherVariables } from '../utils/style/variables';
import { NavBar, Burger } from '../components';
import { Logo } from '../components/Logo';

const HeaderWrap = styled.header`
  background-color: ${colors.primary};
  height: ${otherVariables.headerHeight};
  position: fixed;
  z-index: 2;
  top: 0;
  width: 100vw;
  &:after,
  &:before {
    content: '';
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transform: scaleX(0);
    transition: ${otherVariables.headerTransition};
  }

  &:after {
    transform-origin: 100% 50%;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px 0px;
  }

  &:before {
    transform-origin: 0% 50%;
  }

  &.scrolled:after,
  &.menuOpen:before {
    transform: scaleX(1);
  }

  & .indexTop,
  & .indexTop:before,
  & .indexTop:after {
    z-index: 3;
  }

  &.scrolled .indexTop,
  &.menuOpen .indexTop {
    color: #000;
  }

  .logo {
    cursor: pointer;

    & svg {
      height: calc(${otherVariables.headerHeight} * 0.7);
      width: calc(${otherVariables.headerHeight} * 0.7);
    }

    &.scrolled path,
    &.menuOpen path {
      fill: #000;
    }
  }
`;

const HeaderInner = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const scrollToTop = () => {
  scroll.scrollToTop({ duration: 0 });
};

export function Header() {
  const [scrollTop, setScrollTop] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
      setMenuOpen(false);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let headerWrapClass = '';
  let navBarClass = '';
  let burgerClass = '';
  let logoClass = '';

  if (scrollTop === 0 && menuOpen === false) {
    headerWrapClass = '';
    navBarClass = '';
    burgerClass = '';
    logoClass - '';
  }

  if (scrollTop !== 0 && menuOpen === false) {
    headerWrapClass = 'scrolled';
    navBarClass = 'indexTop';
    burgerClass = 'indexTop';
    logoClass = 'indexTop scrolled';
  }

  if (scrollTop === 0 && menuOpen === true) {
    headerWrapClass = 'menuOpen';
    navBarClass = 'menuOpen indexTop';
    burgerClass = 'menuOpen indexTop';
    logoClass = 'menuOpen indexTop';
  }

  if (scrollTop !== 0 && menuOpen === true) {
    headerWrapClass = 'menuOpen';
    navBarClass = 'menuOpen indexTop';
    burgerClass = 'menuOpen indexTop';
    logoClass = 'menuOpen indexTop';
  }

  return (
    <HeaderWrap className={headerWrapClass}>
      <HeaderInner className="wrapLarge">
        <Logo
          clickHandler={scrollToTop}
          className={logoClass}></Logo>
        <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} className={burgerClass} />
        <NavBar className={navBarClass} />
      </HeaderInner>
    </HeaderWrap>
  );
}
