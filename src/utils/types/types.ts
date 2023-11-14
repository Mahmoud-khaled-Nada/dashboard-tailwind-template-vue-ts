/*
+-----------------------------+
|   == Types of general ==    |
+-----------------------------+
*/

export type State = {
  todos: Todo[];
  userInfo: UserInfo;
};
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export type UserInfo = {
  id?: number;
  username?: string;
  tokens?: string | null;
};

export type PostsParams = {
  userId: number;
  id: number;
  title: string;
  body: string;
};



