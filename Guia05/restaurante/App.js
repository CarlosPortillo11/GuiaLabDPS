import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  FlatList,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  useColorScheme,
  View,
} from 'react-native';
import { AsyncStorageStatic } from 'react-native';
import Reservacion from './components/Reservacion';
import Formulario from './components/Formulario';
import colors from './src/colors';

const App = () => {
  //definir el state de las reservaciones
  const [reservaciones, setReservacion] = useState([]);
  const [mostrarform, guardarMostrarForm] = useState(false);

  useEffect(() => {
    const obtenerReservacionesStorage = async () => {
      try {
        const reservacionesStorage = await AsyncStorageStatic.getItem(
          'reservaciones'
        );
        if (reservacionesStorage) {
          setReservacion(JSON.parse(reservacionesStorage));
        }
      } catch (error) {
        console.log(error);
      }
    };
    obtenerReservacionesStorage();
  }, []);

  //Eliminar los clientes del state
  const eliminarCliente = (id) => {
    const reservasFilter = reservaciones.filter(
      (reserva) => reserva.id !== id
    );
    setReservacion(reservasFilter);
    guardarReservacionStorage(JSON.stringify(reservasFilter));
  };

  const mostrarFormulario = () => {
    guardarMostrarForm(!mostrarform);
  };

  const cerrarTeclado = () => {
    Keyboard.dismiss();
  };

  //Almacenar las resrvaciones en storage
  guardarReservacionStorage = async (reservaJSON) => {
    try {
      await AsyncStorageStatic.setItem('reservaciones', reservaJSON);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => cerrarTeclado}>
      <View style={styles.contenedor}>
        <Text style={styles.title}>Administrador de Reservaciones</Text>
        <View>
          <TouchableHighlight
            style={styles.showButtonForm}
            onPress={() => mostrarFormulario()}>
            <Text style={styles.showTextForm}>
              {mostrarform
                ? 'Cancelar Crear Reservación'
                : 'Crear Nueva Reservacion'}
            </Text>
          </TouchableHighlight>
        </View>
        <View style={styles.content}>
          {mostrarform ? (
            <>
              <Text style={styles.title}>Crear Nueva Reservación</Text>
              <Formulario
                reservaciones={reservaciones}
                setReservacion={setReservacion}
                guardarMostrarForm={guardarMostrarForm}
                guardarReservacionStorage={guardarReservacionStorage}
              />
            </>
          ) : (
            <>
              <Text style={styles.title}>
                {' '}
                {reservaciones.length > 0
                  ? 'Administra tus reservaciones'
                  : 'No hay reservaciones, agrega una'}{' '}
              </Text>
              <FlatList
                style={styles.list}
                data={reservaciones}
                renderItem={({ item }) => (
                  <Reservacion item={item} eliminarReserva={eliminarCliente} />
                )}
                keyExtractor={(reservacion) => reservacion.id}
              />
            </>
          )}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: colors.PRIMARY_COLOR,
    flex: 1,
  },
  title: {
    color: '#FFF',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginHorizontal: '2.5%',
  },
  list: {
    flex: 1,
  },
  showButtonForm: {
    padding: 10,
    backgroundColor: colors.BUTTON_COLOR,
    marginVertical: 10,
  },
  showTextForm: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
