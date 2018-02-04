import * as React from 'react';

import { Loader, Message } from 'semantic-ui-react';

import { IBoardContainerState } from '../../lib/interfaces';

const BoardPresentation: React.StatelessComponent<IBoardContainerState> = (props) => {
  if (props.board === undefined || props.posts.posts === undefined) {
    return (
      <Loader active>Loading</Loader>
    );
  } else if (props.board === null || props.posts.posts === null) {
    return (
      <Message negative>
        <Message.Header>Failed to retrieve data</Message.Header>
        <p>Please try again in a few minutes.</p>
      </Message>
    );
  } else {
    return (
      <div>
        <div>Board {props.board.id}</div>
      </div>
    );
  }
};

export default BoardPresentation;
