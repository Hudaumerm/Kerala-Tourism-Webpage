//import logo from './logo.svg';
//import './App.css';
import CarousalHeader from './Components/CarousalHeader';
import ExperienceKerala from './Components/ExperienceKerala';
import ThingsTodo from './Components/ThingsTodo';
import TopDestination from './Components/TopDestination';
import { Container } from 'react-bootstrap'
import TourPackages from './Components/TourPackages';
import WhatsNew from './Components/WhatsNew';
import WhatsHappening from './Components/WhatsHappening';
import ImageGallery from './Components/ImageGallery';
import ConnectWithUs from './Components/ConnectWithUs';
import FooterItem from './Components/FooterItem';
import ClientSection from './Components/ClientSection';
import NavbarHeader from './Components/NavbarHeader';
import PlanYourTrip from './Components/PlanYourTrip';
import { BrowserRouter, Route, Routes } from'react-router-dom'
import WhereToStay from './ExternalComponents/WhereToStay';
import WhereToStayMain from '../src/WhereToStayMain';

function App() {
  return (

    <div className="App">
      <BrowserRouter>
      <NavbarHeader/>
      <Routes>
      <Route path='/'></Route>
        <Route path='/experiencekerala' element={<ExperienceKerala/>}></Route>
        <Route path='/wheretogo' element={<TopDestination/>}></Route>
        <Route path='/wheretostay' element={<WhereToStayMain/>}></Route>


      </Routes>

      </BrowserRouter>

      
      <CarousalHeader/>
      <ExperienceKerala/>
      <TopDestination />
      <ThingsTodo/>
      <WhatsNew/>
      <WhatsHappening/>
      <TourPackages/>
      <PlanYourTrip/>
      <ImageGallery/>
      <ConnectWithUs/>
      <FooterItem/>
      <ClientSection/>

    </div>
  );
}

export default App;
