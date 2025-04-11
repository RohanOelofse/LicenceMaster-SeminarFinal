import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.tsx'
import CreateAccount from './screens/CreateAccount.tsx';
import ContactUs from './screens/ContactUs.tsx';
import AboutUs from './screens/AboutUs.tsx';
import MainMenu from './screens/MainMenu.tsx';
import TrafficSignals from './screens/TrafficSignals.tsx';
import PracticeExam from './screens/PracticeExam.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/CreateAccount",
    element: <CreateAccount />
  },
  {
    path: "/ContactUs",
    element: <ContactUs />
  },
  {
    path: "/AboutUs",
    element: <AboutUs />
  },
  {
    path: "/MainMenu",
    element: <MainMenu />
  },
  {
    path: "/TrafficSignals",
    element: <TrafficSignals />
  },
  {
    path: "/PracticeExam",
    element: <PracticeExam />
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
