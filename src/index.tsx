import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import { Provider } from 'react-redux'
import { store } from './redux/store'
import Home from './ui/pages/home/Home'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

