import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { routes } from './helpers/routes.tsx'
import { AuthProvider } from './context/AuthContext/AuthProvider.tsx'

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <RouterProvider router={routes}/>
  </AuthProvider>
)
