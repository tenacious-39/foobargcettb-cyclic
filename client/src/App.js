import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Resource from "./components/Resource"
import Ide from "./components/Ide"
import Dashboard from "./components/Dashboard"
import Contact from "./components/Contact"
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Kickstart from "./components/DashboardComponents/Kickstart";
import Codeforces from "./components/DashboardComponents/Codeforces";
import "bootstrap/dist/css/bootstrap.css";
import Codechef from "./components/DashboardComponents/Codechef";
import Leetcode from "./components/DashboardComponents/Leetcode";
import Hackerrank from "./components/DashboardComponents/Hackerrank";
import Geeksforgeeks from "./components/DashboardComponents/Geeksforgeeks";
import axios from "axios";
import Step1 from "./components/ResourceComponents/Steps/Step1";
import Step2 from "./components/ResourceComponents/Steps/Step2";
import Step3 from "./components/ResourceComponents/Steps/Step3";
import VideoTutorial from "./components/ResourceComponents/Tutorials/VideoTutorial";
import Step4 from "./components/ResourceComponents/Steps/Step4";
import Step5 from "./components/ResourceComponents/Steps/Step5";
import Step6 from "./components/ResourceComponents/Steps/Step6";
import TableCP from "./components/Sheets/Table1/TableCP";
import TableDSA from "./components/Sheets/Table1/TableDSA";
import TableSDE from "./components/Sheets/Table1/TableSDE";
import Step7 from "./components/ResourceComponents/Steps/Step7";
import Step8 from "./components/ResourceComponents/Steps/Step8";


function App() {

  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = () => {
      fetch("/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": 'https://cyan-creepy-cougar.cyclic.app',
        },
      }).then(response => {
        if (response.status === 200) return response.json();
        throw new Error("Authentication failed");
      }).then(resObj => {
        setUser(resObj.user);
        console.log(user);
      }).catch(error => {
        console.log(error);
      });
    };
    getUser();
  }, []);

  return (
    <div>
      <Header />
      <div className="container-fluid mt-5 mb-2 pt-2">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/resource" element={<Resource />} />
          <Route path="/ide" element={<Ide />} />
          <Route path="/auth/google/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard/kickstart" element={<Kickstart />} />
          <Route path="/dashboard/codeforces" element={<Codeforces />} />
          <Route path="/dashboard/codechef" element={<Codechef />} />
          <Route path="/dashboard/leetcode" element={<Leetcode />} />
          <Route path="/dashboard/hackerrank" element={<Hackerrank />} />
          <Route path="/dashboard/geeksforgeeks" element={<Geeksforgeeks />} />
          <Route path="/resource/step1" element={<Step1 />} />
          <Route path="/resource/step2" element={<Step2 />} />
          <Route path="/resource/step3" element={<Step3 />} />
          <Route path="/resource/step4" element={<Step4 />} />
          <Route path="/resource/step5" element={<Step5 />} />
          <Route path="/resource/step6" element={<Step6 />} />
          <Route path="/resource/step7" element={<Step7 />} />
          <Route path="/resource/step8" element={<Step8 />} />
          <Route path="/resource/videos/:section/:id" element={<VideoTutorial />} />
          <Route path="/resource/sheets/cp" element={<TableCP />} />
          <Route path="/resource/sheets/dsa" element={<TableDSA />} />
          <Route path="/resource/sheets/sde" element={<TableSDE />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
