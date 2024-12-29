import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Profilepage from "./pages/Profilepage";
import Signuppage from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage";
import Settingspage from "./pages/Settingspage";
import { useAuthStore } from "./Store/useAuthStore.js";
import Loading from "./components/Loading.jsx";
import Navbar from "./components/Navbar.jsx";
import { Toaster } from "react-hot-toast";
import { useThemeStore } from "./Store/useThemeStore.js";
const App = () => {
  const { theme } = useThemeStore();
  const { isCheckingAuth, authUser, checkAuth } = useAuthStore();
  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log(!authUser);
  if (isCheckingAuth && !authUser) {
    return <Loading />;
  }
  return (
    <div data-theme={theme}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={authUser ? <Homepage /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={authUser ? <Profilepage /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={!authUser ? <Loginpage /> : <Navigate to="/" />}
        />
        <Route path="/setting" element={<Settingspage />} />
        <Route
          path="/signup"
          element={!authUser ? <Signuppage /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
