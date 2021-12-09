import {combineReducers} from 'redux';

import shipmentReducer from './shipmentsReducer';

const reducers = combineReducers({
  shipments: shipmentReducer,

});

export default reducers; 

export type State = ReturnType<typeof reducers>