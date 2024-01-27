import "./App.css";
import companiesJSON from './companies.json'
import techJSON from './technologies.json'

import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import HomePage from './pages/HomePage.jsx'
import CompanyPage from './pages/CompanyPage.jsx'
import TechnologyPage from './pages/TechnologyPage.jsx'


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path={'/'} element={<HomePage companies={companiesJSON} />} />
        <Route path='/company/:companySlug' element={<CompanyPage companies={companiesJSON} />} />
        <Route path="/tech/:slug" element={<TechnologyPage technologies={techJSON} />} />
      </Routes>
    </div>
  );
}

export default App;
