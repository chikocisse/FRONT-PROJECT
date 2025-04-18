import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Layout } from './components/Layout';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { ResetPassword } from './pages/ResetPassword';
import { Dashboard } from './pages/Dashboard';
import { ExerciseList } from './pages/ExerciseList';
import { ExerciseCreate } from './pages/ExerciseCreate';
import { SubmissionList } from './pages/SubmissionList';
import { StudentList } from './pages/StudentList';
import { useAuthStore } from './stores/authStore';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuthStore();
  return user ? <>{children}</> : <Navigate to="/login" />;
};

const ProfessorRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuthStore();
  return user?.role === 'professor' ? <>{children}</> : <Navigate to="/" />;
};

function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<Dashboard />} />
          <Route
            path="exercises/create"
            element={
              <ProfessorRoute>
                <ExerciseCreate />
              </ProfessorRoute>
            }
          />
          <Route path="exercises" element={<ExerciseList />} />
          <Route
            path="submissions"
            element={
              <ProfessorRoute>
                <SubmissionList />
              </ProfessorRoute>
            }
          />
          <Route path="mes-soumissions" element={<SubmissionList />} />
          <Route
            path="students"
            element={
              <ProfessorRoute>
                <StudentList />
              </ProfessorRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;