import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as moment from 'moment';
import * as faker from 'faker';
import * as uuid from 'uuid';

import { Header, Feed, Icon, Image } from 'semantic-ui-react';

const Home: React.StatelessComponent<RouteComponentProps<any>> = (props) => {
  const users = [...Array(10)]
    .map((user) => ({
      id: uuid.v4(),
      displayName: `${faker.name.firstName()} ${faker.name.lastName()}`,
      username: faker.internet.userName(),
      avatar: faker.internet.avatar(),
    }));

  const boards = [...Array(5)]
    .map((board) => ({
      id: uuid.v4(),
      title: faker.company.catchPhrase(),
      date: moment(faker.date.recent(3)),
    }));

  let items = [...Array(30)]
    .map((el, index) => ({
      type: 'post',
      update: undefined,
      id: uuid.v4(),
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      date: moment(faker.date.recent(3)),
      user: users[Math.floor(Math.random() * users.length)],
      board: boards[Math.floor(Math.random() * boards.length)],
      messages: Math.random() > 0.4 ? Math.ceil(Math.random() * users.length) : 0,
      title: `${faker.company.catchPhraseAdjective()} ${faker.company.bsBuzz()}`,
    }))
    .map((item) => ({
      ...item,
      update: item.messages === 0 ? 'posted' : Math.random() > 0.4 ? 'posted' : 'commented',
    }));
  items.splice(0, 0, ...boards.map((board) => ({
    type: 'board',
    board,
    update: null,
    id: null,
    name: null,
    date: board.date,
    user: null,
    messages: Math.ceil(Math.random() * 100),
    title: null,
  })));
  items = items
    .map((item) => {
      const tempUsers = users
        .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
        .slice(0, Math.ceil(Math.random() * item.messages));
      tempUsers.push(item.user);
      return {
        ...item,
        users: tempUsers.filter((value, index, self) => (self.indexOf(value) === index)),
      };
    })
    .sort((a, b) => (a.date.isBefore(b.date)) ? 1 : -1);

  console.log(items);
  return (
    <React.Fragment>
      <Header>Recent</Header>
      <Feed>
        {
          items.map((event) => {
            if (event.type === 'post') {
              const participants = event.messages < users.length ? event.messages : users.length;
              return (
                <Feed.Event>
                  <Feed.Label image={event.user.avatar} />
                  <Feed.Content>
                    <Feed.Summary>
                      {
                        event.update === 'posted' ?
                          <React.Fragment>
                            <a>{event.user.displayName}</a> shared <a>{event.title}</a> in <a>{event.board.title}</a>.
                          </React.Fragment>
                          :
                          <React.Fragment>
                            <a>{event.user.displayName}</a> commented in <a>{event.title}</a>
                          </React.Fragment>
                      }
                      <Feed.Date>{event.date.fromNow()}</Feed.Date>
                    </Feed.Summary>
                    {
                      event.messages > 0 ?
                        <Feed.Meta>
                          <Feed.Like>
                            <Icon name='comments' />
                            <span
                              style={{
                                paddingRight: '0.5rem',
                              }}
                            >
                              {event.messages} Message{event.messages > 1 ? 's' : ''}
                            </span>
                            {users
                              .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
                              .slice(0, Math.ceil(Math.random() * event.messages))
                              .map((user) => (
                                <Image src={user.avatar} avatar  />
                              ))
                            }
                          </Feed.Like>
                        </Feed.Meta> :
                        null
                    }
                  </Feed.Content>
                </Feed.Event>
              );
            }
            if (event.type === 'board') {
              const participants = event.messages < users.length ? event.messages : users.length;
              return (
                <Feed.Event>
                  <Feed.Label icon='comments' />
                  <Feed.Content>
                    <Feed.Summary>
                      {event.messages} new messages in <a>{event.board.title}</a>
                      <Feed.Date>{event.board.date.fromNow()}</Feed.Date>
                    </Feed.Summary>
                    <Feed.Meta>
                      {users
                        .sort((a, b) => (Math.random() > 0.5 ? 1 : -1))
                        .slice(0, Math.ceil(Math.random() * participants))
                        .map((user) => (
                          <Image src={user.avatar} avatar />
                        ))
                      }
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              );
            }
          })
        }
      </Feed>
    </React.Fragment>
  );
};

export default Home;
