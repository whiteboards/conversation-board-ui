import * as React from 'react';
import * as moment from 'moment';

import { IUserContainerState } from '../../lib/interfaces';

import { Message, Icon, List, Header } from 'semantic-ui-react';

const UserPresentation: React.StatelessComponent<IUserContainerState> = (props) => {
  if (props.user === undefined) {
    return (
      <Message icon>
        <Icon name='circle notched' loading />
        <Message.Content>
          <Message.Header>Loading user...</Message.Header>
        </Message.Content>
      </Message>
    );
  } else if (props.user === null) {
    return (
      <Message
        error
        icon='exclamation triangle'
        header='Failed to load user'
        content='Please try again later'
      />
    );
  } else {
    return (
      <React.Fragment>
        <Header>User Details</Header>
        <List>
          <List.Item icon='user' content={props.user.displayname} />
          <List.Item icon='mail' content={props.user.email} />
          <List.Item icon='calendar' content={moment.utc(props.user.date_created).format('LL')} />
        </List>
      </React.Fragment>
    );
  }
};

export default UserPresentation;
