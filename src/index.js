import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//React Router
import { BrowserRouter } from 'react-router-dom';
//Redux
import { Provider } from 'react-redux';
import store from './app/store';
//redux persist
import { PersistGate } from 'redux-persist/integration/react';
import persistStore from 'redux-persist/es/persistStore';
//redux persist
const persistor = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

      <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
        </PersistGate>
      </Provider>
  </React.StrictMode>
);