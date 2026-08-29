import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Entete from './Entete.jsx'
import CarteRando from './CarteRando.jsx'
import App from './App.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Entete />
    <App/>
    <CarteRando/>
  </StrictMode>,
)
