import React from "react";
import { render } from "@testing-library/react";
import ConsolePage from "./ConsolePage";

test("Rendering without crashing", () => {
  const div = document.createElement("div");

  render(
    <ConsolePage
    />,
    div
  );
});