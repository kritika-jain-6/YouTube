import React, { Component} from "react";
import { StyleSheet, SafeAreaView } from "react-native";


class Shorts extends Component {
    

    render() {
        return (
            <SafeAreaView style={styles.container} testID="shorts-screen">
            </SafeAreaView>
        );
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
