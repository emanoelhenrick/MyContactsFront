import GlobalStyles from "../../assets/styles/global"
import { ThemeProvider } from "styled-components"
import _defaultTheme from "../../assets/styles/themes/default"
import { Container } from "./styles"
import { Header } from "../Header"
import { ContactsList } from "../ContactsList"

export function App() {

  return (
    <ThemeProvider theme={_defaultTheme}>
      <Container>
        <Header />

        <ContactsList />
      </Container>

      <GlobalStyles/>
    </ThemeProvider>
  )
}
