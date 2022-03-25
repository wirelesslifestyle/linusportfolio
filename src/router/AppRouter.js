import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import PageHome from '../pages/PageHome';
import PageAbout from '../pages/PageAbout';
import PageWork from '../pages/PageWork';
import PageSubwork from '../pages/PageSubwork';
import { APP_FOLDER_NAME } from '../globals/globals';

function AppRouter() {

  return (
    
    <BrowserRouter basename={APP_FOLDER_NAME}>
    <div className="wrapper">
      <Header />
      <AnimatePresence initial={true} exitBeforeEnter>
        <Routes>
            <Route path="" element={<PageHome />} />
            <Route path="work" element={<PageWork />} />
            <Route path="work/:id" element={<PageSubwork /> } />
            <Route path="about" element={<PageAbout />} />
        </Routes> 
      </AnimatePresence>
      <Footer />
    </div>
  </BrowserRouter>
  );
  
}

export default AppRouter;
