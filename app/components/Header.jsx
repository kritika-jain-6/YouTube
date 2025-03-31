import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { withNavigationHOC } from "../withNavigationHOC";
import { router } from "expo-router";

class Header extends Component {
  handleSearchPress = () => {
    this.props.navigation.navigate("SearchScreen");
  };

  handleBellPress = () => {
    this.props.navigation.navigate("NotificationScreen");
  };

  render() {
    const { onCastPress, navigation,route } = this.props;
    const isNotificationScreen = route?.name === "NotificationScreen";
    return (
      <SafeAreaView testID="header-container" style={styles.container}>
  
  {isNotificationScreen ? (
          <View style={styles.notificationHeader}>
            <TouchableOpacity onPress={() => navigation.back()}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text style={styles.notificationText}>Notifications</Text>
          </View>
        ) : (
          <Image
            testID="yt-logo"
            style={styles.image}
            source={require("../assets/images/yt-logo.png")}
            resizeMode="contain"
          />
        )}

        <View style={styles.btns}>
          <TouchableOpacity
            testID="cast-btn"
            style={styles.btn}
            onPress={onCastPress}
          >
            <Feather name="cast" size={22} color={"#555"} />
          </TouchableOpacity>
          <TouchableOpacity
            testID="bell-btn"
            style={styles.btn}
            onPress={this.handleBellPress}
          >
            <Feather name="bell" size={22} color={"#555"} />
          </TouchableOpacity>
          <TouchableOpacity
            testID="search-btn"
            style={styles.btn}
            onPress={this.handleSearchPress}
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
 
  notificationHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  notificationText: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  image: {
    width: 120,
    height: 50,
  },
  btns: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    marginHorizontal: 10,
  },
});
