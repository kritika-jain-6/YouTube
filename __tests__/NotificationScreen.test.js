import React from "react";
import NotificationScreen from "../app/(stack)navigation/NotificationScreen";
import {render} from "@testing-library/react-native";
import videos from "../app/dummy/videos.json";

jest.mock("expo-font", () => ({
  loadAsync: jest.fn(),
  isLoaded: jest.fn().mockReturnValue(true),
}));

// Mock @expo/vector-icons to avoid issues related to fonts loading in tests
jest.mock("@expo/vector-icons", () => ({
  Ionicons: "Ionicons",
  MaterialIcons: "MaterialIcons",
}));

describe("NotificationScreen ",()=>{
  it("render the notification screen ",()=>{
    const {getByTestId} = render(<NotificationScreen />)
    expect(getByTestId("back-button")).toBeTruthy();

  })
})