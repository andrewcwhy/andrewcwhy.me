import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import { HelmetProvider } from 'react-helmet-async'
import App from '@/App'
import '@/styles/index.css'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <HelmetProvider>
                <App />
            </HelmetProvider>
        </BrowserRouter>
    </StrictMode>
)
