import {combineReducers} from 'redux';

import shipmentCardsReducer from './shipmentsCards';
import cardReducer from './cardReducer';
import  notificationsReducer from './notifications'
import userReducer from './user';
import shipmentReducer from './shipments'

const reducers = combineReducers({
  user: userReducer,
  shipmentsCards: shipmentCardsReducer,
  cards: cardReducer,
  notifications: notificationsReducer,
  shipments: shipmentReducer

});

export default reducers; 

export type State = ReturnType<typeof reducers>