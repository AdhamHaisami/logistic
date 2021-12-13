import {Action} from '../actions';
import {ActionType} from '../action-types'

const initialState = [
  {
    name: 'Adham Haisami',
    location: {
      from: 'Gaza',
      to: 'Rafah'
    },
    date: '22/1/2022',
    time: {
      from: '11:00',
      to: '12:00',
    },
    status: 'Done'
  }
]

const reducer = (state: object = initialState, action: Action) => {
  switch(action.type){
      case ActionType.AddShipment: 
      return {
        ...state,
      };
      case ActionType.DeleteShipment :
        return {
          state,
        };
      default: return state;
  }
};

export default reducer;