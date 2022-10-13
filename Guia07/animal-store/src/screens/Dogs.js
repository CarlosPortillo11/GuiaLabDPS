import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Item } from "../components/Item";
import Dog1 from "../images/Dog1.jpg";

const dogsList = [
  {
    name: "Shiba Inu",
    origin: "Japan",
    picture: require("../images/Dog1.jpg"),
  },
  {
    name: "Husky Siberiano",
    origin: "Rusia",
    picture: require("../images/Dog2.jpg"),
  },
  { name: "Shih Tzu", origin: "Tibet", picture: require("../images/Dog3.jpg") },
  {
    name: "Chihuaha",
    origin: "México",
    picture: require("../images/Dog4.jpg"),
  },
  {
    name: "Pomeranian",
    origin: "Pomerania",
    picture: require("../images/Dog5.jpg"),
  },
];

export const Dogs = (props) => {
  return (
    <ScrollView style={styles.dogsContainer}>
      {dogsList.map((dog, index) => (
        <Item
          name={dog.name}
          origin={dog.origin}
          picture={dog.picture}
          key={index}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  dogsContainer: {
    paddingTop: 12,
  },
});
