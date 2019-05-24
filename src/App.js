import React from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import HelpWidget from './components/HelpWidget';
import { colors } from './components/utils';

const overrides = {
  MuiTab: {
    root: {
      textTransform: 'none',
      color: colors.grey,
      minWidth: 160
    },
    textColorInherit: {
      color: colors.grey,
      opacity: 'unset'
    }
  },

  MuiInputBase: {
    root: {
      '&$disabled': {
        background: colors.lightGrey
      }
    }
  },

  MuiOutlinedInput: {
    adornedStart: {
      paddingLeft: 0
    },
    adornedEnd: {
      paddingRight: 0
    },
    root: {
      '&$focused': {
        boxShadow: `0px 0px 8px 0px ${colors.lightBlue}`
      }
    }
  },

  MuiButton: {
    root: {
      textTransform: 'none'
    }
  },

  MuiCard: {
    root: {
      boxShadow: '0px 9px 8px 4px rgba(0,0,0,0.3)'
    }
  },

  MuiTouchRipple: {
    root: {
      display: 'none'
    }
  }
};
const typography = {
  fontFamily: 'Segoe UI, sans-serif',
  fontSize: 12,
  useNextVariants: true
};
const palette = {
  primary: {
    main: colors.primary
  },
  secondary: {
    main: colors.secondary
  }
};

const theme = createMuiTheme({
  palette,
  typography,
  overrides
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <HelpWidget />
    </MuiThemeProvider>
  );
}

export default App;
