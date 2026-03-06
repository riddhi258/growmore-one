import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import WhoWeAre from "./Pages/WhoWeAre";
import Migrate from "./Pages/Migrate";
import IndividualVisa from "./Pages/IndividualVisa";
import EmployerVisa from "./Pages/EmployerVisa";
import StudentVisa from "./Pages/StudentVisa";
import GeneralSkilledMigration from "./Pages/GeneralSkilledMigration";
import DAMA from "./Pages/DAMA";
import LabourAgreement from "./Pages/LabourAgreement";
import PointsCalculator from "./Pages/PointsCalculator";
import Videos from "./Pages/Videos";
import News from "./Pages/News";
import Blogs from "./Pages/Blogs";
import ContactUs from "./Pages/ContactUs";
import BookConsultation from "./Pages/BookConsultation";
import Brochures from "./Pages/Brochures";

import Checklist from "./Components/Checklist";
import Checklistgsm from "./Components/Checklistgsm";
import Checklistlabour from "./Components/Checklistlabour";
import StudentAustralia from "./Pages/StudentAustralia";
import StudentDubai from "./Pages/StudentDubai";
import StudentUk from "./Pages/StudentUk";
import EmployerVisaBusiness from "./Pages/EmployerVisaBusiness";
import EmployerVisaLabour from "./Pages/EmployerVisaLabour";
import EmployerVisaEmployer from "./Pages/EmployerVisaEmployer";
import EmployerVisaRegional from "./Pages/EmployerVisaRegional";
import EmployerVisaStrategic from "./Pages/EmployerVisaStrategic";
import EmployerVisaTraining from "./Pages/EmployerVisaTraining";
import EmployerVisaLMT from "./Pages/EmployerVisaLMT";
import IndividualVisaEmployer from "./Pages/IndividualVisaEmployer";
import IndividualVisaGsm from "./Pages/IndividualVisaGsm";
import IndividualVisaFamily from "./Pages/IndividualVisaFamily";
import IndividualVisaWork from "./Pages/IndividualVisaWork";
import IndividualVisaGlobal from "./Pages/IndividualVisaGlobal";
import IndividualVisaHoliday from "./Pages/IndividualVisaHoliday";
import IndividualVisaBusiness from "./Pages/IndividualVisaBusiness";
import IndividualVisaRefugee from "./Pages/IndividualVisaRefugee";
import IndividualVisaETA from "./Pages/IndividualVisaETA";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="who-we-are" element={<WhoWeAre />} />
        <Route path="/migrate-to-australia" element={<Migrate />} />
        <Route path="/our-services/individual" element={<IndividualVisa />} />
        <Route path="/our-services/employers" element={<EmployerVisa />} />
        <Route path="/our-services/student-visa" element={<StudentVisa />} />
        <Route
          path="/our-services/gsm-general-skilled-migration"
          element={<GeneralSkilledMigration />}
        />
        <Route path="/our-services/dama" element={<DAMA />} />
        <Route
          path="/our-services/labour-agreement"
          element={<LabourAgreement />}
        />
        <Route path="/points-calculator" element={<PointsCalculator />} />
        <Route path="videos" element={<Videos />} />
        <Route path="news" element={<News />} />
        <Route path="blogs" element={<Blogs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
        <Route path="/brochures" element={<Brochures />} />
        <Route path="/checklist-for-dama" element={<Checklist />} />
        <Route
          path="/checklist-for-gsm-general-skilled-migration"
          element={<Checklistgsm />}
        />
        <Route
          path="/checklist-for-labour-agreement"
          element={<Checklistlabour />}
        />
        <Route
          path="/our-services/student-visa/student-visa-australia/"
          element={<StudentAustralia />}
        />
        <Route
          path="/our-services/student-visa/student-visa-dubai/"
          element={<StudentDubai />}
        />
        <Route
          path="/our-services/student-visa/student-visa-uk/"
          element={<StudentUk />}
        />{" "}
        /
        <Route
          path="/our-services/employers/standard-business-sponsorship/"
          element={<EmployerVisaBusiness />}
        />
        <Route
          path="/our-services/employers/labour-agreement/"
          element={<EmployerVisaLabour />}
        />{" "}
        <Route
          path="/our-services/employers/nomination-application/"
          element={<EmployerVisaEmployer />}
        />{" "}
        <Route
          path="/our-services/employers/regional-certifying-body-approval/"
          element={<EmployerVisaRegional />}
        />{" "}
        <Route
          path="/our-services/employers/business-case-preparation/"
          element={<EmployerVisaStrategic />}
        />
         <Route
          path="/our-services/employers/training-plan/"
          element={<EmployerVisaTraining />}
        />
          <Route
          path="/our-services/employers/labour-market-testing-lmt-for-sc494-and-sc482-visas/"
          element={<EmployerVisaLMT />}
        />
        <Route
          path="/our-services/individual/employer-sponsored-visa/"
          element={< IndividualVisaEmployer />}
        />
           <Route
          path="/our-services/individual/general-skilled-visa/"
          element={< IndividualVisaGsm />}
        />
            <Route
          path="/our-services/individual/family-visa/"
          element={< IndividualVisaFamily />}
        />
          <Route
          path="/our-services/individual/temporary-work-short-stay-visa/"
          element={< IndividualVisaWork />}
        />
          <Route
          path="/our-services/individual/global-talent-visa/"
          element={< IndividualVisaGlobal />}
        />
           <Route
          path="/our-services/individual/working-holiday-work-holiday-visa/"
          element={< IndividualVisaHoliday />}
        />
         <Route
          path="/our-services/individual/business-investor-visa/"
          element={< IndividualVisaBusiness/>}
        />
         <Route
          path="/our-services/individual/refugee-visa/"
          element={< IndividualVisaRefugee />}
        />
        <Route
          path="/our-services/individual/visitor-evisitor-eta-visa/"
          element={< IndividualVisaETA />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
