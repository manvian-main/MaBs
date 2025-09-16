import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeComponent from './Components/Home/HomeComponent.jsx'
import ProductComponent from './Components/Product/ProductComponent.jsx'
import AboutComponent from './Components/About/AboutComponent.jsx'
import Contact from './Components/ContactUs/Contact.jsx'
import MainLayout from './Components/Layout/MainLayout.jsx'
import InsightsComponent from './Components/Insights/InsightsComponent.jsx'
import Careers from './Components/Careers/Careers.jsx'
import MultiMedia from './Components/Service/MultiMedia.jsx'
import TechSolution from './Components/Service/TechSolution.jsx'
import DigitalMarketing from './Components/Service/DigitalMarketing.jsx'
import RAAS from './Components/Service/RAAS.jsx'
import Saas from './Components/Service/SaaS.jsx'
import Sales from './Components/Service/Sales.jsx'
import Business from './Components/Service/Business.jsx'
import MultiMedia_portfolio from './Components/Portfolio/MultiMedia_portfolio.jsx'
import Technology_Portfolio from './Components/Portfolio/Techhnology_portfolio.jsx'
import Articles from './Components/Blogs/Articles.jsx'
import Blogs from './Components/Blogs/Blogs.jsx'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <HomeComponent /> },
      { path: '/who', element: <AboutComponent /> },
      { path: "/insights", element: <InsightsComponent /> },
      { path: "/careers", element: <Careers /> },
      { path: '/product', element: <ProductComponent /> },
      { path: '/contact', element: <Contact /> },
      { path: "/service/RAAS", element: <RAAS /> },
      { path: "/service/Sales", element: <Sales /> },
      { path: "/service/SaaS", element: <Saas /> },
      { path: "/service/multimedia", element: <MultiMedia /> },
      { path: "/service/TechSolution", element: <TechSolution /> },
      { path: "/service/DigitalMarketing", element: <DigitalMarketing /> },
      { path: "/service/Business", element: <Business /> },
      { path: "/portfolio/Multimedia", element: <MultiMedia_portfolio /> },
      { path: "/portfolio/Technology", element: <Technology_Portfolio /> },
      { path: "/Insights/Articles", element: <Articles /> },
      { path: "/Insights/Blogs/:id", element: <Blogs /> }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>
)
