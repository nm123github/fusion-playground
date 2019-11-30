//This file contatins 'ACTION-CREATOR' functions
//In Redux, 'ACTION-CREATOR'  return an  ACTION(plain JavaScript object)

//example of simple 'ACTION-CREATOR'

export const addTodo = (payload) => ({
  type: "ADD_TODO",
  payload
})