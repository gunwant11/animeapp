import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const onSignUphandler = (navigation) => {
    console.log(email, password, username);
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Sign UP</Text>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          placeholder="Username"
          mode="outlined"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          mode="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          mode="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </View>
      <Button>SignUP</Button>
      <Text>
        Already have an Account? <Text onPress={onSignUphandler}>Login</Text>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e1330",

    justifyContent: "center",
  },
  paragraph: {
    fontSize: 40,
    color: "#fff",
    textAlign: "center",
    margin: 10,
  },
  input: {
    fontSize: 20,
    backgroundColor: "#8c8c8c",
    borderColor: "#fff",
    marginBottom: 2,
    marginHorizontal: 50,
    height: 0,
  },
  box: {
    justifyContent: "center",
  },
});
