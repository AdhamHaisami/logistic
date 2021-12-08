import {combineReducers} from 'redux';

import shipmentReducer from './shipmentsReducer';

const reducer = combineReducers({
  shipments: shipmentReducer,

});

export default reducer; 