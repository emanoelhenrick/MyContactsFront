import "styled-components";
import _defaultTheme from "../assets/styles/themes/default";

type ThemeType = typeof _defaultTheme

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends ThemeType {}
}
