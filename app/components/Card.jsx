import React, { Component } from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

class Card extends Component {
    render() {
        const { video } = this.props;
        return (
            <View style={styles.card}>
                {/* Thumbnail Container */}
                <View style={styles.thumbnailContainer}>
                    <Image 
                        source={{ uri: video.thumbnail }} 
                        style={styles.thumbnail} 
                        resizeMode="cover"
                        testID="video-thumbnail" // For testing
                    />

                    {/* Video Duration (Overlay) */}
                    <View style={styles.durationContainer}>
                        <Text style={styles.durationText}>{video.videoLength}</Text>
                    </View>
                </View>

                {/* Video Info Section */}
                <View style={styles.videoInfo}>
                    {/* Profile Image */}
                    <Image 
                        source={{ uri: video.userProfile }} 
                        style={styles.profileImage} 
                        resizeMode="cover"
                        testID="user-profile" // For testing
                    />

                    {/* Video Details */}
                    <View style={styles.textContainer}>
                        <Text style={styles.title} numberOfLines={2}>
                            {video.title}
                        </Text>
                        <Text style={styles.channelName}>{video.userName}</Text>
                        <Text style={styles.metaData}>
                            {video.views} views • {video.createdTime}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 15,
        backgroundColor: "#fff",
    },
    thumbnailContainer: {
        position: "relative", // This ensures the duration overlay works properly
    },
    thumbnail: {
        width: screenWidth,
        height: 220,
        backgroundColor: "#ccc",
    },
    durationContainer: {
        position: "absolute",
        bottom: 8,
        right: 8,
        backgroundColor: "rgba(0, 0, 0, 0.8)",
        paddingHorizontal: 5,
        paddingVertical: 2,
        borderRadius: 3,
    },
    durationText: {
        color: "#fff",
        fontSize: 12,
        fontWeight: "bold",
    },
    videoInfo: {
        flexDirection: "row",
        padding: 10,
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 25,
        backgroundColor: "#ddd",
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 2,
    },
    channelName: {
        fontSize: 14,
        color: "#606060",
    },
    metaData: {
        fontSize: 12,
        color: "#909090",
    },
});

export default Card;
