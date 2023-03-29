import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import './index.css'
import store, { StoreContext } from './stores'
import Todos from './Todos'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <StoreContext.Provider value={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='/todos/*' element={<Todos />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </StoreContext.Provider>
  </React.StrictMode>
)
