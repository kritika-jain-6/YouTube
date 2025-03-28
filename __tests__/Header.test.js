import React from "react";
import { render } from "@testing-library/react-native";
import Header from "../app/components/Header";

describe("Header Component", () => {
  it("renders the Header component correctly", () => {
    const { getByTestId } = render(<Header />);
    
    expect(getByTestId("header-container")).toBeTruthy();
    expect(getByTestId("yt-logo")).toBeTruthy();
    expect(getByTestId("cast-btn")).toBeTruthy();
    expect(getByTestId("bell-btn")).toBeTruthy();
    expect(getByTestId("search-btn")).toBeTruthy();
  }); 

  
});
