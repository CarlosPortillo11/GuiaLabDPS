import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { Card } from "@rneui/themed";

const Pais = ({ resultado, bandera }) => {
  const [info, setinfo] = useState([]);
  const [nombre, setnombre] = useState();
  const [capital, setcapital] = useState();
  const [region, setregion] = useState();
  const [lengua, setlengua] = useState([]);
  const [medida, setMedida] = useState();

  useEffect(() => {
    setinfo(resultado);
    lengua.length = 0;
    Object.values(info).map((e) => {
      setnombre(e.nome.abreviado);
      setcapital(e.governo.capital.nome);
      setregion(e.localizacao.regiao.nome);
      setMedida(e.area.total + " " + e.area.unidade.símbolo);
      Object.values(e.linguas).map((l) => {
        lengua.push(l.nome);
      });
    });
  });

  return (
    <Card>
      <Card.Title>{nombre}</Card.Title>
      <Card.Divider />
      <View style={{ justifyContent: "center" }}>
        <Text>Capital:{capital}</Text>
        <Text>Region:{region}</Text>
        <Text>Lengua:{lengua.toString()}</Text>
        <Text>Medida:{medida}</Text>
      </View>
      <Image source={{ uri: bandera }} style={styles.flag} />
    </Card>
  );
};
export default Pais;

const styles = StyleSheet.create({
  flag: {
    width: 128,
    height: 64,
    resizeMode: "cover",
    marginTop: 12,
  },
});
