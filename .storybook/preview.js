import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";
import { MINIMAL_VIEWPORTS } from "@storybook/addon-viewport";

const customViewports = {
  pushpressFigma: {
    name: "pushpressFigma",
    styles: {
      width: "400px",
      height: "1140px",
    },
  },
};

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: { ...MINIMAL_VIEWPORTS, ...customViewports }, // newViewports would be an ViewportMap. (see below for examples)
    defaultViewport: "pushpressFigma",
  },
};
