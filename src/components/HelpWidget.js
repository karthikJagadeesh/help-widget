import React, { useState, useEffect } from 'react';
import cx from 'classnames';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Fade from '@material-ui/core/Fade';
import InputAdornment from '@material-ui/core/InputAdornment';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';

import AccountBox from '@material-ui/icons/AccountBox';
import AccountCircle from '@material-ui/icons/AccountCircle';
import AttachFile from '@material-ui/icons/AttachFile';
import ChatBubble from '@material-ui/icons/ChatBubble';
import Check from '@material-ui/icons/Check';
import Close from '@material-ui/icons/Close';
import Email from '@material-ui/icons/EmailOutlined';
import Folder from '@material-ui/icons/Folder';
import Person from '@material-ui/icons/Person';
import PersonPinCircle from '@material-ui/icons/PersonPinCircle';
import Search from '@material-ui/icons/Search';
import Send from '@material-ui/icons/Send';

import { withStyles } from '@material-ui/core/styles';

const chatStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0px 0px 10px'
  },

  chat: {
    background: '#EDEEEF',
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    color: '#545454'
  },

  icon: {
    color: '#929394'
  }
};

function _Chat({ classes }) {
  return (
    <div className={classes.container}>
      <Person className={classes.icon} />
      <div className={classes.chat}>Hi there! How can I help you today?</div>
    </div>
  );
}

const Chat = withStyles(chatStyles)(_Chat);

const chatboxStyles = {
  container: {
    height: 196,
    background: '#ffffff',
    border: '1px solid rgba(0,0,0,0.05)',
    borderRadius: 4
  }
};

function _ChatBox({ classes }) {
  const [showChat, setChatStatus] = useState(false);

  useEffect(() => {
    let isMounted = true;
    setTimeout(() => {
      if (isMounted) {
        setChatStatus(true);
      }
    }, 600);

    return () => {
      isMounted = false;
    };
  });

  return <div className={classes.container}>{showChat && <Chat />}</div>;
}

const ChatBox = withStyles(chatboxStyles)(_ChatBox);

const liveChatStyles = {
  card: {
    width: 660,
    background: '#EDEEEF'
  },

  textFieldInputProps: {
    background: '#ffffff',
    fontSize: 14
  },
  inputAdornment: {
    marginRight: 14,
    '&:hover': {
      cursor: 'pointer'
    },
    color: '#929394'
  }
};

function _LiveChat({ classes }) {
  return (
    <Fade in>
      <Card className={classes.card}>
        <CardContent>
          <ChatBox />
          <div>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              placeholder="Type here to chat with us!"
              InputProps={{
                endAdornment: (
                  <InputAdornment
                    className={classes.inputAdornment}
                    position="start"
                  >
                    <Send />
                  </InputAdornment>
                ),
                className: classes.textFieldInputProps
              }}
            />
          </div>
        </CardContent>
      </Card>
    </Fade>
  );
}

const LiveChat = withStyles(liveChatStyles)(_LiveChat);

const helpOptionsStyles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: 240,
    alignItems: 'center',
    padding: '14px 6px'
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

