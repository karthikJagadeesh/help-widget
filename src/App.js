import React from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import HelpWidget from './components/HelpWidget';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#299dd4'
    },
    secondary: {
      main: '#49789E'
    }
  },

  typography: {
    fontFamily: 'Segoe UI, sans-serif',
    fontSize: 12,
    useNextVariants: true
  },

  overrides: {
    MuiTab: {
      root: {
        textTransform: 'none',
        color: '#929394'
      },
      textColorInherit: {
        color: '#929394'
      }
    },

    MuiInputBase: {
      disabled: {
        background: '#D4D5D6'
      }
    },

    MuiOutlinedInput: {
      adornedStart: {
        paddingLeft: 0
      },
      focused: {
        boxShadow: '0px 0px 8px 0px #94BBCE'
      }
    },

    MuiButton: {
      root: {
        textTransform: 'none'
      }
    }
  }
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div>
        <HelpWidget />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
