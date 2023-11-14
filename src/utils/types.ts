/*
+-----------------------------+
|   == Types of general ==    |
+-----------------------------+
*/

export type State = {
  todos: Todo[];
  userInfo: UserInfo; // Fix the property name to userInfo
};
export type Todo = {
  id: number;
  text: string;
  done: boolean;
};
export type UserInfo = {
  id?: number;
  username?: string;
  tokens?: string | null; // Change tokens type to string | null
};



