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
import ProductPage from './pages/ProductPage';
import Contact from './pages/Contact';
import CategoryPage from './pages/CategoryPage';
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
  },
  {
    path: "/product/:productId",
    element: <ProductPage />
  },
  {
    path: "/iletisim",
    element: <Contact />
  },
  {
    path: `/kategori/:categoryName`,
    element: <CategoryPage />
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
