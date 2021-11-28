import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Navigationbar from "./Navigationbar";

test("Rendering without crashing", () => {
  const div = document.createElement("div");

  render(
    <Router>
      <Navigationbar />
    </Router>,
    div
  );
});