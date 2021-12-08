import { ActionType } from "../action-types";
import { Dispatch } from "redux";
import { Action } from '../actions'

export const addShipment = (shipment: object) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.AddShipment,
      payload: shipment
    })
  };
}