import { createStore } from 'redux'
import rootReducer from './reducer'
import [ inputValues, handleChange ] from './page'

const toDos = createToDos(rootReducer)
 
export default async function Array() {
  let allPosts = await handleChange.select().from(inputValues)
  return (
    <ul>
      {allPosts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  )
}