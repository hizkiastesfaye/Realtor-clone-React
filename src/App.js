import {BrowserRouter as Router, Routes,Route} from "react-router-dom" 
import Home from "./pages/Home"
import SignIn from "./pages/SignIn"
import SignUp from "./pages/SignUp"
import Profile from "./pages/Profile"
import Offers from "./pages/Offers"
import ForgotPassword from "./pages/ForgotPassword"
import Header from "./components/Header"
function App() {
  return (
    <>
    <h1>Hello</h1>
      <Router>
        <Header /> 
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/sign-in" element={<SignIn/>} />
          <Route path="/sign-up" element={<SignUp/>} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
