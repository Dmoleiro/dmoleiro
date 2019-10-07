import {SET_TAB_INDEX} from "./constants/actionTypes";

export default function Middleware({getState, dispatch}) {
  return next => action => {
      switch (action.type) {
          case SET_TAB_INDEX:
            break;
          default:
            break;
      }
      return next(action);
  }
}
