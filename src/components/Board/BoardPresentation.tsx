import * as React from 'react';

import { Message, Icon } from 'semantic-ui-react';

import { IBoardContainerState } from '../../lib/interfaces';

const BoardPresentation: React.StatelessComponent<IBoardContainerState> = (props) => {
  if (props.board === undefined || props.posts.posts === undefined) {
    return (
      <Message icon>
        <Icon name='circle notched' loading />
        <Message.Header>Loading board...</Message.Header>
      </Message>
    );
  } else if (props.board === null || props.posts.posts === null) {
    return (
      <Message icon error>
        <Icon name='exclamation triangle' />
        <Message.Header>Failed to load board</Message.Header>
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
