import React from "react";
import { render } from "@testing-library/react";
import ControllerPage from "./ControllerPage";

test("Rendering without crashing", () => {
  const div = document.createElement("div");

  render(
    <ControllerPage
    />,
    div
  );
});