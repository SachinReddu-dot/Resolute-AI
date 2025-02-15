import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import FirebaseContext from './Context/FirebaseContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FirebaseContext>
        <App />
      </FirebaseContext>
    </BrowserRouter>
  </StrictMode>,
)
