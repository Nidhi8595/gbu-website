import Home from "../pages/Home.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
 
 export default function AppRouter() {
  return (
    <Router>
     
      <Routes>
           {/* About Us Routes */}
        <Route path="/" element={ <Home/>} />
        <Route path="/about-us/vision-mission" element={<h1>Vision & Mission</h1>} />
        <Route path="/about-us/chancellor-message" element={<h1>Chancellor's Message</h1>} />
        <Route path="/about-us/vice-chancellor-message" element={<h1>Vice-Chancellor's Message</h1>} />
        <Route path="/about-us/governance-committees" element={<h1>Governance & Committees</h1>} />
        <Route path="/about-us/strategic-perspective" element={<h1>GBU Strategic Perspective</h1>} />
        <Route path="/about-us/policies-statutes-rti" element={<h1>Policies, Statutes & RTI</h1>} />
        <Route path="/about-us/mandatory-disclosures" element={<h1>Mandatory Disclosures</h1>} />
        <Route path="/about-us/media-coverage" element={<h1>Media Coverage</h1>} />

        {/* Academics */}
        <Route path="/academics" element={<h1>Academics</h1>} />

        {/* Admissions Routes */}
        <Route path="/admissions/admission-process" element={<h1>Admission Process</h1>} />
        <Route path="/admissions/courses-offered" element={<h1>Courses Offered (UG | PG | PhD)</h1>} />
        <Route path="/admissions/eligibility-reservation" element={<h1>Eligibility & Reservation</h1>} />
        <Route path="/admissions/fee-structure-prospectus" element={<h1>Fee Structure & Prospectus</h1>} />
        <Route path="/admissions/international-admissions" element={<h1>International Admissions</h1>} />

        {/* Research Routes */}
        <Route path="/research/research-centers" element={<h1>Research Centers and Labs</h1>} />
        <Route path="/research/publications-patents" element={<h1>Publications and Patents</h1>} />
        <Route path="/research/incubation-innovation" element={<h1>Incubation and Innovation</h1>} />
        <Route path="/research/startups" element={<h1>Startups</h1>} />
        <Route path="/research/funded-projects" element={<h1>Funded Projects</h1>} />
        <Route path="/research/irp-cell" element={<h1>IRP Cell</h1>} />
        <Route path="/research/research-highlights" element={<h1>Research Highlights</h1>} />

        {/* Campus Life Routes */}
        <Route path="/campus-life/hostel-facilities" element={<h1>Hostel Facilities</h1>} />
        <Route path="/campus-life/sports-fitness" element={<h1>Sports & Fitness</h1>} />
        <Route path="/campus-life/cultural-activities" element={<h1>Cultural Activities</h1>} />
        <Route path="/campus-life/clubs-societies" element={<h1>Clubs & Societies</h1>} />
        <Route path="/campus-life/health-wellness" element={<h1>Health & Wellness</h1>} />
        <Route path="/campus-life/student-support-services" element={<h1>Student Support Services</h1>} />
        <Route path="/campus-life/campus-events" element={<h1>Campus Events</h1>} />

        {/* Announcements Routes */}
        <Route path="/announcements/news-updates" element={<h1>News & Updates</h1>} />
        <Route path="/announcements/event-calendar" element={<h1>Event Calendar</h1>} />
        <Route path="/announcements/notices" element={<h1>Notices</h1>} />
        <Route path="/announcements/press-releases" element={<h1>Press Releases</h1>} />
        <Route path="/announcements/media-gallery" element={<h1>Media Gallery</h1>} />
        <Route path="/announcements/newsletter" element={<h1>Newsletter</h1>} />

        {/* Placements Routes */}
        <Route path="/placements/placement-process" element={<h1>Placement Process</h1>} />
        <Route path="/placements/top-recruiters" element={<h1>Top Recruiters</h1>} />
        <Route path="/placements/internship-opportunities" element={<h1>Internship Opportunities</h1>} />
        <Route path="/placements/career-counseling" element={<h1>Career Counseling</h1>} />
        <Route path="/placements/placement-statistics" element={<h1>Placement Statistics</h1>} />

        {/* Alumni Routes */}
        <Route path="/alumni/alumni-network" element={<h1>Alumni Network</h1>} />
        <Route path="/alumni/alumni-events" element={<h1>Alumni Events</h1>} />
        <Route path="/alumni/alumni-achievements" element={<h1>Alumni Achievements</h1>} />
        <Route path="/alumni/become-mentor" element={<h1>Become a Mentor</h1>} />

        
      </Routes>
      
    </Router>
  );
}

 
