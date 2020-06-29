import styled from "styled-components"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { device } from "../../utils/breakpoints"

export const ToggleTheme = styled(FontAwesomeIcon)`
  color: #fcc21b;
  border-radius: 4px;
  padding: 5px 7.5px;
  margin: 0 2px;
  background: ${props => props.theme.bg};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.11);
  cursor: pointer;
`

export const TopbarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: ${props => props.theme.textDark};
  background: ${props =>
    props.isNavColored ? props.theme.bgAlt : "transparent"};
  border-bottom: ${props =>
    props.isNavColored ? `3px solid ${props.theme.bright}` : "none"};
  transition: all 500ms ease-in-out;

  > div {
    display: flex;
    justify-content: space-between;
    padding: ${props => (props.isNavColored ? "0.5rem 2rem" : "1rem 2rem")};
    transition: padding 500ms ease-in-out;

    > div:nth-child(2) {
      font-weight: 600;
    }
  }

  a {
    text-transform: uppercase;
    font-size: 1.2rem;
    color: ${props => props.theme.textDark};
    text-decoration: none;
    transition: all 300ms ease-in-out;
  }

  @media (${device.minMd}) {
    display: none;
  }

  @media (${device.maxSm}) {
    > div {
      > div:nth-child(2) {
        display: none;
      }
    }
  }
`

export const BurgerLink = styled(Link)`
  border-bottom: 2px solid transparent;
  color: ${props =>
    props.current === props.to ? props.theme.textDark : props.theme.textLight};
  font-weight: ${props => (props.current === props.to ? 600 : 400)};
  border-bottom: ${props =>
    props.current === props.to ? `2px solid ${props.theme.textDark}` : `none`};
  transition: all 300ms ease-in-out;

  &:hover {
    color: ${props => props.theme.textLight};
    transition: color 0.2s ease-in-out;
  }
`

export const Fa = styled(FontAwesomeIcon)`
  color: ${props => props.theme.textDark};
  transition: all 300ms ease-in-out;
`

export const BurgerLinkA = styled(BurgerLink)`
  color: ${props => props.theme.textLight};
  font-weight: 400;
  border: none;
  transition: all 300ms ease-in-out;
`
