import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import Header from "../app/components/Header";  

jest.mock("../app/withNavigationHOC.jsx", () => ({
  withNavigationHOC: (component) => component, 
}));


describe("Header Component", () => {
  let mockNavigate, mockOnCastPress;

  beforeEach(() => {
    mockNavigate = jest.fn(); // Mock navigation function
    mockOnCastPress = jest.fn(); // Mock cast button function
  });


  it("renders the Header component", () => {
    const { getByTestId } = render(<Header navigation={{ navigate: mockNavigate }} />);
    
    expect(getByTestId("header-container")).toBeTruthy();
  });


  it("renders the YouTube logo", () => {
    const { getByTestId } = render(<Header navigation={{ navigate: mockNavigate }} />);
    
    expect(getByTestId("yt-logo")).toBeTruthy();
  });


  it("renders the Search button", () => {
    const { getByTestId } = render(<Header navigation={{ navigate: mockNavigate }} />);
    
    expect(getByTestId("search-btn")).toBeTruthy();
  });

 
  it("renders the Notification Bell button", () => {
    const { getByTestId } = render(<Header navigation={{ navigate: mockNavigate }} />);
    
    expect(getByTestId("bell-btn")).toBeTruthy();
  });


  it("renders the Cast button", () => {
    const { getByTestId } = render(<Header navigation={{ navigate: mockNavigate }} />);
    
    expect(getByTestId("cast-btn")).toBeTruthy();
  });


  it("navigates to SearchScreen when search button is pressed", () => {
    const { getByTestId } = render(<Header navigation={{ navigate: mockNavigate }} />);

    fireEvent.press(getByTestId("search-btn")); // Simulate button press

    expect(mockNavigate).toHaveBeenCalledWith("SearchScreen"); // Check navigation
  });

  
  it("navigates to NotificationScreen when bell button is pressed", () => {
    const { getByTestId } = render(<Header navigation={{ navigate: mockNavigate }} />);

    fireEvent.press(getByTestId("bell-btn"));

    expect(mockNavigate).toHaveBeenCalledWith("NotificationScreen");
  });

  it("calls the onCastPress prop when cast button is pressed", () => {
    const { getByTestId } = render(<Header navigation={{ navigate: mockNavigate }} onCastPress={mockOnCastPress} />);

    fireEvent.press(getByTestId("cast-btn"));

    expect(mockOnCastPress).toHaveBeenCalled(); // Check function call
  });

 
  it("renders Feather icons correctly", () => {
    const { getByTestId } = render(<Header navigation={{ navigate: mockNavigate }} />);

    expect(getByTestId("search-btn")).toBeTruthy();
    expect(getByTestId("bell-btn")).toBeTruthy();
    expect(getByTestId("cast-btn")).toBeTruthy();
  });


  it("applies correct styles", () => {
    const { getByTestId } = render(<Header navigation={{ navigate: mockNavigate }} />);
    const headerContainer = getByTestId("header-container");

    expect(headerContainer.props.style).toMatchObject({
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      paddingHorizontal: 15,
      backgroundColor: "#fff",
    });
  });
});
