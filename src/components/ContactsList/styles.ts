import styled from "styled-components"

export const ContactsContainer = styled.div`
  margin-top: 32px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  strong {
    font-size: 24px;
    color: #222;
  }

  a {
    color: ${props => props.theme.colors.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${props => props.theme.colors.primary.main};
    padding: 8px 16px;
    border-radius: 4px;

    &:hover {
      background: ${props => props.theme.colors.primary.main};
      color: #fff;
      transition: all 150ms;
    }
  }
`
