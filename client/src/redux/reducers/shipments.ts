import { Action } from '../actions';

const initialState = [
  {
    id: 'a1b2c3d4',
    pickup: 'Gaza, abc',
    dropOff: 'Rafah, abc',
    shipmentDate: 'April 22, 2021',
    dateAdd: 'April 22, 2021',
    cost: 20,
    driver: 'Mohammed ',
    status: 'done'
  },
  {
    id: 'abvdfdfds',
    pickup: 'Gaza, abc',
    dropOff: 'Rafah, abc',
    shipmentDate: 'April 22, 2021',
    dateAdd: 'April 22, 2021',
    cost: 20,
    driver: ' Ahmed',
    status: 'done'
  },
  {
    id: 'abvdfdfds',
    pickup: 'Gaza, abc',
    dropOff: 'Rafah, abc',
    shipmentDate: 'April 22, 2021',
    dateAdd: 'April 22, 2021',
    cost: 20,
    driver: 'Ali',
    status: 'done'
  }
];

const reducer = (state: object = initialState, action:Action) => state;

export default reducer;