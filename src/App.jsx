

import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

/*  */
import RootLayout from './Components/RootLayout';
import Home from './Pages/Home';
import AboutPage from './Pages/about-us';
import BrandStrategy from './Pages/brand-strategy';
import LogoDesign from './Pages/Logo-Design';
import BroucherDesign from './Pages/Broucher-Design';
import Collatraldesign from './Pages/collatral-design';
import Videoandadfilms from  './Pages/video-and-adfilms';
import UiUxDesigner from  './Pages/Ui-Ux-Designer';
import WebDevelopment from  './Pages/web-development';
import WebApplication from  './Pages/web-application';
import ECommerce from  './Pages/E-commerce-solution';
import WebHostingMaintenance from  './Pages/web-hosting-and-maintainance';
import SocialMediaManagment from  './Pages/social-media-managment';
import SearchEngineOptimization from  './Pages/search-engine-optimization';
import SearchEngineMarketing from  './Pages/search-engine-Marketing';
import Clients from './Pages/Clients';
import  OurWorks from './Pages/Our-Works';
import  Contact from './Pages/Contact';
import Blogs from './Pages/Blogs';
import Wordpress from './Pages/wordpress';
import GoogleMyBussiness from './Pages/Google-my-business';
import GoogleAds from './Pages/google-ads';
import LeadGeneration from './Pages/lead-generation';



const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}  errorElement={<h1>Page Not Found</h1>}>
<Route index element={<Home/>}/>
<Route path='/about-us' element={<AboutPage/>}/>
<Route path='/brand-strategy' element={<BrandStrategy/>}/>
<Route path='/Logo-Design' element={<LogoDesign/>}/>
<Route path='/Broucher-Design' element={<BroucherDesign/>}/>
<Route path='/collatral-design' element={<Collatraldesign/>}/>
<Route path='/Ui-Ux-Designer' element={<UiUxDesigner/>}/>
<Route path='/video-and-adfilms' element={<Videoandadfilms/>}/>
<Route path='/Web-Development' element={<WebDevelopment/>}/>
<Route path='/Web-application' element={<WebApplication/>}/>
<Route path='/E-Commerce' element={<ECommerce/>}/>
<Route path='/wordpress' element={<Wordpress/>}/>
<Route path='/Web-Hosting-Maintenance' element={<WebHostingMaintenance/>}/>
<Route path='/social-media-managment' element={<SocialMediaManagment/>}/>
<Route path='/Search-Engine-Optimization' element={<SearchEngineOptimization/>}/>
<Route path='/Search-Engine-Marketing' element={<SearchEngineMarketing/>}/>
<Route path='/Lead-Generation' element={<LeadGeneration/>}/>
<Route path='/Google-Ads' element={<GoogleAds/>}/>
<Route path='/Google-My-Business' element={<GoogleMyBussiness/>}/>
<Route path='/Our-Works' element={<OurWorks/>}/>
<Route path='/clients' element={<Clients/>}/>
<Route path='/blogs' element={<Blogs/>}/>
<Route path='/contact' element={<Contact/>}/>
    </Route>
  )
)


function App() {


  return (
    <div>
 
     <RouterProvider router={router} />
    
    </div>
  )
}

export default App
