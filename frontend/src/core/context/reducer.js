export const initialState = {
  events: [],
  nosotros: [],
  artistas: [],
  oficios: [],
  deportistas:[],
};

export const actionTypes = {
  EVENTSDB: "EVENTSDB",
  NOSOTROSDB: "NOSOTROSDB",
  ARTISTASDB: "ARTISTASDB",
  OFICIOSDB: "OFICIOSDB",
  DEPORTISTASDB:"DEPORTISTASDB"
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

      case "DEPORTISTASDB":
        return {
          ...state,
          deportistas: action.deportistas,
        };


  }
};

export default reducer;
