import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import SearchHeader from "../app/(stack)navigation/SearchHeader";
import videos from "../app/dummy/videos.json";

describe("SearchHeader Component", () => {
  it("renders the search input and video list", () => {
    const { getByTestId, getAllByText } = render(<SearchHeader />);

    // Check if search input is present
    expect(getByTestId("search-input")).toBeTruthy();

    // Check if at least one instance of the first video title appears
    expect(getAllByText(videos[0].title).length).toBeGreaterThan(0);
  });

  it("filters videos based on search input", () => {
    const { getByTestId, getAllByText, queryByText } = render(<SearchHeader />);

    const searchInput = getByTestId("search-input");

    // Simulate typing "Stranger Things" into the search bar
    fireEvent.changeText(searchInput, "Stranger Things");

    // Ensure filtered results contain the expected title
    expect(getAllByText(videos[1].title).length).toBeGreaterThan(0);

    // Ensure a video that doesn't match isn't present
    expect(queryByText(videos[0].title)).toBeFalsy();
  });

  it("resets to the full list when search input is cleared", () => {
    const { getByTestId, getAllByText, queryByText } = render(<SearchHeader />);

    const searchInput = getByTestId("search-input");

    fireEvent.changeText(searchInput, "Stranger Things");

    expect(getAllByText(videos[1].title).length).toBeGreaterThan(0);
    expect(queryByText(videos[0].title)).toBeFalsy();

    fireEvent.changeText(searchInput, "");

    expect(getAllByText(videos[0].title).length).toBeGreaterThan(0);
  });
});
