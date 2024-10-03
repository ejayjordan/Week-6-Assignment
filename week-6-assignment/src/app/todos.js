import { createStore } from 'redux'
import rootReducer from './reducer'

const toDos = createToDos(rootReducer)

export default toDos