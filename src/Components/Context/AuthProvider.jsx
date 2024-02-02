// AuthContext.js
import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
    case "SIGNUP":
      return {
        ...state,
        isAuthenticated: true,
        user: {
          userId: action.payload.userId,
          usertype: action.payload.usertype,
          username: action.payload.username,
        },
        accessToken: action.payload.accessToken,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        accessToken: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    isAuthenticated: false,
    user: null,
    accessToken: null,
  });

  const login = (userId, usertype, username, accessToken) => {
    console.log("Logging");
    dispatch({
      type: "LOGIN",    
      payload: { userId, usertype, username, accessToken },
    });
  };

  const signup = (userId, usertype, username, accessToken) => {
    dispatch({
      type: "SIGNUP",
      payload: { userId, usertype, username, accessToken },
    });
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider value={{ state, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuth };
