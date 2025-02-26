import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/Route/ProtectedRoute";

import Landing from "./pages/Landing/Landing";

import Logout from "./pages/Landing/SubMenu/Logout";
import Register from "./pages/Landing/SubMenu/Register";
import ForgetPassword from "./pages/Landing/SubMenu/ForgetPassword";

import Invitation from "./pages/Invitation/Invitation";
import DashBoard from "./pages/DashBoard/DashBoard";
import Group from "./pages/Group/Group";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/logout/" Component={Logout} />
          <Route path="/register/" Component={Register} />
          <Route path="/forgot-password/" Component={ForgetPassword} />

          <Route
            path="/invitation/"
            element={
              <ProtectedRoute>
                <Invitation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/@me/"
            element={
              <ProtectedRoute>
                <DashBoard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/group/:groupId/:channelId?"
            element={
              <ProtectedRoute>
                <Group />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
