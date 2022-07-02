import React from "react";
import Userfront from "@userfront/react";

Userfront.init("demo1234");

const LoginForm = Userfront.build({
  toolId: "alnkkd"
});

function Log() {
  return <LoginForm />;
}

export default Log;