import {ActionType} from '../action-types'

interface AddShipment {
  type: ActionType.AddShipment;
};

interface DeleteShipment {
  type: ActionType.DeleteShipment;
};

export type Action = AddShipment | DeleteShipment ;