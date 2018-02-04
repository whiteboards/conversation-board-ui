import axios from 'axios';

import { IBoard, ISearchResults, IUser, IPost } from './interfaces';

// TODO: Add to config
const API_ROOT = 'http://localhost:3000/api';

export const getBoard = async (boardId: string) => {
  try {
    const response = await axios.get<IBoard>(`${API_ROOT}/board/${boardId}`);
    return response.data;
  } catch (err) {
    console.error('[API] getBoard failed', err);
    // Temporary delay to demonstrate loaders
    await sleep(Math.floor(Math.random() * 5000));
    return null;
  }
};

export const getPosts = async (boardId: string, startingItem = 0, pageSize = 10, searchString = '') => {
  try {
    const response = await axios.get<ISearchResults<IPost>>(`${API_ROOT}/board/${boardId}/posts`);
    return response.data;
  } catch (err) {
    console.error('[API] getPosts failed', err);
    // Temporary delay to demonstrate loaders
    await sleep(Math.floor(Math.random() * 5000));
    return null;
  }
};

export const getUser = async (userId: string) => {
  try {
    const response = await axios.get<IUser>(`${API_ROOT}/user/${userId}`);
    return response.data;
  } catch (err) {
    console.error('[API] getUser failed', err);
    // Temporary delay to demonstrate loaders
    await sleep(Math.floor(Math.random() * 5000));
    return null;
  }
};

function sleep(time: number) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
