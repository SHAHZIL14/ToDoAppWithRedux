import './App.css'
import TodoForm from './components/TodoForm'
import TodoItems from './components/TodoItems'
import { Provider } from 'react-redux'
import todoStore from './todoStore/todoStore'
import { useSelector } from 'react-redux'

function App() {

  return (
    <Provider store={todoStore}>
      <h1 className="text-4xl m-5 font-serif text-white">What to do next?</h1>
      <TodoForm />
      <TodoItems />
    </Provider>
  )
}

export default App
