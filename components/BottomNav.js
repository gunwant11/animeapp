import * as React from "react";
import { Home } from "./Home";
import Profile from "./Profile";
import Game from "./Game";
import { BottomNavigation } from "react-native-paper";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: "Home", title: "Home", icon: "home" },
    { key: "Profile", title: "Profile", icon: "account" },
    { key: "Game", title: "Game", icon: "google-controller" },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    Home: Home,
    Profile: Profile,
    Game: Game,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.botNav}
      style={{backgroundColor:"#292929"}}
    />
  );
};

export default BottomNav;

const styles = StyleSheet.create({
  botNav: {
    height:60,
    backgroundColor: "#292929",
  },
});
