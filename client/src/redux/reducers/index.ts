import {combineReducers} from 'redux';

import shipmentReducer from './shipmentsReducer';
import cardReducer from './cardReducer';

const reducers = combineReducers({
  shipments: shipmentReducer,
  cards: cardReducer,

});

export default reducers; 

export type State = ReturnType<typeof reducers>