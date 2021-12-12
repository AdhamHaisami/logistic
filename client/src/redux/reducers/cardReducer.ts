import { Action } from '../actions';
import {ActionType} from '../action-types';

const initialState = {
    total: 500,
    pending: 120,
    newClients: 32,
    returningClients: '15%',
  };

const reducer = (state: object = initialState, action: Action) =>  state;

export default reducer;