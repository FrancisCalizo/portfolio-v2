import styled from "styled-components"

import { device } from "../../utils/breakpoints"

export const SkillsIconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 2rem;
  justify-content: space-between;

  @media (${device.maxMd}) {
    justify-content: center;
  }
`
export const Skill = styled.div`
  &:hover {
    transform: scale(1.05);
    transition: transform 0.2s ease-in-out;
  }

  & div:nth-child(2) {
    display: flex;
    justify-content: center;

    & > span {
      color: ${props => props.theme.bgAlt};
      text-align: center;
      background: ${props => props.theme.textDark};
      padding: 1px 5px;
      border: 1px solid ${props => props.theme.textDark};
      border-radius: 5px;
      box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
      transform: translateY(-20px);
      transition: all 300ms ease-in-out;
    }
  }

  & > div:nth-child(1) {
    background: ${props => props.theme.bgAlt};
    margin: 0.5rem;
    padding: 1.15rem 1.2rem 0.75rem;
    border-radius: 100px;
    border: 1px solid ${props => props.theme.textLight};
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3), 0 2px 6px 0 rgba(0, 0, 0, 0.19);
    transition: all 300ms ease-in-out;
  }
`
