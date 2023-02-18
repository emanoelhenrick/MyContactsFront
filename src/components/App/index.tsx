import GlobalStyles from "../../assets/styles/global"
import { ThemeProvider } from "styled-components"
import _defaultTheme from "../../assets/styles/themes/default"
import { Container } from "./styles"
import { Header } from "../Header"
import { Routes } from "../../routes"
import { BrowserRouter } from "react-router-dom"

export function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={_defaultTheme}>
        <Container>
          <Header />

          <Routes />
        </Container>

        <GlobalStyles/>
      </ThemeProvider>
    </BrowserRouter>
  )
}
