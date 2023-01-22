import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import 'styles/index.css';
import 'styles/text.css';
import 'styles/title.css';
import 'styles/buttons.css';
import 'styles/container.css';
import 'styles/flex.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
