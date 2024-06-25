import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "../pages/Signup";
import Signin from "../pages/SignIn";
import Home from "../pages/Home";
import AddAdmin from "../pages/AddAdmin";
import UserList from "../pages/User List/userList";
import Project from "../pages/Project List/projectList";
import MeasureForm from "../measureForm/measureForm";
import MeasureDetail from "../pages/Measure Detail/measureDetail";
import UserProtect from "../pages/protection/userProtect";
import AdminProtect from "../pages/protection/adminProtect";
import ProfilePage from "../pages/profile/profile";
import ForgotPassword from "../pages/ForgotPassword";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* <Route path="/add-admin" element={<AddAdmin />} /> */}
        <Route path="/users" element={<AdminProtect Screen={UserList}/>} />
        <Route path="/project/:id" element={<Project />} />
        <Route path="/profile" element={<UserProtect Screen={ProfilePage} />} />
        <Route path="/home" element={<Home />} />
        <Route path="/measurement-form" element={<MeasureForm />} />
        <Route path="/measurement/:id" element={<MeasureDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouterComponent;