import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main, { MainLoader } from "./layouts/Main";
import Dashboard, { dashboardAction, dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";
import { logoutAction } from "./actions/logout";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const route = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: MainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        action: dashboardAction,
        errorElement: <Error />
      },
      {
        path: "logout",
        action: logoutAction
      }
    ]
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={route} />
      <ToastContainer />
    </div>
  )
}

export default App