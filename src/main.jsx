import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from '@mui/material/styles';
import { LightTheme } from './themes/Light';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ThemeProvider theme={LightTheme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>,
)
