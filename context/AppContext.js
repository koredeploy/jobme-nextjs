
// context/MyContext.js
import { createContext, useReducer } from 'react';

const AppContext = createContext();

// Define the initial state
const initialState = {
  selectedJobType: '',
  selectedIndustry: '',
  selectedMode: '',
  selectedLocation: ''
};

// Define the reducer function
  const reducer = (state, action) => {
    switch (action.type) {
      case 'setJobType':
        return { ...state, selectedJobType: action.payload };
      case 'setIndustry':
        return { ...state, selectedIndustry: action.payload };
      case 'setMode':
        return { ...state, selectedMode: action.payload };
      case 'setLocation':
        return { ...state, selectedLocation: action.payload };
      default:
        return state;
    }
  };

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // console.log(state.selectedJobType, state.selectedIndustry, state.selectedMode, state.selectedLocation);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;