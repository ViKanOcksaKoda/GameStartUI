import React from "react";
import { render } from "@testing-library/react";
import CategoryCard from "./CategoryCard";

test("Rendering without crashing", () => {
  const div = document.createElement("div");

  render(
    <CategoryCard
        infoImage={null}
        cardTitleText={null}
        infoText={null}
        priceText={null}
    />,
    div
  );
});