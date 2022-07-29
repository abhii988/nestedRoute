import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Nav from "./Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Download from "./pages/Download";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Docs from "./pages/Docs";
import Chart from "./pages/Chart";
import Info from "./pages/Info";
import Products from "./pages/Products";
import Author from "./pages/Author";

const RouteSwitch = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="chart" element={<Chart />} />
          <Route path="info" element={<Info />} />
        </Route>
        <Route path="download" element={<Download />}>
          <Route path="products" element={<Products />} />
          <Route path="docs" element={<Docs />} />
        </Route>
        <Route path="about" element={<About />}>
          <Route path="contact" element={<Contact />} />
          <Route path="author" element={<Author />} />
        </Route>
        <Route path="profile" element={<Profile />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </div>
  );
};
export default RouteSwitch;
