import { TRACKS_LOADED, TRACKS_LOADING } from './playerActionTypes';
const SC_KEY = '?client_id=CW62xLA9h8wXrXC1WIaSX9OWA6novVIE';

export const loadTracks = (search) => async (dispatch) => {
  dispatch({ type: TRACKS_LOADING });
  const url = `https://api.soundcloud.com/tracks/${SC_KEY}&q=${search}`;
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      dispatch({
        type: TRACKS_LOADED,
        tracks: json,
        search: search === '' ? 'Empty search 🔎' : search
      });
    })
    .catch((error) => {
      console.error(error);
    });
};
