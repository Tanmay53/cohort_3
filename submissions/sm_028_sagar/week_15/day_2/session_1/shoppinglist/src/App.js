import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import Route from './Routes'

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Route />
      </BrowserRouter>
    </div>
  )
}
