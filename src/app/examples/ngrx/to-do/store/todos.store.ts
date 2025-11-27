import {
  getState,
  patchState,
  signalStore,
  watchState,
  withComputed,
  withHooks,
  withMethods,
  withState
} from "@ngrx/signals";
import {TodoItem} from "./todos.model";
import {computed, effect} from "@angular/core";

type ToDoFilter = 'all' | 'undone' | 'done';

type TodoState = {
  todos: TodoItem[],
  filter: ToDoFilter,
}

const LOCAL_STORAGE_KEY = 'angular-path-showcase-signals-to-do-ngrx';


const initialState: TodoState = {
  todos: [],
  filter: "all"
}

export const TodosStore = signalStore(
  {providedIn: 'root'},
  withState(initialState),
  withMethods((store) => ({
    addToDo(newTodoDescription: string) {
      patchState(store, {
        todos: [
          ...store.todos(),
          {
            description: newTodoDescription,
            done: false,
            id: Math.random()
          }
        ]
      })
    },
    toggleToDo(todoId: number) {
      patchState(store, {
        todos: store.todos().map((todo) => {
          if (todo.id === todoId) {
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo;
        })
      })
    },
    changeFilter(filter: ToDoFilter) {
      patchState(store, {filter: filter})
    }
  })),
  withComputed((store) => ({
    doneTodos: computed(() => store.todos().filter((todo) => todo.done)),
    filteredTodos: computed(() => {
      switch (store.filter()) {
        case "undone": {
          return store.todos().filter((todos) => !todos.done);
        }
        case "done": {
          return store.todos().filter((todos) => todos.done);
        }
        default: {
          return store.todos()
        }
      }
    })
  })),
  withHooks({
    onInit(store) {
      let previousState: TodoState | undefined;
      const todosFromStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
      patchState(store, {
        todos: todosFromStorage
      });
      // allows you to watch the state (any value changes)
      // possibly for rolling back, or logging
      watchState(store, (state) => {
        console.log("watching state...", state)
        // for rolling back, you can save the previous state and compare or something
        console.log(state);
        console.log(previousState)
        previousState = structuredClone(state);
      });
      // alternatively, you can use effect which does not log every single change to a signal, but rather a "batched" version:
      effect(() => {
        const state = getState(store);
        console.log("effect watching state...", state);
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.todos));
      })
    }
  })
);
