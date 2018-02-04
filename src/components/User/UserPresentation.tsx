import * as React from 'react';

import { IUserContainerState } from '../../lib/interfaces';

import { Message, Icon } from 'semantic-ui-react';

const UserPresentation: React.StatelessComponent<IUserContainerState> = (props) => {
  if (props.user === undefined) {
    return (
      <Message icon>
        <Icon name='circle notched' loading />
        <Message.Header>Loading user...</Message.Header>
      </Message>
    );
  } else if (props.user === null) {
    return (
      <Message error icon>
        <Icon name='exclamation triangle' />
        <Message.Header>Failed to load user</Message.Header>
      </Message>
    );
  } else {
    return (
      <div>
        <div>Board {props.user.username}</div>
      </div>
    );
  }
};

export default UserPresentation;
