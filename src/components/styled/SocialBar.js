import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  width: 180px;
`

export const SocialLink = styled(FontAwesomeIcon)`
  color: ${props => props.theme.textDark};
  transition: all 300ms ease-in-out;

  &:hover {
    color: ${props => props.theme.bright};
    transition: color 0.2s ease-in-out;
  }
`
