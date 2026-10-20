import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <div>
      <h1>Welcome to My App</h1>
      <p>This is a simple React app.</p>
    </div>
  </StrictMode>,
)
