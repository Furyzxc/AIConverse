import React from 'react'
import ReactDOM from 'react-dom/client'
import { AppEntry } from './app/appEntry.tsx'
import { Provider } from "react-redux";
import { store } from "./app/appStore.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AppEntry/>
        </Provider>
    </React.StrictMode>,
)
