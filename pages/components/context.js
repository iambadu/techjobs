import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export function SearchWrap({ children }) {
  const [state, setstate] = useState({job: "", location: ""})
  function updateState (key, newValue) {
      setstate(state => ({...state, [key] : newValue}))
  }
  return (
    <AppContext.Provider value = {{state, updateState}}>
      {children}
    </AppContext.Provider>
  );
}

export function useSearch() {
  return useContext(AppContext);
}