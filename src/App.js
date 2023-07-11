import { Routes, Route } from "react-router-dom";
import "./App.css"
import { useState } from "react";
// Pages Import ---
import Home from './pages/website/Home';
import HowItWorks from './pages/website/HowItWorks';
import AboutUs from './pages/website/AboutUs';
import ContactUs from './pages/website/ContactUs';
import NotFoundPage from './pages/website/NotFoundPage';
import SignUp from './pages/auth/SignUp';
import LogIn from './pages/auth/LogIn';
import ForgotPassword from './pages/auth/ForgotPassword';
import PasswordCodeSent from './pages/auth/PasswordCodeSent';
import Dashbboard from './pages/Dashboard';
import CreateListing from "./pages/auth/CreateListing";

// Components Import ---
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Listing from "./pages/auth/Listing";

export default function App() {
  // TODO: This should be loaded from storage when auth implemented
  const [isAuthenticated] = useState(false);

  return (
    <div id="main-app-layout" className="p-2 bg-brownc min-h-screen">
      <NavigationBar />
      <div id="route-app-layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/passwordcodesent" element={<PasswordCodeSent />} />
          <Route path="/dashboard" element={<Dashbboard />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/listing/:id" element={<Listing/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      {isAuthenticated ? (null) : (
      <Footer />)}
    </div>
  );
}