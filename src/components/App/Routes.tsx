import * as React from 'react';

import { Switch, Route } from 'react-router-dom';
import { Container, Header, Segment } from 'semantic-ui-react';

import Navigation from '../Navigation';
import Home from '../Home';
import Board from '../Board';
import User from '../User';

const Routes: React.StatelessComponent<any> = (props) => {
  return (
    <React.Fragment>
      <Navigation />
      <Container className='route-container'>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/board/:id' component={Board} />
          <Route exact path='/user' component={User} />
        </Switch>
      </Container>
    </React.Fragment>
  );
};

export default Routes;
