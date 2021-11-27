import React from "react";
import { render } from "@testing-library/react";
import RegistrationPage from "./RegistrationPage";

test("Rendering without crashing", () => {
  const div = document.createElement("div");

  render(
    <RegistrationPage
    />,
    div
  );
});