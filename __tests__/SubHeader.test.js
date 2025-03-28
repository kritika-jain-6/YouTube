import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SubHeader from "../app/components/SubHeader";

describe("SubHeader Component", () => {
  it("renders the SubHeader component correctly", () => {
    const { getByTestId } = render(<SubHeader />);
    expect(getByTestId("subheader-container")).toBeTruthy();
  });

  it("renders all category buttons", () => {
    const categories = [
      "All",
      "Gaming",
      "Discovery",
      "Cartoon",
      "Music",
      "News",
      "Live",
      "Posts",
      "Recently Upload",
    ];

    const { getByTestId } = render(<SubHeader />);

    categories.forEach((category) => {
      expect(getByTestId(`category-button-${category}`)).toBeTruthy();
    });
  });

  it("changes button style when clicked", () => {
    const { getByTestId } = render(<SubHeader />);

    const categoryButton = getByTestId("category-button-Gaming");

    // Before clicking, it should have default styles
    expect(categoryButton.props.style.backgroundColor).toBe("#f1f1f1");

    // Click the button
    fireEvent.press(categoryButton);

    // After clicking, it should have the active styles
    expect(categoryButton.props.style.backgroundColor).toBe("#000000");
  });
});
