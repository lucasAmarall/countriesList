const containerPadding = 20;
const mixins = {
  container: () => {
    // container width = 1024 + 40 (padding)
    return `
      max-width: 1064px;
      padding: 0 20px;
      box-sizing: border-box;
      margin: 0 auto;
  `;
  },
  tablet: (style: string) => {
    return `
      @media(max-width: 914px){
        ${style};
      }
    `;
  },
  mobile: (style: string) => {
    return `
      @media(max-width: 550px){
        ${style};
      }
    `;
  },
  headText: () => "font-size: 2rem;line-height: 2.6875rem;",
  smallText: () => "font-size: 0.75rem;line-height: 1.125rem;",
  mediumText: () => "font-size: 1rem;line-height: 1.36375rem;",
  bigText: () => "font-size: 1rem;line-height: 1.5rem;"
};

export const designSystem = {
  margin: (level = 1) => `${8 * level}px`,
  padding: (level = 1) => `${8 * level}px`,
  gutter: (level = 1) => `${8 * level}px`,
  radius: (level = 1) => `border-radius: ${2 * level}px`,
};

export const light = {
  ...designSystem,
  ...mixins,
  containerPadding,
  light: true,
  dark: false,
  text: {
    primary: "#545454;",
    placeholder: "#777777"
  },
  background: {
    primary: "hsl(0, 0%, 98%)",
    secondary: "hsl(0, 0%, 100%)",
  },
  border:{
    primary: "rgba(74, 74, 74, 0.1)",
  } ,
  shadow: {
    primary: "rgba(0, 0, 0, 0.06)"
  }
};

export const dark: typeof light = {
  ...designSystem,
  ...mixins,
  containerPadding,
  light: false,
  dark: true,
  text: {
    primary: "#ffffff",
    placeholder: "#777777"
  },
  background: {
    primary: "hsl(207, 26%, 17%)",
    secondary: "hsl(209, 23%, 22%)",
  },
  border:{
    primary: "rgba(255, 255, 255, 0.1);",
  },
  shadow: {
    primary: "rgba(0, 0, 0, 0.06)"
  }
};

//Turn the Themes properties unchangeables
export const Themes = Object.freeze({light, dark});
