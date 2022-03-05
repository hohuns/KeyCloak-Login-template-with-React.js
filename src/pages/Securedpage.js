import React from "react";
import { useKeycloak } from "@react-keycloak/web";

const Secured = () => {
  const { keycloak } = useKeycloak();
  return (
    <div>
      <h1>Welcome to the Protected Page.</h1>
      {keycloak.token}
    </div>
  );
};

export default Secured;
