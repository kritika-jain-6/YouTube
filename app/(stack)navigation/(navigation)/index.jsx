import React, { Component } from "react";
import { View, StyleSheet,  SafeAreaView, ScrollView } from "react-native";
import Header from "../../components/Header";
import SubHeader from "../../components/SubHeader";
import videos from "../../dummy/videos.json"
import Card from "../../components/Card";

class Index extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container} testID="home-screen">
        <View style={styles.body}>
          <ScrollView>
            <Header />
            <SubHeader />
              {videos.map((video, index) => (
                  <Card key={index} video={video} />
              ))}
          </ScrollView>
        </View>
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
  body: {
    flex: 1,
  },
});

export default Index;
