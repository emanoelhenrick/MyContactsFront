import styled from "styled-components"

export default styled.button`
  width: 100%;
  height: 52px;
  border: none;
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
`
