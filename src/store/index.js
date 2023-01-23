/* import { createStore } from 'redux' */
import { configureStore } from '@reduxjs/toolkit'

import counterReducer from './counter'
import authReducers from './auth'


/* const counterReducer = (state = initialState, action) => {
  if (action.type === 'increment') {
    return { ...state, counter: state.counter + 1 }
  }

  if (action.type === 'decrement') {
    return { ...state, counter: state.counter - 1 }
  }

  if (action.type === 'increase') {
    return { ...state, counter: state.counter + action.amount }
  }

  if (action.type === 'toggle') {
    return { ...state, showCounter: !state.showCounter }
  }

  return state
} */

const store = configureStore({
  // reducer: { counter: counterSlice.reducer }
  reducer: { counter: counterReducer, auth: authReducers }
})

export default store