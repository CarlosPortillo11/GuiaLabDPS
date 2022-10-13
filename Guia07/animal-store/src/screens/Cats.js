import React from "react";
import { Text, View, ScrollView, StyleSheet } from "react-native";
import { Item } from "../components/Item";

const catsList = [
  {
    name: "American Wirehair",
    origin: "Estados Unidos",
    picture: require("../images/Cat1.jpg"),
  },
  {
    name: "American Shorthair",
    origin: "Estados Unidos",
    picture: require("../images/Cat2.jpg"),
  },
  {
    name: "Bombay",
    origin: "Tailandia",
    picture: require("../images/Cat3.jpg"),
  },
  {
    name: "British Shorthair",
    origin: "Reino Unido",
    picture: require("../images/Cat4.jpg"),
  },
  {
    name: "Abyssinian",
    origin: "Eiopía",
    picture: require("../images/Cat5.jpg"),
  },
];

export const Cats = () => {
  return (
    <ScrollView style={styles.dogsContainer}>
      {catsList.map((dog, index) => (
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
