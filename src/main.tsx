import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PublicClientApplication, EventType, EventMessage, AuthenticationResult } from '@azure/msal-browser'
import { msalConfig } from './util/login-logic/auth-config.ts'


import App from './App.tsx'
import './index.css'
import NotFoundPage from './pages/NotFoundPage.tsx'
import { MsalProvider } from '@azure/msal-react'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <NotFoundPage/>
  },
]);

// MSAL should be instantiated otside of the component tree to prevent ir from being re-instantiated on re-renders
const msalInstance = new PublicClientApplication(msalConfig);
const accounts = msalInstance.getAllAccounts();

if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
}

msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      const payload = event.payload as AuthenticationResult;
      const account = payload.account;
      msalInstance.setActiveAccount(account);
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
    <RouterProvider router={router} />
    </MsalProvider>
  </React.StrictMode>,
)
