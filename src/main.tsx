import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import View from './Components/View.tsx'
import Hello from './Components/Hello.tsx';



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}></Route>
        
        <Route path='/View' element={<View />}></Route>
        <Route path="/test" element={<Hello />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>,
)
