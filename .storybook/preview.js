/** @type { import('@storybook/react').Preview } */

import { GlobalStyles } from "../src/styles/globals";
import { withThemeFromJSXProvider } from '@storybook/addon-styling';

const preview = {
  decorators: [
    withThemeFromJSXProvider({
      GlobalStyles // Adds your GlobalStyle component to all stories
    })
  ],
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
};

export default preview;
