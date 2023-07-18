// external imports
import { createContext, useState } from "react";
import PropTypes from "prop-types";

// create Branch context to manage Branch here
export const AppContext = createContext();

export default function AppProvider({ children }) {
  // set initial state
  const [menuToggle, setMenuToggle] = useState(true);
  const [btnToggle, setBtnToggle] = useState(true);
  const [selectedTab, setSelectedTab] = useState("Day");
  const tabValues = {
    Day: 1,
    Week: 7,
    Month: 30,
    Year: 365,
  };

  return (
    <AppContext.Provider
      value={{
        menuToggle,
        setMenuToggle,
        btnToggle,
        setBtnToggle,
        selectedTab,
        setSelectedTab,
        tabValues,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.element,
};
