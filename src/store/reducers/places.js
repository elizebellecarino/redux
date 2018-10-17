import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, UNSELECT_PLACE } from "../actions/actionTypes"

const initialState= {
    places: [],
   selectedPlace: null

};

const reducer=(state= initialState,action) => {
    switch(action.type) {
        case ADD_PLACE:
          return {
              ...state,
              places: state.places.concat({
                key : Math.random(), 
                name : action.placeName,
                image: {
                  uri: 'https://cdn.newsapi.com.au/image/v1/70385b6abbafc9b79e84a9461b61be16?width=1024'
                }
            })    
          };
          case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => {
                    return place.key !== state.selectedPlace.key;
                  }),
                  selectedPlace: null

            };
           case SELECT_PLACE:
            return {
                ...state,
                selectedPlace: state.places.find(place => {
                    return place.key === action.placeKey;
           
                  })

            }; 
           case UNSELECT_PLACE:
             return {
                ...state,
                selectedPlace: null
             };
        default:
          return state;
    }

};

export default reducer;