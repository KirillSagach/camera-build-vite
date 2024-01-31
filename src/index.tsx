import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { store } from './components/store';
import { loadData } from './components/store/api-action';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(loadData());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
