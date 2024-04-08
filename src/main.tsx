import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import {
  EventType,
  EventMessage,
  AuthenticationResult,
} from "@azure/msal-browser";


import "./index.css";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import { MsalProvider } from "@azure/msal-react";
import LoginPage from "./pages/LoginPage.tsx";
import ProtectedRoute from "./components/ProtectedRoute.tsx";
import HomePage from "./pages/(logged-in)/HomePage.tsx";
import AuthProvider from "./components/AuthProvider.tsx";
import { msalInstance } from "./util/login-logic/msalnstance.ts";
import CreeateCompany from "./components/CreateCompany.tsx";
import Operations from "./components/Operations.tsx";
import CreeateProduct from "./components/CreateProduct.tsx";
import ListProducts from "./components/ListProducts.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>
      
    ),
    children: [
      {
        path: "/",
        element: (<ProtectedRoute>
        <Operations />
      </ProtectedRoute>)
      },
      {
        path: "/operation/create-company",
        element: (<ProtectedRoute>
        <CreeateCompany />
      </ProtectedRoute>)
      },
      {
        path: "/operation/create-product",
        element: (<ProtectedRoute>
        <CreeateProduct />
      </ProtectedRoute>)
      },
      {
        path: "/operation/list-products",
        element: (<ProtectedRoute>
        <ListProducts />
      </ProtectedRoute>)
      }
    ],
    errorElement: <NotFoundPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/login2",
    element: <LoginPage />,
  },
]);

await msalInstance.initialize();
let isSignedIn : boolean = false;
const accounts = msalInstance.getAllAccounts();

if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0]);
  isSignedIn = true;
}

msalInstance.addEventCallback((event: EventMessage) => {
  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult;
    const account = payload.account;
    console.log("pay: "+payload);
    msalInstance.setActiveAccount(account);
    isSignedIn = true;
  }
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <AuthProvider isSignedIn={isSignedIn}>
        <RouterProvider router={router} />
      </AuthProvider>
    </MsalProvider>
  </React.StrictMode>
);
