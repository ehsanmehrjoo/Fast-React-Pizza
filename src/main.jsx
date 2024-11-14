import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import  "./index.css"
import { Provider } from 'react-redux'
import store from './store.js'
// import { OrderProvider } from './features/order/OrderContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      {/* <OrderProvider> */}

       <Provider store={store}>
      <App />
  </Provider>
      {/* </OrderProvider> */}
  </React.StrictMode>,
)
