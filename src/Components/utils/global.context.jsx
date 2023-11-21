import { createContext, useContext, useEffect,useReducer } from "react";

const TOGGLE_THEME = 'TOGGLE_THEME';

export const initial = {
    theme: 'light',
    favoriteDentist:JSON.parse(localStorage.getItem("favoriteDentist"))||[]
  }

export const ContextGlobal = createContext(undefined);

function reducer(state, action) {
  switch (action.type) {
    case "addFavDentist":
      return {...state,favoriteDentist: [...state.favoriteDentist,action.dentist]};
    case "deleteFav":
        const dentists = state.favoriteDentist.filter((dentist) => dentist.id != action.id);
        return {
          ...state,
          favoriteDentist:dentists
        };
    case "deleteFavs":
        return [];
    case TOGGLE_THEME:
        return {
          ...state,
            theme: state.theme === 'light' ? 'dark' : 'light',
        };
    default:
        return state;
  }
}


export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    localStorage.setItem("favoriteDentist", JSON.stringify(state.favoriteDentist));
  }, [state.favoriteDentist]);


  return (
    <ContextGlobal.Provider value={{state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

const useContextGlobal = () => {
  const context = useContext (ContextGlobal);
  if (!context) {
    throw new Error('useContextGlobal debe usarse dentro de ContextProvider');
  }
  return context;
};


export { useContextGlobal, TOGGLE_THEME };
