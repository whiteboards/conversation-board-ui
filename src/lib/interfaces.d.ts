import { IBoard, ISearchResults, IPost, IUser } from './shared';

export interface IBoardContainerState {
  board: IBoard;
  posts: IPostState;
}

export interface IPostState {
  posts: ISearchResults<IPost>;
  pageSize: number;
  startingItem: number;
  searchString: string;
}

export interface IUserContainerState {
  user: IUser;
}
