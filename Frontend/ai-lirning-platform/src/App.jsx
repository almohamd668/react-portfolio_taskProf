import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { AuthProvider } from "./contexts/authContext";
import ProtectedRoute from "./auth/ProtectedRoute";

const LoginPage = React.lazy(() => import("./auth/LoginPage"));
const RegisterPage = React.lazy(() => import("./auth/RegisterPage"));
const DashboardPage = React.lazy(() => import("./dashboard/DashboardPage"));
// const DocumentListPage = React.lazy(() => import("./dashboard/DocumentListPage"));
// const DocumentDetailPage = React.lazy(() => import("./dashboard/DocumentDetailPage"));
// const FlashcardsPage = React.lazy(() => import("./dashboard/FlashcardsPage"));
// const FlashcardsListPage = React.lazy(() => import("./dashboard/FlashcardsListPage"));
// const QuizTakePage = React.lazy(() => import("./dashboard/QuizTakePage"));
// const QuizResultPage = React.lazy(() => import("./dashboard/QuizResultPage"));
// const ProfilePage = React.lazy(() => import("./dashboard/ProfilePage"));

function App() {
  const isAuthenticated = false
  const loading = false

  if (loading) {
    return (
      <div className="">
        <div>Loading...</div>
      </div>
    )
  }
  return (
    <AuthProvider>
    <Router>
    <Routes>
<Route
  path="/"
  element={
    isAuthenticated ? (
      <Navigate to="/dashboard" replace />
    ) : (
      <Navigate to="/login" replace />
    )
  }
/>

<Route path="/login" element={<LoginPage />} />
<Route path="/register" element={<RegisterPage />} />

<Route
  path="/dashboard"
  element={
    isAuthenticated ? (
      <DashboardPage />
    ) : (
      <Navigate to="/login" replace />
    )
  }
/>
</Routes>
</Router>
    </AuthProvider>
  );
}

export default App;