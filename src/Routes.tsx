import * as React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Container, Header, Segment } from 'semantic-ui-react';

import Navigation from './Navigation';

// interface IRoutesProps {
//   // no props
// }

const Routes: React.StatelessComponent<any> = (props) => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Container>
            <Segment>
              <Header>Home</Header>
            </Segment>
          </Container>
        </Route>
        <Route path='/board/:id'>
          <Container>
            <Segment>
              <Header>Board</Header>
            </Segment>
          </Container>
        </Route>
        <Route path='/user'>
          <Container>
            <Segment>
              <Header>User</Header>
            </Segment>
          </Container>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
