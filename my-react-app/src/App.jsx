import { BrowserRouter, Routes, Route, Navigate, Router } from "react-router-dom";
import "./App.css";

import Topbar from "./components/Topbar";
import Navbar from "./components/Publicpages/Navbar";

import Home from "./components/Publicpages/Home";
import Login from "./components/Publicpages/Login";
import Contact from "./components/Publicpages/Contact";
import Support from "./components/Support";
import About from "./components/Publicpages/About";

import SuperAdminDashBoard from "./components/superadmindashBaord/SuperadminDashBoard";

import Dashboard from "./components/superadmindashBaord/Pages/Dashboard";
import Attendence from "./components/superadmindashBaord/Pages/Attendence";
import Notification from "./components/superadmindashBaord/Pages/Notification";
import School from "./components/superadmindashBaord/Pages/School";
import Setting from "./components/superadmindashBaord/Pages/Settings";
import Student from "./components/superadmindashBaord/Pages/Student";
import Teacher from "./components/superadmindashBaord/Teacher";
import Aiinsite from "./components/superadmindashBaord/Pages/AiInsite";
import Performanece from "./components/superadmindashBaord/Pages/Performence";
import Admin from "./components/superadmindashBaord/Pages/Admin";
import Footer from "./components/Publicpages/Footer";
import CreateSchool from "./components/superadmindashBaord/Pages/school/CreateSchool";
import GetSchools from "./components/superadmindashBaord/Pages/school/GetSchools";
import EditSchool from "./components/superadmindashBaord/Pages/school/Editschool";
import CreateAdmin from "./components/superadmindashBaord/Pages/adminPages/CreateAdmin";
import Getalladmin from "./components/superadmindashBaord/Pages/adminPages/GetallAdmin";
import EditAdmin from "./components/superadmindashBaord/Pages/adminPages/Editadmin";
import Createteacher from "./components/superadmindashBaord/Pages/teacher/Createteacher";
import GetallTeachers from "./components/superadmindashBaord/Pages/teacher/GetallTeachers";

function App() {
  return (
    <BrowserRouter>

      {/* These topbars show only for public pages */}
      <Topbar />
      <Navbar />

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/support" element={<Support />} />

        {/* SUPER ADMIN ROUTES (NESTED) */}
        <Route path="/superadmin" element={<SuperAdminDashBoard />}>

          {/* CHILD ROUTES (inside layout) */}
          <Route path="/superadmin/dashboard" element={<Dashboard />} />
          <Route path="/superadmin/student" element={<Student />} />
          <Route path="/superadmin/teacher" element={<Teacher />} />
          <Route path="/superadmin/attendence" element={<Attendence />} />
          <Route path="/superadmin/notification" element={<Notification />} />
          <Route path="/superadmin/performance" element={<Performanece />} />
          <Route path="/superadmin/school" element={<School />} />
          <Route path="/superadmin/setting" element={<Setting />} />
          <Route path="/superadmin/aiinsite" element={<Aiinsite />} />
          <Route path="/superadmin/admin" element={<Admin />} />
          <Route path = "/superadmin/admin/add-school" element={ <CreateSchool/>} />
          <Route path = "/superadmin/admin/get-schools" element={ <GetSchools/>} />
          <Route path = "/superadmin/admin/edit-school/:id" element={ <EditSchool/>} />
          <Route path="/superadmin/admin/create-admin" element={<CreateAdmin/>}/>
          <Route path="/superadmin/admin/get-alladmin" element={<Getalladmin/>}/>
          <Route path="/superadmin/admin/edit-admin/:id" element={<EditAdmin/>}/>
          <Route path="/superadmin/teacher/create-teacher" element={<Createteacher/>}/>
         <Route path="/superadmin/teacher/get-allTeachers" element={<GetallTeachers/>}/>
        
        </Route>

      </Routes>
        
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
