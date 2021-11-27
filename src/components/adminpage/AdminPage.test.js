import React from "react";
import { render } from "@testing-library/react";
import AdminPage from "./AdminPage";

test("Rendering without crashing", () => {
  const div = document.createElement("div");

  render(
    <AdminPage
    />,
    div
  );
});