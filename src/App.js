import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from './pages/Home/Home'
import Partners from './pages/Partners/Partners'
import Timeline from './pages/Timeline/Timeline'
import Shop from './pages/Shop/Shop'
import Contact from './pages/Contact/Contact'
import TC from './pages/Other/TandC'
import PP from './pages/Other/Privacy'
import Layout from './pages/Layout'
import NoPage from './pages/Nopage'

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='twol-site' element={<Home />} />
        <Route path="Partners" element={<Partners />} />
        <Route path="Timeline" element={<Timeline />} />
        <Route path="Shop" element={<Shop />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="TermsAndConditions" element={<TC />} />
        <Route path="PrivacyPolicy" element={<PP />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </HashRouter>
  );
}

export default App;
