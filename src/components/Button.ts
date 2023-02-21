import styled, { css } from "styled-components"

interface PropsDanger {
  danger: boolean
}

export default styled.button<PropsDanger>`
  height: 52px;
  border: none;
  padding: 0 16px;
  background: ${props => props.theme.colors.primary.main};
  font-size: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  font-weight: bold;
  color: #fff;
  border-radius: 4px;
  transition: background 100ms;

  &:hover {
    background: ${props => props.theme.colors.primary.light};
  }

  &:active {
    background: ${props => props.theme.colors.primary.dark};
  }

  &[disabled] {
    background: #ccc;
    cursor: not-allowed;
  }

  ${({ theme, danger }) => danger && css`
    background: ${theme.colors.danger.main};

      &:hover {
      background: ${theme.colors.danger.light};
    }

    &:active {
      background: ${theme.colors.danger.dark};
    }
  `}
`
