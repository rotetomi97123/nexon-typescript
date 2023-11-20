import React, { createContext, useReducer, useContext, ReactNode } from "react";

// Define types for state
interface AppState {
  shelf1: number[];
  shelf2: number[];
  shelf3: number[];
  shelf4: number[];
}

// Define types for actions
type AppAction =
  | { type: "ADD_ITEM1"; payload: number }
  | { type: "ADD_ITEM2"; payload: number }
  | { type: "ADD_ITEM3"; payload: number }
  | { type: "ADD_ITEM4"; payload: number }
  | { type: "REMOVE_ITEM"; payload: number };

// Combine types for context value
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
}

const initialState: AppState = {
  shelf1: [0],
  shelf2: [0],
  shelf3: [0],
  shelf4: [0],
};

const AppContext = createContext<AppContextType | undefined>(undefined);

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "ADD_ITEM1":
      return { ...state, shelf1: [action.payload] };
    case "ADD_ITEM2":
      return { ...state, shelf2: [action.payload] };
    case "ADD_ITEM3":
      return { ...state, shelf3: [action.payload] };
    case "ADD_ITEM4":
      return { ...state, shelf4: [action.payload] };
    default:
      return state;
  }
};

interface AppProviderProps {
  children: ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { AppProvider, useAppContext };
