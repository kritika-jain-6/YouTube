import React, { Component } from "react";
import {View, StyleSheet, Text, SafeAreaView} from "react-native";


class Shorts extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fff",
    },
});

export default Shorts;
