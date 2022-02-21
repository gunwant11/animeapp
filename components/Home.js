import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { Avatar } from "react-native-paper";
import Card from "./Card";
import { Searchbar } from "react-native-paper";
import HorizontalCard from "./HorizontalCard";
export const Home = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [content, setData] = React.useState([]);
  const [newsdata, setNewsData] = React.useState([]);
  const onChangeSearch = (query) => setSearchQuery(query);

  const getContent = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const data = await res.json();
    setNewsData([]);
    setData(data.data);
    console.log(data)
  };
  const getMangaContent = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/top/manga`);
    const data = await res.json();
    setNewsData([]);
    setData(data.data);
  };
  const getAnimeNews = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/1735/news`);
    const data = await res.json();
    setData([]);
    setNewsData(data.data);
  };
  React.useEffect(() => {
    getAnimeNews()
    console.log(content)
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <View style={styles.user}>
          <Avatar.Image size={60} source={require("../assets/avatar.jpg")} />
          <View style={styles.text}>
            <Text style={styles.hello}>Hello,</Text>
            <Text style={styles.name}>Robin.B</Text>
          </View>
        </View>
        <Searchbar
          placeholder="Search"
          style={styles.search}
          inputStyle={{ color: "#fff" }}
          iconColor="#fff"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <View style={styles.nav}>
          <Text style={styles.navText} onPress={getContent}>
            Anime
          </Text>
          <Text style={styles.navText} onPress={getMangaContent}>
            Manga
          </Text>
          <Text style={styles.navText} onPress={getAnimeNews}>
            News
          </Text>
        </View>
      </View>
      <ScrollView>
      <Text style={styles.navText}>Trending</Text>
        <View style={styles.wrapper}>
          {content && content.map((item, index) => (
            <Card
              key={index}
              title={item.title}
              image={item.images.jpg.image_url}
              onPress={() => navigation.navigate("Details", { item: item })}
            />
          ))}
          {newsdata.map((item, index) => (
            <HorizontalCard
              key={index}
              title={item.title}
              image={item.images.jpg.image_url}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121315",
  },
  user: {
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    paddingLeft: 8,
  },
  hello: {
    color: "#fff",
    fontSize: 13,
  },
  name: {
    color: "#fff",
    fontSize: 16,
  },
  search: {
    backgroundColor: "#121315",
    color: "#fff",
    marginHorizontal: 20,
  },
  box: {
    paddingTop:30,
    backgroundColor: "#292929",
  },
  nav: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  navText: {
    color: "#398AD9",
    fontSize: 16,
    padding: 18,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 1000,
  },
});
