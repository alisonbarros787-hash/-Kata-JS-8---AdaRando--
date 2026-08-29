import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import  Entete from './Entete.jsx'
import CarteRando from './CarteRando.jsx'
import ListeRando from './ListeRando.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Entete />
    <ListeRando/>
    <CarteRando/>
  </StrictMode>,
)
