import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from "react-native";
import Card from "./Card";
import { Avatar, Button } from "react-native-paper";
const Profile = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        resizeMode="cover"
        style={styles.image}
        source={require("../assets/banner.jpeg")}
      ></ImageBackground>
      <View style={styles.box}>
        <View style={styles.flexbox}>
          <Avatar.Image
            size={120}
            style={styles.img}
            source={require("../assets/avatar.jpg")}
          />
          <View style={styles.left}>
            <Text style={styles.textLg}>401</Text>
            <Text style={styles.textsm}>Followers</Text>
          </View>
          <View>
            <Text style={styles.textLg}>221</Text>
            <Text style={styles.textsm}>Following</Text>
          </View>
        </View>
        <View style={styles.flexbox2}>
          <View>
            <Text style={styles.textLg}>Robin.B</Text>
            <Text style={styles.textsm}>konnichiwa🌸</Text>
          </View>
          <View>
            <Button mode="contained" style={styles.button}>
              {" "}
              Follow{" "}
            </Button>
          </View>
        </View>
        <View style={styles.line} />
          <Text style={{ color: "#398AD9", fontSize: 18, padding: 10 }}>
            {" "}
            Saved{" "}
          </Text>
        <ScrollView>
          <View style={styles.wrapper}>
            <Card image={"https://img.youtube.com/vi/9NngogacysA/mqdefault.jpg"} title={"Shiguang Dailiren"} />
            <Card image={"https://img.youtube.com/vi/SlNpRThS9t8/mqdefault.jpg"} title={"Shingeki no Kyojin"} />
            <Card image={"https://cdn.myanimelist.net/images/anime/5/87048l.jpg"} title={"Gintama.: Shirogane no Tamashii-hen"} />
            <Card image={"https://cdn.myanimelist.net/images/anime/1776/96566l.jpg"} title={"Shiguang Dailiren"} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  box: {
    backgroundColor: "#343434",
    fontSize: 16,
    marginTop: 200,
    height: "200%",
    width: "100%",
    borderRadius: 20,
    paddingHorizontal: 20,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  img: {
    borderColor: "#343434",
    width: 120,
    height: 120,
    position: "absolute",
    top: -40,
    left: "5%",
  },
  container: {
    backgroundColor: "black",
  },
  image: {
    width: "100%",
    height: 230,
    position: "absolute",
  },
  flexbox: {
    display: "flex",
    flexDirection: "row",
  },
  flexbox2: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    marginLeft: "60%",
  },
  textLg: {
    fontSize: 30,
    color: "#FFF",
    marginRight: 30,
    marginTop: 15,
  },
  textsm: {
    fontSize: 13,
    color: "#FFF",
  },
  button: {
    left: "5%",
  },
  line: {
    backgroundColor: "#7e7e7e",
    width: "100%",
    height: 2,
    marginVertical: 5,
    marginTop:10
  },
});
