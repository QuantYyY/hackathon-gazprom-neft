import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <Provider store={store}>
        <Theme preset={presetGpnDefault}>
            <App />
        </Theme>
    </Provider>
)
