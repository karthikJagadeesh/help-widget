import React from 'react';

import {
  createMuiTheme,
  MuiThemeProvider,
  withStyles
} from '@material-ui/core/styles';

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
      adornedEnd: {
        paddingRight: 0
      },
      focused: {
        boxShadow: '0px 0px 8px 0px #94BBCE'
      }
    },

    MuiButton: {
      root: {
        textTransform: 'none'
      }
    },

    MuiCard: {
      root: {
        boxShadow: '0px 0px 8px 4px rgba(0,0,0,0.3)'
      }
    }
  }
});

const appStyles = {
  container: {
    position: 'fixed',
    bottom: 0,
    right: 0
  }
};

function _App({ classes }) {
  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.container}>
        <HelpWidget />
      </div>
    </MuiThemeProvider>
  );
}

export default withStyles(appStyles)(_App);
