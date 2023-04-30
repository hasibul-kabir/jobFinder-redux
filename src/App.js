import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navigations/Navbar";
import SideNav from "./components/navigations/SideNav";
import AddJob from "./pages/AddJob";
import EditJob from "./pages/EditJob";
import Fulltime from "./pages/Fulltime";
import Home from "./pages/Home";
import Internship from "./pages/Internship";
import Remote from "./pages/Remote";


function App() {
  return (
    <>
      <Navbar />
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8 ">
        <SideNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/internship" element={<Internship />} />
          <Route path="/jobs/fulltime" element={<Fulltime />} />
          <Route path="/jobs/remote" element={<Remote />} />
          <Route path="/jobs/add" element={<AddJob />} />
          <Route path="/jobs/edit" element={<EditJob />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
