import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { device } from "../../utils/breakpoints"
import { Link } from "gatsby"

export const SidebarContainer = styled.div`
  background: ${props => props.theme.bgAlt};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  z-index: 100;
  width: 280px;
  padding: 2rem 2rem;
  box-sizing: border-box;
  overflow-y: auto;
  transition: all 300ms ease-in-out;

  a {
    text-decoration: none;
  }

  & div:nth-child(1) {
    & span {
      color: ${props => props.theme.textDark};
      font-size: 1.6rem;
      font-weight: 600;
      transition: all 300ms ease-in-out;
    }

    & p {
      color: ${props => props.theme.textLight};
      margin: 1rem 0 0;
      line-height: 1.4;
      font-size: 15px;
      transition: all 300ms ease-in-out;
    }
  }

  & div:nth-child(3) {
    color: ${props => props.theme.textLight};
    font-size: 15px;
    transition: all 300ms ease-in-out;

    & a {
      color: ${props => props.theme.bright};
      font-weight: 500;
      text-decoration: underline;
      transition: all 300ms ease-in-out;
    }

    & a:hover {
      color: ${props => props.theme.hoverBright};
      transition: color 0.2s ease-in-out;
    }

    & > div {
      margin-top: 1.4rem;
    }
  }

  @media ${device.maxMd} {
    display: none;
  }
`
export const SidebarLinks = styled.div`
  display: flex;
  flex-direction: column;
  list-style-type: none;

  li {
    font-size: 1rem;
    text-transform: uppercase;
    margin: 0.7rem 0;
    font-weight: 500;
    letter-spacing: 1.4px;

    & a {
      padding: 0.3rem;
      border-radius: 2px;
      background: linear-gradient(
        to right,
        ${props => props.theme.bright} 50%,
        transparent 50%
      );
      background-size: 202% 100%;
      background-position: right bottom;
      transition: all 0.3s ease-out;
    }

    & a:hover {
      background-position: left bottom;
      color: ${props => props.theme.bgAlt};
    }
  }
`

export const GLink = styled(Link)`
  color: ${props =>
    props.current === props.to ? props.theme.textDark : props.theme.textLight};
  font-weight: ${props => (props.current === props.to ? 600 : 500)};
  border-bottom: ${props =>
    props.current === props.to ? `2px solid ${props.theme.textDark}` : `none`};
  transition: all 300ms ease-in-out;
`

export const ALink = styled(GLink)`
  color: ${props => props.theme.textLight};
  font-weight: 500;
  border: none;
  transition: all 300ms ease-in-out;
`

export const Fa = styled(FontAwesomeIcon)`
  color: ${props => props.theme.textLight};
  transition: all 300ms ease-in-out;
  max-width: 16px;
  max-height: 16px;
`

export const ToggleTheme = styled(FontAwesomeIcon)`
  color: #fcc21b;
  border-radius: 4px;
  padding: 5px 7.5px;
  margin: 0 2px;
  background: ${props => props.theme.bg};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2), 0 1px 3px 0 rgba(0, 0, 0, 0.11);
  cursor: pointer;
  max-width: 36px;
  max-height: 31px;
`

export const Created = styled.p`
  margin: 0;
  transform: translateY(25px);
  font-size: 12px;
  color: ${props => props.theme.textLight};
  transition: all 300ms ease-in-out;

  span {
    color: ${props => props.theme.textDark};
    font-weight: 500;
    transition: all 300ms ease-in-out;
  }

  a:hover {
    color: ${props => props.theme.bright};
    transition: all 300ms ease-in-out;
  }
`
