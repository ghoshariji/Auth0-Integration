import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Auth0Provider } from "@auth0/auth0-react";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-npr1iae5ah10v2r5.us.auth0.com"
      clientId="b9ls9zguCBbs3YKzHzyNWyaAj7caBxPQ"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>
);
