import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Components/View.tsx'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        
        <Route path='/View' element={<View />}></Route>
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
