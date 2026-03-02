import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

import Home from './Pages/Home'
import WhoWeAre from './Pages/WhoWeAre'
import Migrate from './Pages/Migrate'
import IndividualVisa from './Pages/IndividualVisa'
import EmployerVisa from './Pages/EmployerVisa'
import StudentVisa from './Pages/StudentVisa'
import GeneralSkilledMigration from './Pages/GeneralSkilledMigration'
import DAMA from './Pages/DAMA'
import LabourAgreement from './Pages/LabourAgreement'
import PointsCalculator from './Pages/PointsCalculator'
import Videos from './Pages/Videos'
import News from './Pages/News'
import Blogs from './Pages/Blogs'
import ContactUs from './Pages/ContactUs'
import BookConsultation from './Pages/BookConsultation'
import Brochures from './Pages/Brochures'

import Checklist from './Components/Checklist'
import Checklistgsm from './Components/Checklistgsm'

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
        <Route path="/our-services/gsm-general-skilled-migration" element={<GeneralSkilledMigration />} />
        <Route path="/our-services/dama" element={<DAMA />} />
        <Route path="/our-services/labour-agreement" element={<LabourAgreement />} />
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
      </Routes>
      <Footer />
    </Router>
  )
}

export default App