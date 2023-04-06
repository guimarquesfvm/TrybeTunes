import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import AppProvider from './context/AppProvider'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AppProvider>
      <App />
    </AppProvider>
  </BrowserRouter>
)
