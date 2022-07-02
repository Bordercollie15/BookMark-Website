import React from "react";
import Userfront from "@userfront/react";

Userfront.init("demo1234");

const SignupForm = Userfront.build({
  toolId: "nkmbbm"
});

export default function Sign() {
  return <SignupForm />;
}
