import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import LoginPage from "./LoginPage";

test("Rendering without crashing", () => {
  const div = document.createElement("div");

  render(
    <Router>
      <LoginPage />
    </Router>,
    div
  );
});