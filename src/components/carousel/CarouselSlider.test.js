import React from "react";
import { render } from "@testing-library/react";
import CarouselSlider from "./CarouselSlider";

test("Rendering without crashing", () => {
  const div = document.createElement("div");

  render(
    <CarouselSlider
    />,
    div
  );
});