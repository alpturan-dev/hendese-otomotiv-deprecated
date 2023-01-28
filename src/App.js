import { UserProvider } from './context/UserContext';

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
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
