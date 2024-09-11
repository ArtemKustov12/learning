import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Element from './lesson48';
import Greeting from './lesson49';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <div>
        <App />
        <Element />
        <Greeting name='Bob'/>
      </div>
    </React.StrictMode>
  );
};

renderApp();
