import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { UsersList } from './components/UsersList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: 'users-list',
    element: <UsersList />
  }
])