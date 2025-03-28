import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, SafeAreaView } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { withNavigationHOC } from "../withNavigationHOC"; 

class Header extends Component {
  render() {
    const { navigation } = this.props; 
    return (
      <SafeAreaView testID="header-container" style={styles.container}>
        <Image
          testID="yt-logo"
          style={styles.image}
          source={require("../assets/images/yt-logo.png")}
          resizeMode="contain"
        />
        <View style={styles.btns}>
          <TouchableOpacity testID="cast-btn" style={styles.btn}>
            <Feather name="cast" size={22} color={"#555"} />
          </TouchableOpacity>
          <TouchableOpacity testID="bell-btn" style={styles.btn}>
            <Feather name="bell" size={22} color={"#555"} />
          </TouchableOpacity>
          <TouchableOpacity 
            testID="search-btn"
            style={styles.btn} 
            onPress={() => navigation.navigate("SearchHeader")} 
          >
            <Feather name="search" size={22} color={"#555"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

export default withNavigationHOC(Header);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#fff",
  },
  image: {
    width: 120,
    height: 60,
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    marginHorizontal: 10,
  },
});
