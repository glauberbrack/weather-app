import { UserLocation } from '~/constants/interfaces';

export interface IFetchUserLocationsAction {
  readonly type: 'FETCH_USER_LOCATION';
  payload: UserLocation;
}

export type userLocationActions = IFetchUserLocationsAction;
