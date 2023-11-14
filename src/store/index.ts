// store.ts
import { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";
import { State, Todo, UserInfo } from "@utils/types";
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore({
  state(): State {
    return {
      todos: [
        { id: 1, text: "...", done: true },
        { id: 2, text: "...", done: false },
      ],
      userInfo: {}, // Initialize userInfo as an empty object
    };
  },
  getters: {
    doneTodos(state: State): Todo[] {
      return state.todos;
    },
    doneUserInfo(state: State): UserInfo {
      return state.userInfo; // Fix the property name to userInfo
    },
    doneTokens(state: State): string | null {
      return state.userInfo.tokens || null; // Access tokens from userInfo
    },
  },
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}
