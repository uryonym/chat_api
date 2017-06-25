import { combineReducers } from 'redux'
import { ADD_MESSAGE, CREATE_MESSAGE_LIST, CHANGE_DISPLAY_STATE} from '../constants/chat'

 export const chatInitialState = []

const toggleMessage = (id, message) => {
  if(id == message.id) {
    message.displayState = !message.displayState
  }
  return message
}

const chat = (state = '', action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      const message = action.message
      message['displayState'] = true
      return [...state, message]
    case CREATE_MESSAGE_LIST:
      return action.messages.map((message) => {
        message['displayState'] = true
        return message
      })
    case CHANGE_DISPLAY_STATE:
      return state.map((message) => toggleMessage(action.id, message))
    default:
      return state
  }
}

export default chat
