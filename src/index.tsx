import React from 'react'
import ReactDOM from 'react-dom/client'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from 'pages/Main'

const root = ReactDOM.createRoot(document.getElementById('root') as Element)
root.render(
  <React.StrictMode>
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  </React.StrictMode>
)
