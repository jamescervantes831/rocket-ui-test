import {launchService} from '../services/LaunchService';
import * as ACTIONS from './actionTypes';

const requestLaunches = () => ({
  type: ACTIONS.REQUEST_LAUNCHES
});

const receiveLaunches = response => ({
  type: ACTIONS.RECEIVE_LAUNCHES,
  payload: {
    launches: response.data
  }
});

const requestRocket = () => ({
  type: ACTIONS.REQUEST_ROCKET
});

const recieveRocket = (response) => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: {
    rocket: response.data
  }
})

const fetchLaunches = dispatch => {
  dispatch(requestLaunches());
  return launchService.getLaunches().then(response => dispatch(receiveLaunches(response))) 
};

export const fetchRocket = (dispatch, rocketId) => {
  dispatch(requestRocket());
  return launchService.getRocket(rocketId).then(response => dispatch(recieveRocket(response)))
}

const shouldFetchLaunches = launchCollection => !launchCollection || !launchCollection.fetching;

export const fetchLaunchesIfNeeded = ({ dispatch, launchCollection }) =>
  shouldFetchLaunches(launchCollection) && fetchLaunches(dispatch);