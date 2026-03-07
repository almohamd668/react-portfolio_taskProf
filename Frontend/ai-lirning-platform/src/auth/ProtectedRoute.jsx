import { Navigate, Outlet } from "react-router-dom"
import AppLayout from "../Components/Layout/AppLayout"

const ProtectedRoute = () => {
  const isAuthenticated = false
  const loading = false

  if (loading) {
    return <div>Loading...</div>
  }

  return isAuthenticated ? (
    <AppLayout>
      <Outlet />
    </AppLayout>
  ) : (
    <Navigate to="/loginPage" replace />
  )
}

export default ProtectedRoute