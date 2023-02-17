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

export const ListContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  header {
    button {
      background: transparent;
      border: none;
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${props => props.theme.colors.primary.main};

      span {
        font-size: 16px;
        font-weight: bold;

        }
      }
  }
`

export const Card = styled.div`
  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  padding: 16px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${props => props.theme.colors.primary.lighter};
        color: ${props => props.theme.colors.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${props => props.theme.colors.gray[200]};
    }
  }

  .actions {
    display: flex;
    flex-direction: column;
    align-items: center;

    button {
      background: transparent;
      border: none;
      line-height: 0;
    }


  }

`

