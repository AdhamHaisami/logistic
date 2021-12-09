import {Action} from '../actions';
import {ActionType} from '../action-types'

const initialState = {name: 'adham',
age: 36,
};

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