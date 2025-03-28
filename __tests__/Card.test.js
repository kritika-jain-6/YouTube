import React from "react";
import { render } from "@testing-library/react-native";
import Card from "../app/components/Card";
import videoData  from "../app/dummy/videos.json"; 

describe("Card Component", () => {
    it("renders the Card component correctly", () => {
        const mockVideo = videoData[0];        
        const { getByText, getByTestId } = render(<Card video={mockVideo} />);     
       
        expect(getByText(mockVideo.title)).toBeTruthy();
        expect(getByText(mockVideo.userName)).toBeTruthy();       
        expect(getByText(`${mockVideo.views} views • ${mockVideo.createdTime}`)).toBeTruthy();        
        expect(getByTestId("video-thumbnail")).toBeTruthy();
        expect(getByTestId("user-profile")).toBeTruthy();
    });
});
