import styled, { css } from "styled-components"

export default styled.input`
  width: 100%;
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  height: 52px;
  border-radius: 4px;
  outline: none;
  padding: 0 16px;
  font-size: 16px;
  border: 2px solid transparent;
  transition: border 150ms;

  &:focus {
    border-color: ${props => props.theme.colors.primary.main};
  }

  ${({ theme, error }) => error && css`
    color: ${props => props.theme.colors.danger.main};
    border-color: ${props => props.theme.colors.danger.main} !important;
  `}

`
