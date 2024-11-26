import { Routes, Route } from 'react-router-dom';
import { SignInPage, SignUpPage } from 'src/pages/auth';

const AppRoutes = () => (
  <Routes>
    <Route path="/sign-up" element={<SignUpPage />} />
    <Route path="/sign-in" element={<SignInPage />} />
    <Route path="*" element={<div />} />
  </Routes>
);

export default AppRoutes;
