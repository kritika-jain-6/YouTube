import { useRouter } from "expo-router";
import React from "react";

export function withNavigationHOC(Component) {
  return function (props) {
    const navigation = useRouter();
    return <Component {...props} navigation={navigation} />;
  };
}

export default withNavigationHOC;
