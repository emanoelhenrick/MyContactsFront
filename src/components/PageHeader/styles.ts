import styled from "styled-components"

export const Container = styled.header`
  margin-bottom: 24px;
  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    width: 80px;
    color: ${props => props.theme.colors.primary.main};
    span {
      font-weight: bold;
    }
    svg {
      margin-right: 8px;
    }
  }

  h1 {
    font-size: 24px;
  }
`
