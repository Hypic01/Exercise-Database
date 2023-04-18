import { Navbar, Hero, Footer, WorkoutDetail } from './components';
import { Home, Search, NotFound } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './util/ScrollToTop';

export default function App() {
  
  return (
    <div className="overflow-hidden relative">
{/*       <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[500px] z-[-1] right-[-23%] top-[38%]">
        <path fill="#BAE6FF" d="M49.7,-11.6C58.9,12.2,57,44.1,37.2,60.8C17.4,77.4,-20.4,78.8,-43.9,61.5C-67.4,44.2,-76.5,8.2,-66.8,-16.3C-57.1,-40.8,-28.5,-53.8,-4.2,-52.4C20.2,-51.1,40.5,-35.4,49.7,-11.6Z" transform="translate(100 100)" />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[500px] z-[-1] left-[-22%] bottom-[10%]">
        <path fill="#FFD6E8" d="M65,-23.5C73.3,4.3,61.4,36.3,42,48.1C22.6,59.9,-4.4,51.6,-27.6,35.4C-50.8,19.2,-70.1,-5,-64.9,-28.6C-59.7,-52.2,-29.8,-75.4,-0.7,-75.1C28.4,-74.9,56.7,-51.3,65,-23.5Z" transform="translate(100 100)" />
      </svg>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute w-[500px] z-[-1] top-[-16%] right-[20%]">
        <path fill="#A7F0BA" d="M47.9,-19.1C54.6,5,47.3,30,27.5,46.4C7.8,62.8,-24.5,70.5,-46.5,56.3C-68.5,42.2,-80.1,6.2,-70.7,-21.7C-61.2,-49.6,-30.6,-69.3,-5,-67.7C20.6,-66.1,41.2,-43.1,47.9,-19.1Z" transform="translate(100 100)" />
      </svg> */}
      <BrowserRouter>
        <ScrollToTop/>
        <Navbar />   
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:id/:search" element={<Search/>}></Route>
          <Route path="/:exercise" element={<WorkoutDetail/>}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

