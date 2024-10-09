import { createStore } from 'redux'
import rootReducer from './reducer'
import [ inputValues, handleChange ] from './page'

const toDos = createToDos(rootReducer)
 
