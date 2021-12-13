import { Action } from '../actions';

const initialState = [
  {
    title: 'Booking reminder',
    message: 'new shipments on the way',
  },
  {
    title: 'New message',
    message: 'You have a new message',
  },
]


const reducer = (state: object = initialState, action: Action) =>  state;

export default reducer;