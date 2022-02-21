import React from 'react'
import { StyleSheet, Text, View, ScrollView,Image } from "react-native";
const Details = ({ route, navigation }) => {
    const { title, synopsis  } = route.params.item;
  return (
    <View>
        <View>
            <Text></Text>
            <Text>{title}</Text>
            <Text></Text>
        </View>
            <Text>{synopsis}</Text>
    </View>
  )
}

export default Details