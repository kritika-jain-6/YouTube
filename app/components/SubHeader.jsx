import React, { Component } from "react";
import { Text, StyleSheet, View, ScrollView, TouchableOpacity } from "react-native";

class SubHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeCategory: "All", // Track selected category
        };
    }

    handleCategoryPress = (category) => {
        this.setState({ activeCategory: category });
    };

    render() {
        const categories = [
            "All",
            "Gaming",
            "Discovery",
            "Cartoon",
            "Music",
            "News",
            "Live",
            "Posts",
            "Recently Upload",            
        ];

        return (
            <View testID="subheader-container" style={styles.container}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                    <View style={styles.categoryContainer}>
                        {categories.map((category, index) => (
                            <TouchableOpacity
                                key={index}
                                testID={`category-button-${category}`} // Unique testID
                                style={[
                                    styles.categoryBtn,
                                    this.state.activeCategory === category && styles.activeCategoryBtn,
                                ]}
                                onPress={() => this.handleCategoryPress(category)}
                            >
                                <Text
                                    testID={`category-text-${category}`}
                                    style={[
                                        styles.categoryBtnText,
                                        this.state.activeCategory === category && styles.activeCategoryBtnText,
                                    ]}
                                >
                                    {category}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15,
    },
    categoryContainer: {
        flexDirection: "row",
    },
    categoryBtn: {
        backgroundColor: "#f1f1f1",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
    categoryBtnText: {
        color: "#000000",
    },
    activeCategoryBtnText: {
        color: "#ffffff",
    },
    activeCategoryBtn: {
        backgroundColor: "#000000",
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 5,
        marginHorizontal: 5,
    },
});

export default SubHeader;
