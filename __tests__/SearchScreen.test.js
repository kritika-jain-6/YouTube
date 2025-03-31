import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchScreen from "../app/(stack)navigation/SearchScreen";
import videos from "../app/dummy/videos.json";

describe("SearchScreen Component", () => {
  it("renders the search input and video list", () => {
    const { getByTestId } = render(<SearchScreen />);
    expect(getByTestId("search-input")).toBeTruthy();
  });

  it("renders the  video list", () => {
    const {  getAllByText } = render(<SearchScreen />);
    expect(getAllByText(videos[0].title).length).toBeGreaterThan(0);
  });

  it("filters videos based on search input", () => {
    const { getByTestId, getAllByText } = render(<SearchScreen />);
    const searchInput = getByTestId("search-input");
    fireEvent.changeText(searchInput, "Stranger Things");
    expect(getAllByText(videos[1].title).length).toBeGreaterThan(0);
  });

  it("filters videos based on search input", () => {
    const { getByTestId, queryByText } = render(<SearchScreen />);
    const searchInput = getByTestId("search-input");
    fireEvent.changeText(searchInput, "Stranger Things");
    expect(queryByText(videos[0].title)).toBeFalsy();
  });

  it("resets to the full list when search input is cleared", () => {
    const { getByTestId, getAllByText, queryByText } = render(<SearchScreen />);
    const searchInput = getByTestId("search-input");
    fireEvent.changeText(searchInput, "Stranger Things");
    expect(getAllByText(videos[1].title).length).toBeGreaterThan(0);
    expect(queryByText(videos[0].title)).toBeFalsy();
    fireEvent.changeText(searchInput, "");
    expect(getAllByText(videos[0].title).length).toBeGreaterThan(0);
  });
});
