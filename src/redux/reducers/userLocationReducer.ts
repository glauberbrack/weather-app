import { UserLocation } from '~/constants/interfaces';

import { userLocationActions } from '../actions/userLocationActions';

type UserLocationState = {
  userLocation: UserLocation;
};

const initialState: UserLocationState = {
  userLocation: { lat: 0, long: 0 }
};

const userLocationReducer = (
  state: UserLocationState = initialState,
  action: userLocationActions
) => {
  switch (action.type) {
    case 'FETCH_USER_LOCATION':
      return {
        ...state,
        userLocation: action.payload
      };
    default:
      return state;
  }
};

export default userLocationReducer;
