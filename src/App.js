import React from "react";
import "./App.css";
import RDHomepage from "./RDHomepage";
import TopBar from "./components/TopBar/TopBar";
import AboutJNTUGV from "./components/MainPage/Header/Aboutus/AboutJNTUGV/AboutJNTUGV";
import Vision from "./components/MainPage/Header/Aboutus/Vision/Vision";
import Mission from "./components/MainPage/Header/Aboutus/Mission/Mission";
import Chancellor from "./components/MainPage/Header/Administration/Chancellor/Chancellor";
import ViceChancellor from "./components/MainPage/Header/Administration/ViceChancellor/ViceChancellor";
import Registrar from "./components/MainPage/Header/Administration/Registrar/Registrar";
import Director from "./components/MainPage/Header/Administration/Director/Director";
import BOSList from "./components/MainPage/Header/Administration/BOSList/BOSList";
import HODList from "./components/MainPage/Header/Administration/HODList/HODList";

import { Route, Routes } from "react-router-dom";
import AcademicsOP from "./components/MainPage/Header/Academics/Programs Offered/AcademicsOP";
import ConstituentCollegesOP from "./components/MainPage/Header/Academics/Constituent Colleges/ConstituentCollegesOP";
import AdmissionsOP from "./components/MainPage/Header/Academics/Admissions/AdmissionsOP";
import AffliatedCollegesOP from "./components/MainPage/Header/Academics/Affliated Colleges/AffliatedCollegesOP";
import Boschairman from "./components/MainPage/Header/Academics/Bos-chairman/Boschairman";

import Calender from "./components/MainPage/Header/Academics/Calender/Calender";
import ContactUs from "./components/MainPage/Header/Contact-Us/ContactUs";
import AboutusMain from "./components/MainPage/Header/Aboutus/AboutusMain";
import AcademicsMain from "./components/MainPage/Header/Academics/AcademicsMain";
import AdministrationMain from "./components/MainPage/Header/Administration/AdministrationMain";
import ExaminationMain from "./components/MainPage/Header/Examinations/ExaminationMain";
import EvaluationExam from "./components/MainPage/Header/Examinations/EvaluationExam";
import Controller from "./components/MainPage/Header/Examinations/Controller";
import ControllerSDC from "./components/MainPage/Header/Examinations/ControllerSDC";
import Controller1 from "./components/MainPage/Header/Examinations/Controller1";
import Controller2 from "./components/MainPage/Header/Examinations/Controller2";
import Controller3 from "./components/MainPage/Header/Examinations/Controller3";
import ControllerPG from "./components/MainPage/Header/Examinations/ControllerPG";
import ExamResults from "./components/MainPage/Header/Examinations/ExamResults";
import Grievance from "./components/GrievanceForm/GrievanceForm";
import Results from "./components/MainPage/Results/Results-main";
import R13 from "./components/MainPage/Results/r13";
import R20 from "./components/MainPage/Results/r20";
import R16 from "./components/MainPage/Results/r16";
import R19 from "./components/MainPage/Results/r19";
import Chairpersons from "./components/MainPage/Header/Administration/Chairpersons/Chairpersons";

import CompleteGallery from "./components/Gallery/CompleteGallery";
import Syllabus from "./components/MainPage/Header/Academics/Syllabus/Syllabus";
import RDHeader from "./components/MainPage/Header/RDHeader";



function App() {
  return (
    <div>
      <TopBar />
      <RDHeader />
      <Routes>
        <Route path="/" element={<RDHomepage />} />   
        
        <Route path="/about-us" element={<AboutusMain />}>
          <Route path="about-jntugv" element={<AboutJNTUGV />} />
          <Route path="vision" element={<Vision />} />
          <Route path="mission" element={<Mission />} />
        </Route>
        <Route path="/academics" element={<AcademicsMain />}>
          <Route
            path="constituent-colleges"
            element={<ConstituentCollegesOP />}
          />
          <Route path="programs-offered" element={<AcademicsOP />} />
          <Route path="admissions" element={<AdmissionsOP />} />
          <Route path="affliated-colleges" element={<AffliatedCollegesOP />} />
          <Route path="bos-chairman" element={<Boschairman />} />

          <Route path="calender" element={<Calender />} />
          <Route path="academic-syllabus" element={<Syllabus />} />
        </Route>
        <Route path="/administration" element={<AdministrationMain />}>
          <Route path="chancellor" element={<Chancellor />} />{" "}
          <Route path="vice-chancellor" element={<ViceChancellor />} />
          <Route path="registrar" element={<Registrar />} />
          <Route path="Director" element={<Director />} />
          <Route path="BOSList" element={<BOSList />} />
          <Route path="HODList" element={<HODList />} />
          <Route path="chairpersons" element={<Chairpersons />} />

        </Route>
       
        <Route path="/examination" element={<ExaminationMain />}>
          <Route path="director-evaluation" element={<EvaluationExam />} />
          <Route path="controller" element={<Controller />} />
          <Route path="controller-sdc" element={<ControllerSDC />} />
          <Route path="controller1" element={<Controller1 />} />
          <Route path="controller2" element={<Controller2 />} />
          <Route path="controller3" element={<Controller3 />} />
          <Route path="controller-pg" element={<ControllerPG />} />
          <Route path="examresults" element={<ExamResults />} />
        </Route>
        <Route path="/results" element={<Results />}>
          <Route path="r13" element={<R13 />} />
          <Route path="r16" element={<R16 />} />
          <Route path="r19" element={<R19 />} />
          <Route path="r20" element={<R20 />} />
        </Route>
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/grievance-form" element={<Grievance />} />
        <Route path="/gallery" element={<CompleteGallery />} />

      </Routes>
    </div>
  );
}

export default App;
