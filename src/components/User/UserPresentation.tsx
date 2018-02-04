import * as React from 'react';

import { IUserContainerState } from '../../lib/interfaces';

import { Loader, Message } from 'semantic-ui-react';

const UserPresentation: React.StatelessComponent<IUserContainerState> = (props) => {
  if (props.user === undefined) {
    return (
      <Loader active>Loading</Loader>
    );
  } else if (props.user === null) {
    return (
      <Message negative>
        <Message.Header>Failed to retrieve data</Message.Header>
        <p>Please try again in a few minutes.</p>
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
