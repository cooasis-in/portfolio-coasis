import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import './index.css'
import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <App />
    <Footer/>
  </StrictMode>,
)
