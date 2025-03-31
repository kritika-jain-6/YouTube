import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";

export function withNavigationHOC(Component) {
  return function (props) {
    const navigation = useNavigation();
    const route = useRoute(); 
    return <Component {...props} navigation={navigation} route={route} />;
  };
}

export default withNavigationHOC;
