import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginScreen, RegisterScreen, TasksScreen } from "../screens";

export const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/tasks" element={<TasksScreen />} />
    </Routes>
  </Router>
);
