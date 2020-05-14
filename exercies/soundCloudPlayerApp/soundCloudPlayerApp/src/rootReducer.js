import { combineReducers } from 'redux';
import playerReducer from './components/playerReducer';

export default combineReducers({
  player: playerReducer
});