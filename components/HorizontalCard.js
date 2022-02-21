import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const HorizontalCard = ({ title, image }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}hello world</Text>
      <Image source={{ uri: image }} resizeMode="cover" style={styles.image} />
    </View>
  );
};

export default HorizontalCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1F2022",
    width: 360,
    padding: 20,
    margin: 10,
    borderRadius: 20,
    paddingTop:15
  },
  title: {
    borderLeftColor: "#398AD9",
    borderLeftWidth: 5,
    paddingLeft: 10,
    paddingBottom:5,
    fontSize: 17,
    marginVertical: 10,
    color: "#fff",
  },
  image: {
    height: 200,
    borderRadius: 20,
    shadowColor: "#fff",
  },
});
