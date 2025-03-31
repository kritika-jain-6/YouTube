import React from "react";
import { render } from "@testing-library/react-native";
import Card from "../app/components/Card";
import videoData  from "../app/dummy/videos.json"; 

describe("Card Component", () => {
    it("renders the Card component correctly", () => {
        const mockVideo = videoData[0];        
        const { getByText } = render(<Card video={mockVideo} />);   
        expect(getByText(mockVideo.title)).toBeTruthy();
    });

    it("renders the Card component correctly", () => {
        const mockVideo = videoData[0];        
        const { getByText } = render(<Card video={mockVideo} />);   
        expect(getByText(mockVideo.userName)).toBeTruthy();            
    });

    it("renders the Card component correctly", () => {
        const mockVideo = videoData[0];        
        const { getByText } = render(<Card video={mockVideo} />);         
        expect(getByText(`${mockVideo.views} views • ${mockVideo.createdTime}`)).toBeTruthy();        
    
    });

    it("renders the Card component correctly", () => {
        const mockVideo = videoData[0];        
        const {getByTestId } = render(<Card video={mockVideo} />);          
        expect(getByTestId("video-thumbnail")).toBeTruthy();
    });

    it("renders the Card component correctly", () => {
        const mockVideo = videoData[0];        
        const {getByTestId } = render(<Card video={mockVideo} />);          
        expect(getByTestId("user-profile")).toBeTruthy();
    });
});
