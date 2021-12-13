import {combineReducers} from 'redux';

import shipmentReducer from './shipmentsCards';
import cardReducer from './cardReducer';
import  notificationsReducer from './notifications'
import userReducer from './user';

const reducers = combineReducers({
  user: userReducer,
  shipmentsCards: shipmentReducer,
  cards: cardReducer,
  notifications: notificationsReducer

});

export default reducers; 

export type State = ReturnType<typeof reducers>