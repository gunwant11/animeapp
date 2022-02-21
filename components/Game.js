import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useState,useContext } from "react";
import { Button } from "react-native-paper";
import GameCard from "./GameCard";
import { CredentialsContext } from "../App";


const Game = () => {
  const [data, setData] = React.useState([]);
  const [start, setStart] = React.useState(false);
  const [score, setScore] = React.useState(false);

  const {setCorrectAnser,correctAnswer} = useContext(CredentialsContext) 

  const chararray = [
    145, 85, 13, 17, 3428, 4700, 2008, 1902, 1662, 2039, 23055, 2792, 2672,
    1555, 12563, 1694, 3495, 2423, 3151, 18473, 728, 2535, 18056, 2007, 108297,
    2455, 3180, 12465, 12464, 1901, 3710, 2174, 3149, 14, 7302, 2009,
  ];

  const randomAnsGenerator = () => {

    let rand = Math.floor(Math.random() * 20);
    
    let ans = data[rand];
    console.log(ans.character.name)
    setCorrectAnser(ans.character.name)

  };
  const getContent = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime/1735/characters`);
    const data = await res.json();

    let FIlteredCharacters = data.data.filter((i) => {
      if (chararray.includes(i.character.mal_id)) return i;
    });
    setData(FIlteredCharacters);
  };

  useEffect(() => {
    getContent();
    randomAnsGenerator()
    }, []);
  return (
    <View >
      <View>
        <Button ></Button>
        <Text style={styles.answer}> Guess :{correctAnswer}</Text>
        <Text style={styles.answer}> Score : {score}</Text>
      </View>
      <View style={styles.wrapper}>
        {data.map((item, index) => (
          <GameCard
            key={index}
            image={item.character.images.jpg.image_url}
            name={item.character.name}
            answer={correctAnswer}
            genrateNew={randomAnsGenerator}
            score={setScore}
          />
        ))}
      </View>
    </View>
  );
};

export default Game;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: 400,
    flexWrap: "wrap",
  },
  answer:{
    fontSize:18,
    textAlign: "center"
  },

});
