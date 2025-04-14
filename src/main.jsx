// App.js or index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@react-oauth/google';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId="914094044044-7gam497dp39fannga65nk9t1t1ignmgt.apps.googleusercontent.com">
    <App />
  </GoogleOAuthProvider>
);
