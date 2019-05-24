import React, { useState } from 'react';
import cx from 'classnames';

import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';

import ChatBubble from '@material-ui/icons/ChatBubble';
import Close from '@material-ui/icons/Close';
import Email from '@material-ui/icons/EmailOutlined';
import Search from '@material-ui/icons/Search';

import { withStyles } from '@material-ui/core/styles';

import FAQ from './FAQ';
import MailUs from './MailUs';
import LiveChat from './LiveChat';

import { colors } from './utils';

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
    alignItems: 'flex-end',
    position: 'fixed',
    bottom: 0,
    right: 0
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
      background: colors.lightGrey,
      transform: 'perspective(5px) rotateX(2deg)',
      transformOrigin: 'bottom'
    }
  },
  rootTabSelected: {
    '&:before': {
      background: colors.whiteVariant
    }
  },

  closeTab: {
    minWidth: 0,
    width: 60,
    background: colors.darkGrey,
    color: colors.white,
    pointerEvents: 'none',
    top: 12
  },
  icon: {
    fontSize: 18
  }
};

function _HelpWidget({ classes }) {
  const [value, setValue] = useState(2);

  const handleChange = (_, value) => {
    setValue(value);
  };

  const handleClick = () => {
    setValue(2);
  };

  const liveChat = <Label Icon={ChatBubble} text="Live Chat" />;
  const FAQLabel = <Label Icon={Search} text="FAQ" />;
  const mailUsLabel = <Label Icon={Email} text="Mail Us" />;

  const tabs = [liveChat, FAQLabel, mailUsLabel].map((tab, index) => {
    const root =
      value === index
        ? cx(classes.rootTab, classes.rootTabSelected)
        : classes.rootTab;
    return <Tab classes={{ root }} label={tab} key={index} />;
  });

  const tabsProps = {
    classes: { indicator: classes.tabsIndicator },
    value,
    onChange: handleChange
  };

  return (
    <div className={classes.container}>
      <Tabs {...tabsProps}>
        {tabs}
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
