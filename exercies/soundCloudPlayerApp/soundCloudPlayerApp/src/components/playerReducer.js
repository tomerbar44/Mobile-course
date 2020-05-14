import { TRACKS_LOADED, SEARCH_QUERY_CHANGED, PLAY_TRACK, LOAD_RECENT_QUERIES } from './playerActionTypes';

// track Item
// { title: string, play count: number, artist: string, image thumbnail: url}
//artwork_url
//title
//likes_count || comment_count

const initialState = {
    tracks: [],
    recentSearches:[],
    isLoading: false,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case TRACKS_LOADED:
            return {
                ...state,
                tracks: action.tracks,
                recentSearches:state.recentSearches.concat(action.search)
            };

        
        case PLAY_TRACK:
            return {
                ...state,
            };
        default:
            return state;
    }
};