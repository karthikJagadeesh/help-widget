import React, { useState, useRef } from 'react';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Fade from '@material-ui/core/Fade';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import AttachFile from '@material-ui/icons/AttachFile';
import Check from '@material-ui/icons/Check';

import { withStyles } from '@material-ui/core/styles';

import { colors } from './utils';

const attachStyles = themes => ({
  attachFile: {
    fontSize: 18,
    transform: 'rotate(45deg)'
  },

  span: {
    color: themes.palette.primary.main,
    fontSize: 12,
    maxWidth: 200,
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
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
  const [fileName, setFileName] = useState('Attach files');
  const ref = useRef();

  const handleChange = () => {
    const files = ref.current.files;
    if (files[0]) {
      setFileName(files[0].name);
    } else {
      setFileName('Attach files');
    }
  };

  return (
    <div className={classes.container} onClick={() => ref.current.click()}>
      <AttachFile color="primary" className={classes.attachFile} />
      <input type="file" ref={ref} onChange={handleChange} hidden />
      <span className={classes.span}>{fileName}</span>
    </div>
  );
}

const Attach = withStyles(attachStyles)(_Attach);

const successLabelStyles = {
  label: {
    background: colors.lightGreen,
    padding: '0px 10px 10px',
    marginTop: 16,
    fontSize: 12,
    color: colors.green,
    border: '1px solid rgba(0,0,0,0.05)'
  },

  span: {
    fontSize: 14
  },

  check: {
    position: 'relative',
    top: 5,
    left: -2
  }
};

function _SuccessLabel({ classes }) {
  const text = (
    <span className={classes.span}>
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
    width: 660,
    background: colors.whiteVariant
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
    background: colors.white
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

  const commonProps = {
    fullWidth: true,
    margin: 'normal',
    variant: 'outlined'
  };
  const sendToProps = {
    ...commonProps,
    disabled: true,
    value: 'support@recruiterbox.com',
    inputProps: {
      className: classes.textFieldInput
    },
    InputProps: {
      startAdornment: (
        <InputAdornment className={classes.inputAdornment} position="end">
          To
        </InputAdornment>
      )
    }
  };
  const subjectProps = {
    ...commonProps,
    className: classes.textField,
    placeholder: 'Subject',
    value: subject,
    inputProps: {
      className: classes.textFieldInput
    },
    onChange: ({ target: { value } }) => setSubject(value)
  };
  const messageProps = {
    ...commonProps,
    className: classes.textField,
    placeholder: 'Message...',
    multiline: true,
    rows: '4',
    value: message,
    InputProps: {
      className: classes.textFieldInput
    },
    onChange: ({ target: { value } }) => setMessage(value)
  };

  return (
    <Fade in>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          {isMailSent && <SuccessLabel />}
          <TextField {...sendToProps} />
          <TextField {...subjectProps} />
          <TextField {...messageProps} />
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Attach isMailSent={isMailSent} />
          <Button color="secondary" variant="contained" onClick={handleSubmit}>
            Send Mail
          </Button>
        </CardActions>
      </Card>
    </Fade>
  );
}

const MailUs = withStyles(mailUsStyles)(_MailUs);

export default MailUs;
