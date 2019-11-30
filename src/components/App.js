import React from 'react'
import Todo from '../containers/Todo'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from '../reducers'

const store = createStore(reducer)

let App = () => (
  <Provider store={store}>
    <Todo />
  </Provider>
)

export default App;