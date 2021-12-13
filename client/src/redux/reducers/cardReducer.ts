import { Action } from '../actions';
import {ActionType} from '../action-types';

const initialState = [
  {
    title: 'Total Shipments',
    number: 500,
  },
  {
    title: 'Pending approval',
    number: 120,
  },
  {
    title: 'New Clients this month',
    number: 32,
  },
  {
    title: 'Returning clients',
    number: '15%',
  },
]


const reducer = (state: object = initialState, action: Action) =>  state;

export default reducer;