import GlobalStyles from "./assets/styles/global";
import { ThemeProvider } from "styled-components";
import _defaultTheme from "./assets/styles/themes/default";

export function App() {

  return (
    <ThemeProvider theme={_defaultTheme}>
      <h1>teste</h1>
      <GlobalStyles/>
    </ThemeProvider>
  );
}
