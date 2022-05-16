import { useState, createContext } from "react";

const CurrentUserContext = createContext();
const CurrentUserProvider = (props) => {
  const [currentUser, setCurrentUser] = useState({});

  return (
    <CurrentUserContext.Provider value={[currentUser, setCurrentUser]}>
      {props.children}
    </CurrentUserContext.Provider>
  );
};

export { CurrentUserContext, CurrentUserProvider };
