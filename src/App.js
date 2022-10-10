import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, NavLink, Route, Router, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './lyouts/Main/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          element: <Home></Home>
        },
        {
          path: '*', element: <p>Sorry, The link is broken. Please go to Home Page</p>
        }

      ]
    },
    {
      path:'*', element: <p>Sorry, The link is broken. Please go to Home Page</p>
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}>
        <Router></Router>
      </RouterProvider>
    </div>
  );
}

export default App;
