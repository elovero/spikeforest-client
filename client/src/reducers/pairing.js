import { RECEIVE_PAIRING } from '../actions/actionCreators';

const initialState = {
  selectedStudy: null,
  selectedRecording: null,
  recordings: null,
  sorters: null,
  studies: null,
  units: null,
  loading: null,
  pairing: null,
};

const pairing = (state = initialState, action) => {
  console.log('🍐IN PAIRING REDUCER', action, state);
  switch (action.type) {
    case RECEIVE_PAIRING:
      return action.pairing;
    default:
      return state;
  }
};

export default pairing;
