import React, { createContext, useContext, useState } from "react";
const AlertHandlerContext = createContext();
export const AlertHandlerProvider = ({ children }) => {
  const [alertState, setAlertState] = useState({
    Visible: false,
    errortext: "",
  });
  const setAlert = (errorText) => {
    setAlertState({
      Visible: true,
      errorText: errorText,
    });
    setTimeout(() => {
      setAlertState({ visible: false, errortext: "" }, 3000);
    });
  };
  const closeAlert = () => {
    setAlertState({
      visible: false,
      errortext: "",
    });
  };
  const contextValue = {
    ...alertState,
    setAlert: setAlert,
    closeAlert: closeAlert,
  };
  return (
    <AlertHandlerContext.Provider value={contextValue}>
      {children}
    </AlertHandlerContext.Provider>
  );
};
export const useAlertHandler = ({ children }) => {
  const context = useContext(AlertHandlerContext);
};
