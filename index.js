const redux = require('redux')

const initialState = [
  {
    name: 'First dog',
    isAGoodBoy: true
  }
]

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
  case 'ADD_DOG':
    return [
      ...state,
      { ...action.payload }
    ]
case 'SET_DOGS':
    // return [
    //     ...state,
    //     {...action.payload}]
    if(action.payload ===[]){
        return state =[]
    }
    else {
        return [
       ...state,
        {...action.payload}]
    }
  default:
    return state
  }
}

const store = redux.createStore(reducer)
console.log('Initial state of the store', store.getState())

store.subscribe(() => console.log('Next state:', store.getState()))

const action = {
  type: 'ADD_DOG',
  payload: {
    name: 'Second dog',
    isAGoodBoy: false
  }
}

const actionTwo ={
    type: 'SET_DOGS',
    payload: []
}

store.dispatch(action)
store.dispatch(actionTwo)

module.exports = { reducer }