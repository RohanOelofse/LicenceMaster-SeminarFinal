import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import App from './App.tsx'
import CreateAccount from './screens/CreateAccount.tsx';
import ContactUs from './screens/ContactUs.tsx';

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
  }
]);


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
