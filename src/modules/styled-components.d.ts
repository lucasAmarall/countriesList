import { ITheme } from "@interfaces/ITheme.interface";


type ThemeInterface = ITheme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeInterface {}
}