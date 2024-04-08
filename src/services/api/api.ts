import axios from "axios";
import { msalInstance } from "../../util/login-logic/msalnstance";

async function getToken(): Promise<string> {
  const currentAccount = msalInstance.getActiveAccount();
    console.log("entra antes de current account");
    
  if (currentAccount) {
    const accessTokenRequest = {
      scopes: ["api://3e6ba0dd-bafc-4064-a810-f5916c17470e/back.MA"],
      account: currentAccount,
    };
    console.log("agrega el evento para aquirir token");
    
    const accessTokenResponse = await msalInstance.acquireTokenSilent(
      accessTokenRequest
    );

    console.log("token adquirido:", accessTokenResponse.accessToken);
    return `Bearer ${accessTokenResponse.accessToken}`;
  }
  return "false";
}

const api = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-Type": "application/json",
  },
  transformRequest: [
    (data) => {
      //return JSON.stringify(data);
      return data;
    },
  ],
  transformResponse: [
    (data) => {
      //return JSON.parse(data);
      return data;
    },
  ],
});


export default api;
