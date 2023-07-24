import { createContext, useEffect, useReducer, useContext } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const initialState = {
  isLoading: true,
  isAuthenticated: false,
  user: null,
};

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: payload.user,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
        isLoading: false,
        user: null,
      };
    default:
      return {
        ...state,
      };
  }
};

const AuthContext = createContext({
  ...initialState,
  login: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const getUserInfo = async () => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        axios.defaults.headers.common["x-auth-token"] = token;
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/users/info`);

        dispatch({
          type: "LOGIN",
          payload: {
            user: res.data.user,
          },
        });
      } catch (err) {
        console.error(err);
      }
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
    }
  };

  // verify user on reducer state init or changes
  useEffect(() => {
    async function fetchData() {
      if (!state.user) {
        await getUserInfo();
      }
    }
    fetchData();
  }, [state]);

  const login = async (email, password) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, 
      { email, password }, 
      config
      );
      localStorage.setItem("token", res.data.token);
      await getUserInfo();
      toast.success("Log in successful")
    } catch (err) {
      toast.error("There has been an error")
    }
  };

  const signup = async (username, email, password, postcode) => {
    const config = {
      headers: { "Content-Type": "application/json" },
    };

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_URL}/users/signup`,
        { username, email, password, postcode },
        config
      );
      localStorage.setItem("token", res.data.token);
      await getUserInfo();
      toast.success("New profile created")
    } catch (err) {
      toast.error("There has been an error");
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem("token");
      dispatch({
        type: "LOGOUT",
      });
      toast.success("Log out successful");
    } catch (err) {
      toast.error("There has been an error");
    }
  };
  
  return (
    <AuthContext.Provider value={{ ...state, signup, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
