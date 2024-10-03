import { createStore } from 'redux'
import rootReducer from './reducer'

let preloadedState
const persistedTodosString = localStorage.getItem('toDos')

if (persistedTodosString) {
  preloadedState = {
    todos: JSON.parse(persistedTodosString)
  }
}

const store = createStore(rootReducer, preloadedState)