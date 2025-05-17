import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Topbar from "./components/topbar/Topbar";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
