import { SheetsRegistry } from 'jss';
import { createMuiTheme, createGenerateClassName } from 'material-ui/styles';

const theme = createMuiTheme(/*{
  palette: {
    primary: {
      light: purple[300],
      main: purple[500],
      dark: purple[700],
    },
    secondary: {
      light: green[300],
      main: green[500],
      dark: green[700],
    },
  },
}*/);

const createPageContext = () => ({
  theme,
  // This is needed in order to deduplicate the injection of CSS in the page.
  sheetsManager: new Map(),
  // This is needed in order to inject the critical CSS.
  sheetsRegistry: new SheetsRegistry(),
  // The standard class name generator.
  generateClassName: createGenerateClassName(),
});

const getPageContext = () => {
  // Make sure to create a new context for every server-side request so that data
  // isn't shared between connections (which would be bad).
  if (!process.browser) {
    return createPageContext();
  }

  /* eslint-disable no-underscore-dangle */
  // Reuse context on the client-side.
  if (global.__INIT_MATERIAL_UI__ == null) {
    global.__INIT_MATERIAL_UI__ = createPageContext();
  }

  return global.__INIT_MATERIAL_UI__;
  /* eslint-enable no-underscore-dangle */
};

export default getPageContext;
