import { api, config } from './axios';
import {PostsParams} from '@/utils/types/types';
// import { AxiosResponse } from "axios";

// get
export const getPostsUser = () =>
  api.get<PostsParams[]>(`/posts`, config);

  // add
export const postsUser = (data: PostsParams) =>
api.post(`/posts`, data, config);


