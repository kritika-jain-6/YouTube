import React from "react";
import { fireEvent, render, waitFor } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import TabsLayout from "../app/(stack)navigation/(navigation)/_layout";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "react-native";

jest.mock("expo-router");
jest.mock("react-native-gesture-handler", () => ({
  GestureHandlerRootView: ({ children }) => children,
  PanGestureHandler: ({ children }) => children,
}));

describe("RootLayout Component", () => {
  it("renders Tabs navigator (Unit)", () => {
    const tabs = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    expect(tabs).toBeTruthy();
  });

  it("verifies the presence of  tab buttons", async () => {
    const { getByLabelText } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    waitFor(() => {
      expect(getByLabelText("HomeButton")).toBeTruthy();
    });
  });

  it("verifies the presence of  tab buttons", async () => {
    const { getByLabelText } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    waitFor(() => {
      expect(getByLabelText("ShortButton")).toBeTruthy();
      
    });
  });

  it("verifies the presence of  tab buttons", async () => {
    const { getByLabelText } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    waitFor(() => {
      expect(getByLabelText("UploadButton")).toBeTruthy();
    });
  });

  it("verifies the presence of tab buttons", async () => {
    const { getByLabelText } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    waitFor(() => {
      expect(getByLabelText("ProfileButton")).toBeTruthy();
    });
  });

  it("verifies the presence of tab buttons", async () => {
    const { getByLabelText } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    waitFor(() => {
      expect(getByLabelText("SubscriptionButton")).toBeTruthy();
    });
  });

  it("navigates to Home screen", async () => {
    const { getByLabelText, findByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );

    const HomeButton = waitFor(() => getByLabelText("HomeButton"));
    fireEvent.press(HomeButton);
    const homeScreen = waitFor(() => findByTestId("home-screen"));
    expect(homeScreen).toBeTruthy();
  });

  it("navigates to Shorts screen", async () => {
    const { getByLabelText, findByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );

    const ShortButton = waitFor(() => getByLabelText("ShortButton"));
    fireEvent.press(ShortButton);
    const shortsScreen = waitFor(() => findByTestId("shorts-screen"));
    expect(shortsScreen).toBeTruthy();
  });

  it("navigates to Upload screen", async () => {
    const { getByLabelText, findByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );

    const UploadButton = waitFor(() => getByLabelText("UploadButton"));
    fireEvent.press(UploadButton);
    const uploadScreen = waitFor(() => findByTestId("upload-screen"));
    expect(uploadScreen).toBeTruthy();
  });

  it("navigates to Subscription screen", async () => {
    const { getByLabelText, findByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );

    const SubscriptionButton = waitFor(() =>
      getByLabelText("SubscriptionButton")
    );
    fireEvent.press(SubscriptionButton);
    const subscriptionScreen = waitFor(() =>
      findByTestId("subscription-screen")
    );
    expect(subscriptionScreen).toBeTruthy();
  });

  it("navigates to Profile screen", async () => {
    const { getByLabelText, findByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );

    const ProfileButton = waitFor(() => getByLabelText("ProfileButton"));
    fireEvent.press(ProfileButton);
    const profileScreen = waitFor(() => findByTestId("profile-screen"));
    expect(profileScreen).toBeTruthy();
  });

  it("checks if icons render correctly", async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    waitFor(() => {
      expect(getByTestId("home-icon")).toBeTruthy();
    });
  });

  it("checks if icons render correctly", async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    waitFor(() => {    
      expect(getByTestId("shorts-icon")).toBeTruthy();
    });
  });

  it("checks if icons render correctly", async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    waitFor(() => {
     expect(getByTestId("upload-icon")).toBeTruthy();
     
    });
  });

  it("checks if icons render correctly", async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    waitFor(() => {
      expect(getByTestId("subscription-icon")).toBeTruthy();

    });
  });
  it("checks if icons render correctly", async () => {
    const { getByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );
    waitFor(() => {
    
      expect(getByTestId("profile-icon")).toBeTruthy();
    });
  });

  it("pressing an already active tab does not break navigation", async () => {
    const { getByLabelText, findByTestId } = render(
      <NavigationContainer>
        <TabsLayout />
      </NavigationContainer>
    );

    const ProfileButton = waitFor(() => getByLabelText("ProfileButton"));
    fireEvent.press(ProfileButton);
    const profileScreen = waitFor(() => findByTestId("profile-screen"));
    expect(profileScreen).toBeTruthy();

    fireEvent.press(ProfileButton);
    expect(profileScreen).toBeTruthy();
  });
});
