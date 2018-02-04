import * as React from 'react';

import { IUserContainerState } from '../../lib/interfaces';

import { Message, Icon, List } from 'semantic-ui-react';

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
      <div>
        <List>

        </List>
      </div>
    );
  }
};

export default UserPresentation;
