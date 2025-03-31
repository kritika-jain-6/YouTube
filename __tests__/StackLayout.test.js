import React from "react";
import { render } from "@testing-library/react-native";
import RootLayout from "../app/(stack)navigation/_layout";
import { Stack } from "expo-router";

jest.mock("expo-router", () => ({
    Stack: jest.fn(() => null),
}));

describe("RootLayout Component", () => {
    test("renders Stack navigator with correct options", () => {
        render(<RootLayout />);
        expect(Stack).toHaveBeenCalledWith(
            { screenOptions: { headerShown: false } },
            {}
        );
    });
});
