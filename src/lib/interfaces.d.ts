// For now, we'll just put all interfaces here. At some point, this will
// get pretty unwieldy and we'll need to split it into separate files.

export interface IBoardContainerState {
  board: IBoard;
  posts: IPostState;
}

export interface IBoard {
  id: string;
  name: string;
}

export interface IPostState {
  posts: IPostResults;
  pageSize: number;
  startingItem: number;
  searchString: string;
}

export interface IPostResults {
  items: IPost[];
  total: number;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  chatId: string;
}

export interface IUserContainerState {
  user: IUser;
}

export interface IUser {
  id: string;
  username: string;
  displayname: string;
  email: string;
}