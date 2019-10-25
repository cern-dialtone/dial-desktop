import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Item, Icon, Button } from 'semantic-ui-react';

import { formatUserOrganization } from 'calls/utils/formatters';
import styles from './Contact.module.css';

class Contact extends Component {
  static propTypes = {
    contact: PropTypes.shape({
      displayName: PropTypes.string.isRequired
    }).isRequired,
    selectContact: PropTypes.func.isRequired
  };

  selectContactAction = () => {
    const { contact, selectContact, findUserById } = this.props;
    selectContact(contact);
    findUserById(contact.personId);
  };

  render() {
    const { contact, findUserById } = this.props;
    return (
      <Item className="" onClick={this.selectContactAction}>
        <div className={`ui tiny image ${styles.avatar}`}>
          <Icon
            name="user circle"
            size="big"
            color="blue"
            className="ui avatar"
          />
        </div>
        <Item.Content>
          <Item.Header className="">
            {contact ? contact.displayName : ''}
          </Item.Header>
          <Item.Extra>
            {contact ? formatUserOrganization(contact) : ''}
          </Item.Extra>
        </Item.Content>
        <Button
          type="a"
          onClick={e => {
            e.stopPropagation();
          }}
          href={
            'https://mattermost.web.cern.ch/_redirect/messages/@' +
            contact.username
          }
          target="_blank"
          rel="noopener noreferrer"
          className="ui icon button OnCallDetails__HangupButton"
          style={{ margin: '1%', backgroundColor: 'transparent' }}
        >
          <i className="chat icon" />
        </Button>
      </Item>
    );
  }
}

export default Contact;
