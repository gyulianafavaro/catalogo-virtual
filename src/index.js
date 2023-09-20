import React from 'react';
import ReactDOM from 'react-dom/client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './Login';
import Cadastro from "./Cadastro";
import Filmes from './Filmes';
import EditaFilme from './EditaFilme';
import "./app.css";


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#CBCBCB',
      light: '#BD0A0A',
      dark: '#BD0A0A',
      contrastText: '#FEFFF6',
    },
    secondary: {
      main: '#FEFFF6',
      light: '#BD0A0A',
      dark: '#BD0A0A',
    },
    text: {
      primary: '#BD0A0A',
      secondary: '#000',
      hint: '#ffb74d',
      disabled: '#BD0A0A',
    },
    error: {
      main: '#d50000',
      contrastText: '#ffffff',
    },
    background: {
      default: '#BD0A0A',
    },
    warning: {
      main: '#ffc80d',
    },
    info: {
      main: '#FEFFF6',
    },
    success: {
      main: '#0ebd3a',
    },
    divider: '#FEFFF6',
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/cadastro",
    element: <Cadastro />
  },
  {
    path: "/filmes",
    element: <Filmes />
  },
  {
    path: "/edicao/:id",
    element: <EditaFilme />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>
);
