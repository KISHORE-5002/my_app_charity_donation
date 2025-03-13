import react from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Router,Route,Routes} from "react-router-dom";
import LoginPage from "./pages/Loginpage";
import Support from "./pages/Support";
import Signin from "./pages/Signin";
import AdminLogin from "./pages/AdminLogin";
import Footer from "./components/Footer";
import MitraSignup from "./pages/MitraSignup";
import MitraApp from "./pages/MitraApp";
import BrightFutures from "./pages/BrightFutures";
//import MitraCrowdfunding from "./pages/MitraCrowdfunding";
import SunriseHaven from "./pages/SunriseHaven";
import About from "./pages/About";
import Children from "./pages/Children";
import MitraContactPage from "./pages/MitraContactPage";



const App=()=> {
  return (
    <BrowserRouter>

      <Routes>
        <Route path="/" element={<MitraApp/>} />
        <Route path="/pages/MitraApp" element={<LoginPage />} />
        <Route path="/pages/AdminLogin" element={<AdminLogin />} />
        <Route path="/pages/Signin" element={<Signin />} />
        <Route path="/pages/MitraSignup" element={<MitraSignup/>} />
        <Route path="/pages/Support" element={<Support />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/BrightFutures" element={<BrightFutures />} />
        <Route path="/pages/SunriseHaven" element={<SunriseHaven />} />
        <Route path="/pages/Children" element={<Children />} />
        <Route path="/pages/MitraContactPage" element={<MitraContactPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;
