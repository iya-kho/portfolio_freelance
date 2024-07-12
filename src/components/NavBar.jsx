import styled from 'styled-components';
import { Link } from 'react-scroll';
import { PropTypes } from 'prop-types';

import { devices, otherVariables } from '../utils/style/variables';

const StyledLink = styled(Link)`
  text-transform: uppercase;
  margin-right: 30px;
  cursor: pointer;
`;

const StyledNav = styled.nav`
  @media ${devices.tabletL} {
    background-color: #fff;
    color: #000;
    position: fixed;
    top: ${otherVariables.headerHeight};
    left: 0;
    height: calc(100vh - ${otherVariables.headerHeight});
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 20vh;
    align-items: center;
    transform: scaleX(0);
    transform-origin: 100% 50%;
    transition: ${otherVariables.headerTransition};
    & a {
      margin-bottom: 30px;
    }

    &.menuOpen {
      transform: scaleX(1);
    }
  }
`;

export function NavBar({ className }) {
  return (
    <StyledNav className={className}>
      <StyledLink activeClass="active" to="home" spy={true} smooth={true} duration={500}>
        home
      </StyledLink>
      <StyledLink
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        about
      </StyledLink>
      <StyledLink
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        projects
      </StyledLink>
      <StyledLink
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        contact
      </StyledLink>
    </StyledNav>
  );
}

NavBar.propTypes = {
  className: PropTypes.string
};
