import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast"

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


// Components Import ---
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import Listing from './pages/auth/Listing';
import ProtectedRoute from './components/ProtectedRoute';

// Hook Import ---
import { useAuth } from "./hooks/useAuth";

export default function App() {
  const { isAuthenticated } = useAuth();
  return (
    <div id="main-app-layout" className="p-2 bg-brownc min-h-screen">
        <NavigationBar />
        <Toaster position="top-right" toastOptions={{duration: 2000}} />
        <div id="route-app-layout">
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
            <Route path="/listing/:id" element={
              <ProtectedRoute isAuthenticated={isAuthenticated}>
                <Listing />
              </ProtectedRoute>
            }/>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
        {isAuthenticated ? (null) : (
        <Footer />)}
    </div>
  );
}