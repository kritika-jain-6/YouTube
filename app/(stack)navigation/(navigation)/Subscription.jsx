import React, { Component } from "react";
import { StyleSheet, SafeAreaView} from "react-native";
import Header from "../../components/Header";


class Subscription extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container} testID="subscription-screen">
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

export default Subscription;
