import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { TextInput, Button } from "react-native-paper";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogInHandler = (navigation)=>{
      console.log(email,password);

  }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>LogIn</Text>
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          mode="outlined"
        />
        <TextInput
          style={styles.input}
          value={password}
          secureTextEntry
          onChange={(e)=>setPassword(e.target.value)}
          placeholder="Password"
          mode="outlined"
        />
      </View>
      <Button>SignUP</Button>
      <Text>
        Already have an Account?{" "}
        <Text onPress={onLogInHandler()}>Signup</Text>
      </Text>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0e1330",
    justifyContent: "center",
    alignItems: "center",
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
    width: 300,
  },
  box: {
    justifyContent: "center",
  },
});
