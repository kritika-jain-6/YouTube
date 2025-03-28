import React, { Component } from "react";
import {View, StyleSheet, Text, SafeAreaView} from "react-native";
import Header from "../../components/Header";
import SubHeader from '../../components/SubHeader'

class Subscription extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <Header/>
                <SubHeader/>
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

export default Subscription;
