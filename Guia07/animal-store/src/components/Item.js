import React from "react";
import { Card } from "react-native-paper";
import { Text, Image, View, StyleSheet } from "react-native";

export const Item = ({ name, origin, picture }) => {
  return (
    <Card elevation={4} style={styles.cardContainer}>
      <Card.Content style={styles.cardContentContainer}>
        <View style={styles.cardLabelContainer}>
          <Text style={{ fontSize: 18, fontWeight: "700" }}>{name}</Text>
          <Text>{origin}</Text>
        </View>
        <Image source={picture} style={styles.cardPicture} />
      </Card.Content>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardLabelContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  cardContainer: {
    margin: 10,
    borderColor: "#43c7e0",
    borderStyle: "solid",
    borderWidth: 3,
  },
  cardPicture: {
    width: 300,
    height: 200,
    marginTop: 16,
  },
});
