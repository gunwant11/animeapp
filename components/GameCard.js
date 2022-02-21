import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useEffect, useState } from "react";
import { CredentialsContext } from "../App";
const GameCard = ({ image, name, genrateNew,score }) => {
  const [data, setData] = React.useState([]);
  const [isCorrect, setIsCorrect] = useState(0);
  const [isWrong, setIsWrong] = useState(0);
  const [showAnswer, setshowAnswer] = useState(false);

  const { correctAnswer } = useContext(CredentialsContext);

  const clickHandler = (char) => {
    if (correctAnswer === name) {
      setIsCorrect(isCorrect+1);
      console.log("you win");
    } else {
      setIsWrong(isWrong+1)
      console.log("looser", correctAnswer);
    }
    setshowAnswer(true);
    genrateNew();
    score(isCorrect)
  };

  return (
    <TouchableOpacity style={styles.card} onPress={() => clickHandler(name)}>
      <Image source={{ uri: image }} style={{ width: 60, height: 60 }} />
      {showAnswer && <Text style={styles.ans}>{name}</Text>}
    </TouchableOpacity>
  );
};

export default GameCard;

const styles = StyleSheet.create({
  ans: {
    position: "absolute",
    bottom: 0,
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    width: 500,
    flexWrap: "wrap",
  },
});
