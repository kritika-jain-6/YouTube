import React, { Component } from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet } from "react-native";

class RootLayout extends Component {
    render() {
        return (
            <Tabs
                initialRouteName={"index"}
                screenOptions={{
                    headerShown: false,
                    tabBarLabelStyle: { color: "#333" },
                }}
            >
                <Tabs.Screen
                    name="index"
                    options={{
                        title: "Home",
                        tabBarAccessibilityLabel: "HomeButton",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                            testID="home-icon"                               
                                name={focused ? "home-sharp" : "home-outline"}
                                color={"#333"}
                                size={25}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Shorts"
                    options={{
                        title: "Shorts",
                        tabBarAccessibilityLabel: "ShortButton",
                        tabBarIcon: ({ focused }) => (
                            <Image
                             testID="shorts-icon"
                                style={styles.icon}
                                source={
                                    focused
                                        ? require("../../assets/images/yt-shorts.png")
                                        : require("../../assets/images/yt-shorts-outline.png")
                                }
                            />
                        ),
                    }}
                />
                 <Tabs.Screen
                    name="Upload"
                    options={{
                        title: "Upload",
                        tabBarAccessibilityLabel: "UploadButton",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                            testID="upload-icon"
                                name={focused ? "add-circle" : "add-circle-outline"}
                                color={"#333"}
                                size={25}
                            />
                        ), 
                    }}
                />

                
                <Tabs.Screen
                    name="Subscription"
                    options={{
                        title: "Subscription",
                        tabBarAccessibilityLabel: "SubscriptionButton",
                        tabBarIcon: ({ focused }) => (
                            <Image
                            testID="subscription-icon"
                                style={styles.icon}
                                source={
                                    focused
                                        ? require("../../assets/images/yt-subscriptions.png")
                                        : require("../../assets/images/yt-subscriptions-outline.png")
                                }
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="Profile"
                    options={{
                        title: "Profile",
                        tabBarAccessibilityLabel: "ProfileButton",
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
                            testID="profile-icon"
                                name={focused ? "person" : "person-outline"}
                                color={"#333"}
                                size={25}
                            />
                        ),
                    }}
                />
            </Tabs>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        height: 25,
        width: 25,
    },
});

export default RootLayout;
