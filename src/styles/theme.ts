import "styled-components";

const theme = {
  black: "#000",
  white: "#fff",
  oxfordBlue: "#032A44",
  ateneoBlue: "#0E4061",
  ateneoBlue33: "#0e406133",
  ateneoBlue80: "#0E406180",
  background: "#EFEFEF",
  brightYellow: "#F6AF22",
  whats: "#5BBB2E",
  richBlack: "#001523",
  richBlack06: "#00111c0f",
  richBlack50: "#00152350",
  richBlack80: "#00152380",
  orangeYellow80: "#ffcc6780",
  eerieBlack40: "#1e1e1e40",
  black10: "rgba(0, 0, 0, 0.1)",
  black20: "rgba(0, 0, 0, 0.2)",
  lightSilver50: '#D9D9D980',
  brightGray: '#EBEBEB',
  green80: '#5bbb2e80'
};

// get the color name in https://www.color-name.com

export default theme;

export type ColorFamily = keyof typeof theme;
type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme { }
}
