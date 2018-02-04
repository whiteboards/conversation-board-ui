import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import { IUserContainerState } from '../interfaces';

import UserPresentation from './UserPresentation';

import * as API from '../api';

// Containers hold state and return the top level presentational component.
// From this point down, no component should hold data in state unless it's
// complexity warrants it. The only state below this point should be used
// for presenation only, not business logic.

class UserContainer extends React.Component<RouteComponentProps<any>, IUserContainerState> {
  constructor(props) {
    super(props);

    this.state = {
      user: undefined,
    };
  }

  getUser = async (userId) => {
    try {
      const data = await API.getUser(userId);
      this.setState((prevState, props) => ({
        ...prevState,
        user: data,
      }));
    } catch (err) {
      console.error('[UserContainer] failed to get user', userId, err);
    }
  }

  // This is a pattern we've been using at my work for a while. We found
  // that sometimes we would be missing data on the initial mount and needed
  // to wait for props to be udpated before fetching data. This method also
  // checks if the data has already been loaded so it won't load multiple
  // times. The onLoad function should call other functions that actually
  // get the data.
  onLoad = (props: RouteComponentProps<any>) => {
    try {
      if (this.state.user === undefined) {
        this.getUser('1234iguess');
      }
    } catch (err) {
      console.error('[UserContainer] failed to load', err);
    }
  }

  componentWillMount() {
    this.onLoad(this.props);
  }

  componentWillReceiveProps(nextProps: RouteComponentProps<any>) {
    this.onLoad(nextProps);
  }

  render() {
    return (
      <UserPresentation
        {...this.state}
      />
    );
  }
}

export default UserContainer;
