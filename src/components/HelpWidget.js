import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';

import AttachFile from '@material-ui/icons/AttachFile';
import Check from '@material-ui/icons/Check';
import Email from '@material-ui/icons/EmailOutlined';

import { withStyles } from '@material-ui/core/styles';

const liveChatStyles = {
  card: {
    width: 560
  }
};

function _LiveChat({ classes }) {
  return <Card className={classes.card}>Live chat</Card>;
}

const LiveChat = withStyles(liveChatStyles)(_LiveChat);

function _FAQ({ classes }) {
  return <Card className={classes.card}>FAQ</Card>;
}

const FAQ = withStyles(liveChatStyles)(_FAQ);

const attachStyles = themes => ({
  attachFile: {
    fontSize: 18,
    transform: 'rotate(45deg)'
  },

  span: {
    color: themes.palette.primary.main,
    fontSize: 12
  },

  container: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      cursor: 'pointer'
    }
  }
});

function _Attach({ classes }) {
  return (
    <div className={classes.container}>
      <AttachFile color="primary" className={classes.attachFile} />
      <span className={classes.span}> Attach files</span>
    </div>
  );
}

const Attach = withStyles(attachStyles)(_Attach);

const successLabelStyles = {
  label: {
    background: '#DDF1D9',
    padding: '0px 10px 10px',
    marginTop: 16,
    fontSize: 12,
    color: '#367531',
    border: '1px solid rgba(0,0,0,0.05)'
  },

  check: {
    position: 'relative',
    top: 5,
    left: -2
  }
};

function _SuccessLabel({ classes }) {
  const text = (
    <span>
      Message Sent! Thanks for reaching out! Someone from our team will get back
      to you soon.
    </span>
  );
  return (
    <div className={classes.label}>
      <Check className={classes.check} />
      {text}
    </div>
  );
}

const SuccessLabel = withStyles(successLabelStyles)(_SuccessLabel);

const mailUsStyles = {
  card: {
    width: 560,
    background: '#EDEEEF'
  },
  cardContent: {
    padding: '16px 32px 0px 32px'
  },
  cardActions: {
    justifyContent: 'space-between',
    alignItems: 'start',
    padding: '12px 28px 38px 32px'
  },

  textField: {
    background: '#ffffff'
  },

  textFieldInput: {
    padding: 8
  },

  inputAdornment: {
    '& p': {
      fontWeight: 600
    }
  }
};

function _MailUs({ classes }) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isMailSent, setMailStatus] = useState(false);

  const handleSubmit = () => {
    const isValid = subject !== '' && message !== '';

    if (isValid) {
      localStorage.setItem('subject', subject);
      localStorage.setItem('message', message);
      setSubject('');
      setMessage('');
      setMailStatus(true);
    } else {
      setMailStatus(false);
    }
  };

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        {isMailSent && <SuccessLabel />}
        <TextField
          fullWidth
          variant="outlined"
          disabled
          margin="normal"
          value="support@recruiterbox.com"
          inputProps={{
            className: classes.textFieldInput
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment className={classes.inputAdornment} position="end">
                To
              </InputAdornment>
            )
          }}
        />
        <TextField
          className={classes.textField}
          fullWidth
          variant="outlined"
          margin="normal"
          placeholder="Subject"
          inputProps={{
            className: classes.textFieldInput
          }}
          value={subject}
          onChange={({ target: { value } }) => setSubject(value)}
        />
        <TextField
          className={classes.textField}
          fullWidth
          multiline
          variant="outlined"
          rows="4"
          margin="normal"
          placeholder="Message..."
          InputProps={{
            className: classes.textFieldInput
          }}
          value={message}
          onChange={({ target: { value } }) => setMessage(value)}
        />
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Attach />
        <Button color="secondary" variant="contained" onClick={handleSubmit}>
          Send Mail
        </Button>
      </CardActions>
    </Card>
  );
}

const MailUs = withStyles(mailUsStyles)(_MailUs);

const helpWidgetStyles = {
  mailUsLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  tabsIndicator: {
    display: 'none'
  },

  selectedTab: {
    background: '#EDEEEF'
  },

  email: {
    fontSize: 18,
    marginRight: 5
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  }
};

function _HelpWidget({ classes }) {
  const [value, setValue] = useState(2);

  const handleChange = (_, value) => {
    setValue(value);
  };

  const mailUsLabel = (
    <div className={classes.mailUsLabel}>
      <Email className={classes.email} />
      <span>Mail Us</span>
    </div>
  );

  return (
    <div className={classes.container}>
      <Tabs
        classes={{ indicator: classes.tabsIndicator }}
        value={value}
        onChange={handleChange}
      >
        <Tab label="Live Chat" />
        <Tab label="FAQ" />
        <Tab classes={{ selected: classes.selectedTab }} label={mailUsLabel} />
      </Tabs>
      {value === 0 && <LiveChat />}
      {value === 1 && <FAQ />}
      {value === 2 && <MailUs />}
    </div>
  );
}

const HelpWidget = withStyles(helpWidgetStyles)(_HelpWidget);

export default HelpWidget;