const FAQStyles = themes => ({
  card: {
    background: '#EDEEEF',
    display: 'flex'
  },

  searchContainer: {
    width: 820,
    color: themes.palette.secondary.main
  },

  textField: {
    background: '#ffffff',
    borderRadius: 20,
    '& fieldset': {
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

  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 50px',
    color: '#545454'
  },
  outerWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  preferEmail: {
    fontSize: 18
  },
  respond: {
    fontSize: 12
  },

  button: {
    margin: '20px 0px',
    width: 128,
    background: '#f5f5f5',
    color: '#545454'
  },

  inputAdornment: {
    '& svg': {
      color: '#929394',
      fontSize: 18
    }
  },

  email: {
    fontSize: 16,
    marginRight: 4
  }
});

function _FAQ({ classes, handleClick }) {
  return (
    <Fade in>
      <Card className={classes.card}>
        <div className={classes.outerWrapper}>
          <div className={classes.wrapper}>
            <span className={classes.preferEmail}>Prefer email instead?</span>
            <Button
              variant="contained"
              className={classes.button}
              onClick={handleClick}
            >
              <Email className={classes.email} />
              Write to us
            </Button>
            <span className={classes.respond}>
              We are super quick in responding to your queries.
            </span>
          </div>
        </div>
        <div className={classes.verticalDivider} />
        <div className={classes.searchContainer}>
          <CardContent>
            <TextField
              fullWidth
              variant="outlined"
              margin="normal"
              placeholder="What can we help you with? Start typing your question..."
              inputProps={{
                className: classes.textFieldInput
              }}
              className={classes.textField}
              InputProps={{
                startAdornment: (
                  <InputAdornment
                    className={classes.inputAdornment}
                    position="end"
                  >
                    <Search />
                  </InputAdornment>
                )
              }}
            />
            <div className={classes.container}>
              <HelpOptions label="Sharing Openings" Icon={Folder} />
              <HelpOptions label="Managing Openings" Icon={PersonPinCircle} />
              <HelpOptions label="Managing Candidattes" Icon={AccountBox} />
            </div>
            <div className={classes.container}>
              <HelpOptions label="Account Management" Icon={AccountCircle} />
              <HelpOptions label="Sourcing Candidates" Icon={Folder} />
              <HelpOptions label="Reporting" Icon={Folder} />
            </div>
          </CardContent>
        </div>
      </Card>
    </Fade>
  );
}

const FAQ = withStyles(FAQStyles)(_FAQ);

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
    <Fade in>
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
                <InputAdornment
                  className={classes.inputAdornment}
                  position="end"
                >
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
    </Fade>
  );
}

const MailUs = withStyles(mailUsStyles)(_MailUs);

const labelStyles = {
  mailUsLabel: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10
  },

  email: {
    fontSize: 18,
    marginRight: 5
  }
};

function _Label({ classes, Icon, text }) {
  return (
    <div className={classes.mailUsLabel}>
      <Icon className={classes.email} />
      <span>{text}</span>
    </div>
  );
}

const Label = withStyles(labelStyles)(_Label);

const helpWidgetStyles = {
  tabsIndicator: {
    display: 'none'
  },

  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },

  rootTab: {
    margin: '0 -14px',
    '&:before': {
      content: "' '",
      position: 'absolute',
      top: 0,
      right: 13,
      bottom: 0,
      left: 13,
      zIndex: '-1',
      borderBottom: 'none',
      borderRadius: '6px 6px 0 0',
      background: '#D4D5D6',
      transform: 'perspective(5px) rotateX(2deg)',
      transformOrigin: 'bottom'
    }
  },
  rootTabSelected: {
    '&:before': {
      background: '#EDEEEF'
    }
  },
  closeTab: {
    minWidth: 0,
    width: 60,
    background: '#545556',
    color: '#ffffff',
    pointerEvents: 'none',
    top: 12
  },
  icon: {
    fontSize: 18
  }
};

function _HelpWidget({ classes }) {
  const [value, setValue] = useState(0);

  const handleChange = (_, value) => {
    setValue(value);
  };

  const handleClick = () => {
    setValue(2);
  };

  const liveChat = <Label Icon={ChatBubble} text="Live Chat" />;
  const FAQLabel = <Label Icon={Search} text="FAQ" />;
  const mailUsLabel = <Label Icon={Email} text="Mail Us" />;

  const tabs = [liveChat, FAQLabel, mailUsLabel];

  return (
    <div className={classes.container}>
      <Tabs
        classes={{ indicator: classes.tabsIndicator }}
        value={value}
        onChange={handleChange}
      >
        {tabs.map((tab, index) => {
          const root =
            value === index
              ? cx(classes.rootTab, classes.rootTabSelected)
              : classes.rootTab;
          return <Tab classes={{ root }} label={tab} key={index} />;
        })}
        <Tab
          className={classes.closeTab}
          label={<Close className={classes.icon} />}
        />
      </Tabs>
      {value === 0 && <LiveChat />}
      {value === 1 && <FAQ handleClick={handleClick} />}
      {value === 2 && <MailUs />}
    </div>
  );
}

const HelpWidget = withStyles(helpWidgetStyles)(_HelpWidget);

export default HelpWidget;
