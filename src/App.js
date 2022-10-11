import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, NavLink, Route, Router, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './lyouts/Main/Main';
import QuizDetails from './components/QuizDetails/QuizDetails';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: 'home',
          loader: async ()=>{
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({params}) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
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
