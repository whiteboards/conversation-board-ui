import * as React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './Login';
import Routes from './Routes';

// interface IAppProps {
//   // No props.
//   // We need this as a placeholder for the component. (Actually, we don't with this tslint config)
//   // (We could pass props to here from where we call ReactDOM.render in index.tsx)
// }

// interface IAppState {
// }

class App extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/login' component={Login} />
          <Route path='/' component={Routes} />
        </Switch>
      </Router>
    );
  }
}

export default App;
