const SET_USERS = (state, users) => {
  state.users = users;
};

const FETCHING = (state, fetching) => {
  state.fetching = fetching;
  state.hasError = false;
};

const FETCHING_FAILED = (state, hasError) => {
  state.hasError = hasError;
};

const SET_DID_CREATE_USER = (state, didCreateUser) => {
  state.didCreateUser = didCreateUser;
};

const SELECTED_USER = (state, selectedUser) => {
  state.selectedUser = selectedUser;
};

const SET_SEGMENTS = (state, segments) => {
  state.segments = segments;
};

const SET_SUB_SEGMENTS = (state, subSegments) => {
  state.subSegments = subSegments;
};

export default {
  SET_USERS,
  FETCHING,
  FETCHING_FAILED,
  SET_DID_CREATE_USER,
  SELECTED_USER,
  SET_SEGMENTS,
  SET_SUB_SEGMENTS
};
