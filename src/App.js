import { UserProvider } from './context/UserContext';
import { ModalProvider } from './context/ModalContext';
import { SparePartProvider } from './context/SparePartContext';

import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AdminPanel from './pages/AdminPanel';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />
  },
  {
    path: "/admin",
    element: <AdminPanel />
  },
  {
    path: "/login",
    element: <Login />
  }
]);
function App() {
  return (
    <SparePartProvider>
      <ModalProvider>
        <UserProvider>
          <RouterProvider router={router} />
        </UserProvider>
      </ModalProvider>
    </SparePartProvider>
  );
}

export default App;
