import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './store/store'
import { MantineProvider } from '@mantine/core'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MantineProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </MantineProvider>
    </StrictMode>,
)
