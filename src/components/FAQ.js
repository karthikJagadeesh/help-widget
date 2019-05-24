import React from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fade from '@material-ui/core/Fade';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import AccountBox from '@material-ui/icons/AccountBox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/EmailOutlined';
import Folder from '@material-ui/icons/Folder';
import PersonPinCircle from '@material-ui/icons/PersonPinCircle';
import Search from '@material-ui/icons/Search';

import { withStyles } from '@material-ui/core/styles';

import { colors } from './utils';

const helpOptionsStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 200,
    alignItems: 'center',
    padding: '20px 2px',
    marginRight: 30,
    border: '1px solid rgba(0,0,0,0)',
    '&:hover': {
      background: '#FAFAFA',
      cursor: 'pointer',
      border: '1px solid rgba(0,0,0,0.2)',
      color: colors.blue
    }
  },

  icon: {
    fontSize: 32
  }
};

function _HelpOptions({ classes, Icon, label }) {
  return (
    <div className={classes.container}>
      <Icon className={classes.icon} />
      {label}
    </div>
  );
}

const HelpOptions = withStyles(helpOptionsStyles)(_HelpOptions);

const preferEmailCardStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 50px',
    color: colors.darkGrey
  },

  outerWrapper: {
    display: 'flex',
    alignItems: 'center'
  },

  preferEmail: {
    fontSize: 22
  },

  respond: {
    fontSize: 12
  },

  email: {
    fontSize: 16,
    marginRight: 4
  },
  button: {
    margin: '20px 0px',
    width: 128,
    background: '#f5f5f5',
    color: colors.darkGrey
  }
};

function _PreferMailCard({ classes, handleClick }) {
  const buttonProps = {
    variant: 'contained',
    className: classes.button,
    onClick: handleClick
  };

  return (
    <div className={classes.outerWrapper}>
      <div className={classes.wrapper}>
        <span className={classes.preferEmail}>Prefer email instead?</span>
        <Button {...buttonProps}>
          <Email className={classes.email} />
          Write to us
        </Button>
        <span className={classes.respond}>
          We are super quick in responding to your queries.
        </span>
      </div>
    </div>
  );
}

const PreferMailCard = withStyles(preferEmailCardStyles)(_PreferMailCard);

const FAQStyles = themes => ({
  card: {
    background: colors.whiteVariant,
    display: 'flex'
  },

  searchContainer: {
    width: 720,
    color: themes.palette.secondary.main
  },

  textField: {
    width: '94%',
    background: colors.white,
    borderRadius: 20,
    '& fieldset': {
      borderRadius: 20
    },
    '& div:first-child': {
      borderRadius: 20
    }
  },

  textFieldInput: {
    padding: 8
  },

  container: {
    display: 'flex',
    marginTop: 14
  },

  verticalDivider: {
    width: 1,
    background: 'rgba(0, 0, 0, 0.1)'
  },

  inputAdornment: {
    '& svg': {
      color: colors.grey,
      fontSize: 18
    }
  }
});

function _FAQ({ classes, handleClick }) {
  const textFieldProps = {
    variant: 'outlined',
    margin: 'normal',
    placeholder: 'What can we help you with? Start typing your question...',
    inputProps: {
      className: classes.textFieldInput
    },
    className: classes.textField,
    InputProps: {
      startAdornment: (
        <InputAdornment className={classes.inputAdornment} position="end">
          <Search />
        </InputAdornment>
      )
    }
  };

  return (
    <Fade in>
      <Card className={classes.card}>
        <PreferMailCard handleClick={handleClick} />
        <div className={classes.verticalDivider} />
        <CardContent className={classes.searchContainer}>
          <TextField {...textFieldProps} />
          <div className={classes.container}>
            <HelpOptions label="Sharing Openings" Icon={Folder} />
            <HelpOptions label="Managing Openings" Icon={PersonPinCircle} />
            <HelpOptions label="Managing Candidates" Icon={AccountBox} />
          </div>
          <div className={classes.container}>
            <HelpOptions label="Account Management" Icon={AccountCircle} />
            <HelpOptions label="Sourcing Candidates" Icon={Folder} />
            <HelpOptions label="Reporting" Icon={Folder} />
          </div>
        </CardContent>
      </Card>
    </Fade>
  );
}

const FAQ = withStyles(FAQStyles)(_FAQ);

export default FAQ;
