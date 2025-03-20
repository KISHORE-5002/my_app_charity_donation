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
import MitraCrowdfunding from "./pages/MitraCrowdfunding";
import SunriseHaven from "./pages/SunriseHaven";
import About from "./pages/About";
//import Children from "./pages/Children";
import MitraContactPage from "./pages/MitraContactPage";
import Donate from "./pages/Donate";
import Mitra from "./pages/Mitra";
import Mitrap from "./pages/Mitrap";
import MitraWebsite from "./pages/MitraWebsite";

const App=()=> {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MitraWebsite/>} />
        <Route path="/pages/LoginPage" element={<LoginPage />} />
        <Route path="/pages/AdminLogin" element={<AdminLogin />} />
        <Route path="/pages/Signin" element={<Signin />} />
        <Route path="/pages/MitraSignup" element={<MitraSignup/>} />
        <Route path="/pages/Support" element={<Support />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/BrightFutures" element={<BrightFutures />} />
        <Route path="/pages/SunriseHaven" element={<SunriseHaven />} />

        <Route path="/pages/MitraContactPage" element={<MitraContactPage />} />
        <Route path="/pages/MitraCrowdfunding" element={<MitraCrowdfunding />} />
        <Route path="/pages/Donate" element={<Donate/>} />
        <Route path="/pages/Mitra" element={<Mitra/>} />
        <Route path="/pages/Mitrap" element={<Mitrap/>} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
