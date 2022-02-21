import { StyleSheet, Text, View, Image, Button,TouchableOpacity,TouchableNativeFeedback  } from "react-native";
import React from "react";
const Card = ({ title, image }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={{ uri: image }} resizeMode="cover" style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: 150,
    margin: 5,
    borderRadius: 10,
  },
  title: {
    borderLeftColor: "#398AD9",
    borderLeftWidth: 5,
    paddingLeft: 7,
    fontSize: 13,
    color: "#fff",
    position: "absolute",
    bottom: 10,
    left: 7,
  },
  image: {
    height: 200,
    borderRadius: 10,
    shadowColor: "#fff",
  },
});
