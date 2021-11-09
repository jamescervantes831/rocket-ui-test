import * as ACTIONS from '../actions/actionTypes';

const initialState = {
  launches: [],
  rocket: {},
  fetching: false,
};

const actionHandlers = {
  [ACTIONS.REQUEST_LAUNCHES]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_LAUNCHES]: ({ state, action }) => ({
    ...state,
    fetching: false,
    launches: [...state.launches, ...action.payload.launches]
  }),
  [ACTIONS.REQUEST_ROCKET]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_ROCKET]: ({ state, action }) => ({
    ...state,
    fetching: false,
    rocket: {...state.rocket, ...action.payload.rocket}
  })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
