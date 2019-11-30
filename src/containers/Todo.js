import React, {useState} from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

function Todo({todos, stateObject, addTodo}) {

  const [todo, setTodo] = useState('')

  return (
    <>
      <div>
        <h1>Add Todo</h1>
        <input onChange={event => setTodo(event.target.value)} />
        <button onClick={() => addTodo(todo)}>ADD TODO</button>
      </div>
      <div>
        <h1>View Todos</h1>
        {todos.map((todo, i) => <h3 key={todo + i}>{todo}</h3>)}
      </div>
      <div>
        <h1>Check Redux State</h1>
        <button onClick={() => console.log('Redux State:', stateObject)} >Press to inspect STATE in console panel</button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  stateObject: state
})

const mapDispatchToProps = (dispatch) => ({
  addTodo: (todo) => {dispatch(addTodo(todo))}
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);