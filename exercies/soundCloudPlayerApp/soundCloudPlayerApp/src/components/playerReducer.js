import { TRACKS_LOADED, TRACKS_LOADING } from './playerActionTypes';
const initialState = {
  tracks: [],
  recentSearches: [],
  isLoading: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TRACKS_LOADED:
      return {
        ...state,
        tracks: action.tracks,
        recentSearches: state.recentSearches.concat(action.search),
        isLoading: false
      };
    case TRACKS_LOADING:
      return {
        ...state,
        isLoading: true
      };
    default:
      return state;
  }
};
