export const initialState = {
  events: [],
  nosotros: [],
  artistas: [],
  oficios: [],
};

export const actionTypes = {
  EVENTSDB: "EVENTSDB",
  NOSOTROSDB: "NOSOTROSDB",
  ARTISTASDB: "ARTISTASDB",
  OFICIOSDB: "OFICIOSDB",
};

const reducer = (state, action) => {
  //console.log(action)
  //console.log(state)

  switch (action.type) {
    case "EVENTSDB":
      return {
        ...state,
        events: action.events,
      };

    case "NOSOTROSDB":
      return {
        ...state,
        nosotros: action.nosotros,
      };

    case "ARTISTASDB":
      return {
        ...state,
        artistas: action.artistas,
      };

    case "OFICIOSDB":
      return {
        ...state,
        oficios: action.oficios,
      };


  }
};

export default reducer;
