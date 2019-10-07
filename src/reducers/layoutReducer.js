import {SET_TAB_INDEX} from '../constants/actionTypes';

export default(state, action) => {
  switch(action.type) {
    case SET_TAB_INDEX:
        return {
            ...state,
            selectedSliderTabIndex: action.index
        };
    default:
      return state;
  }
};
