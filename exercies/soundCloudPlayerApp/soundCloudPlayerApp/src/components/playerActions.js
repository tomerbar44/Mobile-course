import { TRACKS_LOADED, SEARCH_QUERY_CHANGED, PLAY_TRACK, LOAD_RECENT_QUERIES } from './playerActionTypes';
const SC_KEY = 'CW62xLA9h8wXrXC1WIaSX9OWA6novVIE&q';

export const loadTracks = search => async dispatch => {
    // if (search === '') {
    //     dispatch({ type: TRACKS_LOADED, tracks: [] , search:search})
    // }
    // else {
        const url = `https://api.soundcloud.com/tracks/?client_id=${SC_KEY}=${search}`
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                dispatch({ type: TRACKS_LOADED, tracks: json, search:search })
            })
            .catch((error) => {
                console.error(error)
            })
    // }
};


  