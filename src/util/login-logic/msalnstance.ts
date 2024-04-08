import {
    PublicClientApplication,
  } from "@azure/msal-browser";
import { msalConfig } from "./auth-config";


// MSAL should be instantiated otside of the component tree to prevent ir from being re-instantiated on re-renders
export const msalInstance = new PublicClientApplication(msalConfig);