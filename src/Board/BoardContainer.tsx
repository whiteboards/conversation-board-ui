import * as React from 'react';
import { RouteComponentProps } from 'react-router';

import * as API from '../api';

import { IBoardContainerState } from '../interfaces';

import BoardPresentation from './BoardPresentation';

// Containers hold state and return the top level presentational component.
// From this point down, no component should hold data in state unless it's
// complexity warrants it. The only state below this point should be used
// for presenation only, not business logic.

class BoardContainer extends React.Component<RouteComponentProps<any>, IBoardContainerState> {
  constructor(props) {
    super(props);

    this.state = {
      board: undefined,
      posts: {
        posts: undefined,
        pageSize: 10,
        startingItem: 0,
        searchString: '',
      },
    };
  }

  getBoard = async (boardId: string) => {
    try {
      const data = await API.getBoard(boardId);
      this.setState((prevState, props) => ({
        ...prevState,
        board: data,
      }));
    } catch (err) {
      console.error('[BoardContainer] failed to get board', err);
    }
  }

  getPosts = async (
    boardId: string,
    startingItem = this.state.posts.startingItem,
    pageSize = this.state.posts.pageSize,
    searchString = this.state.posts.searchString,
  ) => {
    try {
      const data = await API.getPosts(boardId, startingItem, pageSize, searchString);
      this.setState((prevState, props) => ({
        ...prevState,
        posts: {
          ...prevState.posts,
          posts: data,
        },
      }));
    } catch (err) {
      console.error(`[BoardContainer] failed to get posts for board ${boardId}`, err);
    }
  }

  onLoad = (props: RouteComponentProps<any>) => {
    try {
      const boardId = props.location.pathname.split('/').pop();
      if (this.state.board === undefined) {
        this.getBoard(boardId);
      }
      if (this.state.posts.posts === undefined) {
        this.getPosts(boardId);
      }
    } catch (err) {
      console.error('[BoardContainer] failed to load', err);
    }
  }

  componentWillMount() {
    this.onLoad(this.props);
  }

  componentWillReceiveProps(nextProps: RouteComponentProps<any>) {
    this.onLoad(nextProps);
  }

  render() {
    const boardId = this.props.location.pathname.split('/').pop();
    return (
      <BoardPresentation
        {...this.state}
      />
    );
  }
}

export default BoardContainer;
