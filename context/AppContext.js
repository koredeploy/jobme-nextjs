// context/MyContext.js
import { createContext, useState } from 'react';

const AppContext = createContext();
export const AppProvider = ({ children }) => {
  // const [userId, setUserId] = useState(null);
  // State for filter criteria
  const [selectedJobType, setSelectedJobType] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('');
  const [selectedMode, setSelectedMode] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('')

  console.log(selectedJobType, selectedIndustry, selectedMode, selectedLocation);
  
  return (
    <AppContext.Provider value={{ selectedJobType, setSelectedJobType, selectedIndustry, setSelectedIndustry, selectedMode, setSelectedMode, selectedLocation, setSelectedLocation }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;

