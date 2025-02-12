import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ContextProvider } from './contexts/contextProvider.jsx';
import { Provider } from 'react-redux';
import store from "./redux/store";

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </ContextProvider>
    </Provider>,
)
