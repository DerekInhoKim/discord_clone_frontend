import {REMOVE_SERVER, LOAD_SERVER, SET_CURRENT_SERVER} from '../actions/server'

// state.server = {
//   currentServer: 1,
//   servers: []
// }

export default function reducer(state = {servers: []}, action){
  switch (action.type){
    case LOAD_SERVER: {
      return {...state, servers: [...action.list]}
    }
    case SET_CURRENT_SERVER: {
      // debugger;
      return {...state, currentServer: action.serverId}
    }
    default: {
      return state
    }
  }
}
