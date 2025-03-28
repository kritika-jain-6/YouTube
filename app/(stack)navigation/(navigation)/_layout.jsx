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
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
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
                        tabBarIcon: ({ focused }) => (
                            <Image
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
                    name="Subscription"
                    options={{
                        title: "Subscription",
                        tabBarIcon: ({ focused }) => (
                            <Image
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
                        tabBarIcon: ({ focused }) => (
                            <Ionicons
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
