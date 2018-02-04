export interface IBoard {
  id: string;
  name: string;
  date_created: string;
  date_updated: string;
}

export interface ISearchResults<T> {
  items: T[];
  total: number;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  chatId: string;
  date_created: string;
  date_updated: string;
}

export interface IChat {
  id: string;
  users: string[],
  messageTotal: number,
}

export interface IUser {
  id: string;
  username: string;
  displayname: string;
  email: string;
  date_created: string;
  date_updated: string;
}
