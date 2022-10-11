import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, NavLink, Route, Router, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import Main from './lyouts/Main/Main';
import QuizDetails from './components/QuizDetails/QuizDetails';
import ErrorPage from './components/ErrorPage/ErrorPage';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: 'home',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element:<Home></Home>
        },
        {
          path: '/quiz/:quizId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
          },
          element: <QuizDetails></QuizDetails>
        },
        {
          path: 'chart',
          loader: () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },
        {
          path: '*', element: <ErrorPage></ErrorPage>
        }

      ]
    },
    {
      path: '*', element: <p>Sorry, The link is broken. Please go to Home Page</p>
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
