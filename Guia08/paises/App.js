import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Alert,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import Pais from "./src/components/Pais";
import { Picker } from "@react-native-picker/picker";

export default function App() {
  const [busqueda, guardarBusqueda] = useState({ pais: "" });
  const [consultar, guardarConsultar] = useState(false);
  const [resultado, guardarResultado] = useState({});
  const [bandera, guardarBandera] = useState();

  useEffect(() => {
    const { pais } = busqueda;
    const consultarPais = async () => {
      if (consultar) {
        console.log({ pais });
        const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}`;
        const urlBandera = `https://countryflagsapi.com/png/${pais}`;
        guardarBandera(urlBandera);
        console.log({ bandera });
        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          guardarResultado(resultado);
          guardarConsultar(false);
        } catch (error) {
          mostrarAlerta();
        }
      }
    };
    consultarPais();
  }, [consultar]);

  const mostrarAlerta = () => {
    Alert.alert("Error", "No hay resultado intenta con otra ciudad o país"),
      [{ Text: "Ok" }];
  };

  const { pais } = busqueda;
  const [animacionBoton] = useState(new Animated.Value(1));

  const consultarPais = () => {
    if (pais.trim() === "") {
      mostrarAlertaPicker();
      return;
    }
    //Consultar API
    guardarConsultar(true);
  };

  const mostrarAlertaPicker = () => {
    Alert.alert("Error", "Debe seleccionar un país"), [{ Text: "Entendido" }];
  };

  const animacionEntrada = () => {
    Animated.spring(animacionBoton, {
      toValue: 0.9,
      useNativeDriver: true,
    }).start();
  };

  const animacionSalida = () => {
    Animated.spring(animacionBoton, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const estiloAnimacion = {
    transform: [
      {
        scale: animacionBoton,
      },
    ],
  };

  return (
    <View style={styles.app}>
      <View style={styles.contenido}>
        <>
          <View>
            <View>
              <Text style={styles.input}>Pais</Text>
            </View>
            <View>
              <Picker
                style={styles.itempais}
                selectedValue={pais}
                onValueChange={(pais) => {
                  guardarBusqueda({ ...busqueda, pais });
                  consultarPais();
                }}
              >
                <Picker.Item label="--Seleccione un pais--" value="" />
                <Picker.Item label="Canada" value="ca" />
                <Picker.Item label="El Salvador" value="sv" />
                <Picker.Item label="Guatemala" value="gt" />
                <Picker.Item label="Honduras" value="hn" />
                <Picker.Item label="Nicaragua" value="ni" />
                <Picker.Item label="Panama" value="pa" />
                <Picker.Item label="Costa Rica" value="cr" />
                <Picker.Item label="Mexico" value="mx" />
                <Picker.Item label="Argentina" value="ar" />
                <Picker.Item label="Estados Unidos" value="us" />
                <Picker.Item label="Colombia" value="co" />
                <Picker.Item label="España" value="es" />
                <Picker.Item label="Peru" value="pe" />
              </Picker>
            </View>
            <TouchableWithoutFeedback
              onPressIn={() => animacionEntrada()}
              onPressOut={() => animacionSalida()}
            >
              <Animated.View style={[styles.btnBuscar, estiloAnimacion]}>
                <Text style={styles.textoBuscar}>Buscar País</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </>
        <Pais resultado={resultado} bandera={bandera} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    backgroundColor: "rgb(71,149,212)",
    justifyContent: "center",
  },
  contenido: {
    margin: "2.5%",
  },
  input: {
    padding: 10,
    height: 50,
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  itempais: {
    height: 60,
    backgroundColor: "#fff",
  },
  btnBuscar: {
    marginTop: 50,
    height: 50,
    backgroundColor: "#000",
    fontSize: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  textoBuscar: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "center",
    fontSize: 18,
  },
});
