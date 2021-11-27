import React from "react";
import { render } from "@testing-library/react";
import GamePage from "./GamePage";

test("Rendering without crashing", () => {
  const div = document.createElement("div");

  render(
    <GamePage
    />,
    div
  );
});