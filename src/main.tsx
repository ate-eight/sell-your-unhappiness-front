import '../font.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App.tsx';
// import enableMocking from './mocks/enbaleMocking.ts';

// enableMocking();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
