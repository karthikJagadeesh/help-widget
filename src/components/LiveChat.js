import React, { useState, useEffect } from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Fade from '@material-ui/core/Fade';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';

import Person from '@material-ui/icons/Person';
import Send from '@material-ui/icons/Send';

import { withStyles } from '@material-ui/core/styles';

import { colors } from './utils';

const chatStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    margin: '20px 0px 0px 10px'
  },

  chat: {
    background: colors.whiteVariant,
    borderRadius: 10,
    padding: 10,
    marginLeft: 5,
    color: colors.darkGrey
  },

  icon: {
    color: colors.grey
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
    background: colors.white,
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
    }, 500);

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
    background: colors.whiteVariant
  },

  textFieldInputProps: {
    background: colors.white,
    fontSize: 14
  },
  inputAdornment: {
    marginRight: 14,
    '&:hover': {
      cursor: 'pointer'
    },
    color: colors.grey
  }
};

function _LiveChat({ classes }) {
  const textFieldProps = {
    fullWidth: true,
    variant: 'outlined',
    margin: 'normal',
    placeholder: 'Type here to chat with us!',
    InputProps: {
      endAdornment: (
        <InputAdornment className={classes.inputAdornment} position="start">
          <Send />
        </InputAdornment>
      ),
      className: classes.textFieldInputProps
    }
  };

  return (
    <Fade in>
      <Card className={classes.card}>
        <CardContent>
          <ChatBox />
          <TextField {...textFieldProps} />
        </CardContent>
      </Card>
    </Fade>
  );
}

const LiveChat = withStyles(liveChatStyles)(_LiveChat);

export default LiveChat;
