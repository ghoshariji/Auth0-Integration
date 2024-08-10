import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
const App = () => {
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();
  console.log("User data", user);
  return (
    <>
      {isAuthenticated ? (
        <button onClick={(e) => logout()}>Log Out</button>
      ) : (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </>
  );
};

export default App;
