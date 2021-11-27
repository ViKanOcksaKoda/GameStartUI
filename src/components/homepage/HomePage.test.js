import React from "react";
import { render } from "@testing-library/react";
import HomePage from "./HomePage";

test("Rendering without crashing", () => {
  const div = document.createElement("div");

  render(
    <HomePage
    />,
    div
  );
});