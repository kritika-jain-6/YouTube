import React, { Component } from "react";
import {View, StyleSheet, Text, SafeAreaView} from "react-native";
import Header from "../../components/Header";

class Profile extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container} testID="profile-screen">
                <Header/>
                
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

export default Profile;
