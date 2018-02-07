import * as React from 'react';
import * as moment from 'moment';

import { Message, Icon, Header, Card } from 'semantic-ui-react';

import { IBoardContainerState } from '../../lib/interfaces';

const BoardPresentation: React.StatelessComponent<IBoardContainerState> = (props) => {
  if (props.board === undefined || props.posts.posts === undefined) {
    return (
      <Message icon>
        <Icon name='circle notched' loading />
        <Message.Content>
          <Message.Header>Loading board...</Message.Header>
        </Message.Content>
      </Message>
    );
  } else if (props.board === null || props.posts.posts === null) {
    return (
      <Message
        error
        icon='exclamation triangle'
        header='Failed to load board'
        content='Please try again later'
      />
    );
  } else {
    return (
      <div>
        <Header>{props.board.name}</Header>
        <Card.Group>
          {
            props.posts.posts.items.map((post) => (
              <Card key={post.id}>
                <Card.Content>
                  <Card.Header>{post.title}</Card.Header>
                  <Card.Meta>{moment.utc(post.date_created).format('LL')}</Card.Meta>
                  <Card.Description>{post.content}</Card.Description>
                </Card.Content>
              </Card>
            ))
          }
        </Card.Group>
      </div>
    );
  }
};

export default BoardPresentation;
