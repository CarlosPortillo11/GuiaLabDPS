import React, { useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
  ScrollView,
} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {RadioButton} from 'react-native-paper';
import shortid from 'shortid';
import colors from '../src/colors';

const Formulario = ({
  reservaciones,
  setReservacion,
  guardarMostrarForm,
  guardarReservacionStorage,
}) => {
  const [nombre, guardarNombre] = useState('');
  const [cantPersonas, guardarCantPersonas] = useState('');
  const [zona, guardarZona] = useState('No Fumadores');
  const [fecha, guardarFecha] = useState('');
  const [hora, guardarHora] = useState('');

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const confirmarFecha = (date) => {
    const opciones = { year: 'numeric', month: 'long', day: '2-digit' };
    guardarFecha(date.toLocaleDateString('es-ES', opciones));
    hideDatePicker();
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const confirmarHora = hora => {
    const opciones = { hour: 'numeric', minute: '2-digit', hour12: false };
    guardarHora(hora.toLocaleString('es-ES', opciones));
    hideTimePicker();
  };
  const crearNuevaReservacion = () => {
    // Validar
     if (
      nombre.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      zona.trim() === '' ||
      cantPersonas.trim() === ''
    ) {
      // Falla la validación
      mostrarAlerta();
      return;
    }
    const reservacion = { nombre, cantPersonas, zona, fecha, hora};
    reservacion.id = shortid.generate();
    // Agregar al state
    const reservacionesNuevo = [...reservaciones, reservacion];
    setReservacion(reservacionesNuevo);
    // Pasar las nuevas citas a storage
    guardarReservacionStorage(JSON.stringify(reservacionesNuevo));
    // Ocultar el formulario
    guardarMostrarForm(false);
    // Resetear el formulario
    guardarNombre('');
    guardarCantPersonas('');
    guardarZona('');
    guardarHora('');
    guardarFecha('');
  };

  const mostrarAlerta = () => {
    Alert.alert(
      'Error',
      'Todos los campos son obligatorios',
      [
        {
          text: 'OK',
        },
      ]
    );
  };

  return (
    <>
      <ScrollView style={styles.form}>
        <View>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarNombre(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Cantidad de personas:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(texto) => guardarCantPersonas(texto)}
          />
        </View>
        <View>
          <Text style={styles.label}>Zona:</Text>
          <RadioButton.Group 
            onValueChange={nuevaReserv => guardarZona(nuevaReserv)}          
            style={styles.zonaInput} value={zona}
          >
            <View style={styles.radioContainer}>
              <RadioButton value="No Fumadores"  />
              <Text style={styles.label}>No Fumadores</Text>
            </View>
            <View style={styles.radioContainer}>
              <RadioButton value="Fumadores"  />
              <Text style={styles.label}>Fumadores</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View>
          <Text style={styles.label}>Fecha:</Text>
          <Button style={styles.buttonInput} title="Seleccionar Fecha" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={confirmarFecha}
            onCancel={hideDatePicker}
            locale="es_ES"
            headerTextIOS="Elige la fecha"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{fecha}</Text>
        </View>
        <View>
          <Text style={styles.label}>Hora:</Text>
          <Button style={styles.buttonInput} title="Seleccionar Hora" onPress={showTimePicker} />
          <DateTimePickerModal
            isVisible={isTimePickerVisible}
            mode="time"
            onConfirm={confirmarHora}
            onCancel={hideTimePicker}
            locale="es_ES"
            headerTextIOS="Elige una Hora"
            cancelTextIOS="Cancelar"
            confirmTextIOS="Confirmar"
          />
          <Text>{hora}</Text>
        </View>
        <View>
          <TouchableHighlight
            onPress={() => crearNuevaReservacion()}
            style={styles.submitButton}>
            <Text style={styles.textSubmit}>Crear Nueva Reservación</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  form: {
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flex: 1,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 20,
  },
  input: {
    marginTop: 10,
    height: 50,
    borderColor: '#e1e1e1',
    borderWidth: 1,
    borderStyle: 'solid',
  },
  submitButton: {
    padding: 10,
    backgroundColor: colors.BUTTON_COLOR,
    marginVertical: 10,
  },
  textSubmit: {
    color: '#FFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  zonaInput: {
    display: 'flex',
    flexDirection: 'row',
  },
  radioContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonInput:{
    backgroundColor: colors.BUTTON_COLOR,
  }
});
export default Formulario;
