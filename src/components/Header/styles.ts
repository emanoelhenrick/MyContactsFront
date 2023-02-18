import styled from "styled-components"

export const HeaderContainer = styled.header`
  margin-top: 74px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 48px;

  h1 {
    color: #222;

    span {
      color: ${props => props.theme.colors.primary.main}
    }
  }

`

