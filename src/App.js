import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"
import { Spinner } from "flowbite-react";

// CSS Import ---
import "./App.css"

// Pages Import ---
import Home from './pages/website/Home';
import HowItWorks from './pages/website/HowItWorks';
import AboutUs from './pages/website/AboutUs';
import ContactUs from './pages/website/ContactUs';
import NotFoundPage from './pages/website/NotFoundPage';
import SignUp from './pages/auth/SignUp';
import LogIn from './pages/auth/LogIn';
import ForgotPassword from './pages/auth/ForgotPassword';
import Dashbboard from './pages/auth/Dashboard';
import CreateListing from "./pages/auth/CreateListing";
import MyListings from "./pages/auth/MyListings";
import Profile from "./pages/auth/Profile";

// Components Import ---
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Listing from './pages/auth/Listing';
import ProtectedRoute from './components/ProtectedRoute';

// Hook Import ---
import { useAuth } from "./hooks/useAuth";

export default function App() {
  const { isAuthenticated, isLoading } = useAuth();
  const token = localStorage.getItem("token");
  return (
    <div id="main-app-layout" className="px-4 py-2 md:px-8 bg-brownc text-white font-google min-h-screen">
        <NavigationBar />
        <Toaster position="top-right" toastOptions={{duration: 2000}} />
        <div id="route-app-layout">
          {isLoading && token ? (
            <div className="text-center">
              <Spinner size="xl" color="pink"/>
            </div>
            )
            : (
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/howitworks" element={<HowItWorks />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contactus" element={<ContactUs />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            {/* Auth Routes */}
            <Route path="/dashboard" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Dashbboard />
              </ProtectedRoute>
            }/>
            <Route path="/create-listing" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <CreateListing />
              </ProtectedRoute>
            }/>
            <Route path="/listings/:id/comments" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Listing />
              </ProtectedRoute>
            }/>
             <Route path="/listings/mylistings" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <MyListings />
              </ProtectedRoute>
            }/>
            <Route path="/users/info" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Profile />
              </ProtectedRoute>
            }/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>)}
        </div>
        {isAuthenticated ? (null) : (
        <Footer />)}
    </div>
  );
}