import { useState, createContext, useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignIn";
export const CredentialsContext = createContext();
import BottomNav from "./components/BottomNav";

const Stack = createNativeStackNavigator();

function App() {
  const [credentails, setCredentails] = useState({});
  const [correctAnswer, setCorrectAnser] = useState("");
  return (
    <CredentialsContext.Provider
      value={{ credentails, setCredentails, correctAnswer, setCorrectAnser }}
    >
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Nav"
            component={BottomNav}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </CredentialsContext.Provider>
  );
}

export default App;
