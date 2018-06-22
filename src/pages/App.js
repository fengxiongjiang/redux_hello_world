import React, { Component } from 'react';

//redux
import { applyMiddleware, createStore } from 'redux'
import axios from 'axios'
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware'

const initialState = {
  fetching: false,
  fetched: false,
  vendor: [],
  error: null
}
//reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_VENDORS_PENDING': {
      state = { ...state, fetching: true }
      break
    }
    case "FETCH_VENDORS_REJECTED": {
      state = { ...state, fetching: false, error: action.payload }
      break
    }
    case "FETCH_VENDORS_FULFILLED": {
      state = {
        ...state,
        fetching: false,
        fetched: true,
        error: action.payload
      }
      break
    }
  }
  return state
}
//reducer

//store
const middleware = applyMiddleware(promise(), thunk, logger)
const store = createStore(reducer, middleware)



//ACTION
store.dispatch({ 
  type: 'FETCH_VENDORS', 
  payload: axios.get('http://localhost:3000/api/all/all_vendor_read_all') 
})
//ACTION

//redux

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>fuck</div>
      </div>
    )
  }
}

export default App;
