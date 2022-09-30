import React, {useState} from 'react';
import { View, StyleSheet, Text, ScrollView, Image, Modal, Button, TouchableHighlight } from 'react-native';
import {room1} from './src/img/room1.jpg'
import {room2} from './src/img/room2.jpg'

const App = () => {
  const [modalCuarto, setModalCuarto] = useState(false);
  const [modalServicios, setModalServicios] = useState(false);
  const [modalLugares, setModalLugares] = useState(false);

  return (
    <>
      <Modal transparent={true} animationType='slide' visible={modalCuarto} onRequestClose={() => {
        alert('El modal se cerró')
      }} >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle} >Habitacion</Text>
          <View styles={styles.modalContainer_image}>
            <Image style={styles.modalImages} source={require('./src/img/room1.jpg')} />
          </View>
          <Text style={styles.modalParaph} >Precio: $50 c/n</Text>
          <Button title="Cerrar" onPress={()=>{setModalCuarto(!modalCuarto)}} >Cerrar el modal</Button>
        </View>
      </Modal>
      <Modal transparent={true} animationType='slide' visible={modalServicios} onRequestClose={() => {
        alert('El modal se cerró')
      }} >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle} >Servicio</Text>
          <View styles={styles.modalContainer_image}>
            <Image style={styles.modalImages} source={require('./src/img/buffet.png')} />
          </View>
          <Text style={styles.modalParaph} >Precio: $20</Text>
          <Button title="Cerrar" onPress={()=>{setModalServicios(!modalServicios)}} >Cerrar el modal</Button>
        </View>
      </Modal>
      <Modal transparent={true} animationType='slide' visible={modalLugares} onRequestClose={() => {
        alert('El modal se cerró')
      }} >
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle} >Habitacion</Text>
          <View styles={styles.modalContainer_image}>
            <Image style={styles.modalImages} source={require('./src/img/Ruinas.jpeg')} />
          </View>
          <Text style={styles.modalParaph} >Precio: $10 c/entrada</Text>
          <Button title="Cerrar" onPress={()=>{setModalLugares(!modalLugares)}} >Cerrar el modal</Button>
        </View>
      </Modal>
      <View style={styles.contenedor}>
        <Text style={styles.hotelTitle} >Hotel San Sebastian</Text>
        <ScrollView>
          <ScrollView style={styles.caja}>
            <Text style={styles.sectionTitle}>Habitaciones</Text>
            <ScrollView style={styles.imagesContainer}>
              <TouchableHighlight onPress={() => {setModalCuarto(!modalCuarto)}} >
                <View style={styles.itemContainer} >
                  <Image style={styles.images} source={require('./src/img/room1.jpg')} />
                  <Text style={styles.itemTitle} >Cuarto Premium</Text>
                </View>
              </TouchableHighlight>
              <View style={styles.itemContainer} >
                <Image style={styles.images} source={require('./src/img/room2.jpg')} />
                <Text style={styles.itemTitle} >Cuarto Deluxe</Text>
              </View>
            </ScrollView>
          </ScrollView>
          <ScrollView style={styles.caja}>
            <Text style={styles.sectionTitle}>Servicios</Text>
            <ScrollView style={styles.imagesContainer}>
              <TouchableHighlight onPress={() => {setModalServicios(!modalServicios)}} >
                <View style={styles.itemContainer} >
                  <Image style={styles.images} source={require('./src/img/buffet.png')} />
                  <Text style={styles.itemTitle} >Buffet</Text>
                </View>
              </TouchableHighlight>
              <View style={styles.itemContainer} >
                <Image style={styles.images} source={require('./src/img/spa.jpg')} />
                <Text style={styles.itemTitle} >Spa</Text>
              </View>
            </ScrollView>
          </ScrollView>
          <ScrollView style={styles.caja}>
            <Text style={styles.sectionTitle}>Lugares de interes</Text>
            <ScrollView style={styles.imagesContainer}>
              <TouchableHighlight onPress={() => {setModalLugares(!modalLugares)}} >
                <View style={styles.itemContainer} >
                  <Image style={styles.images} source={require('./src/img/Ruinas.jpeg')} />
                  <Text style={styles.itemTitle} >Ruinas de Titirilquen</Text>
                </View>
              </TouchableHighlight>
              <View style={styles.itemContainer} >
                <Image style={styles.images} source={require('./src/img/parque.jpg')} />
                <Text style={styles.itemTitle} >Parque Merequetengue</Text>
              </View>
            </ScrollView>
          </ScrollView>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#21212D',
    flex: 1,
    flexDirection: 'column',
  },
  hotelTitle:{
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '600',
    paddingTop: 48,
    paddingBottom: 22
  },
  sectionTitle: {
    textAlign: 'left',
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '600'
  },   
  caja: {
    padding: 20,
    flex: 1,
    backgroundColor: '#2C2C38',
    marginTop: 12,
    marginBottom: 12
  },
  imagesContainer:{
    flexDirection: 'column',
    width: '100%',
    marginTop: 16,
  },  
  images: {
    width: 320,
    height: 220,
  },
  itemTitle:{
    textAlign:'center',
    color: '#FFFFFF',
    marginTop: 12
  },
  itemContainer:{
    marginTop: 18,
  },
  modalContainer:{
    backgroundColor: '#FFFFFF',
    marginTop: 158,
  },
  modalTitle:{
    textAlign: 'center',
    fontSize: 26,
    fontWeight: '700'
  },
  modalParaph:{
    textAlign: 'center',
    fontSize: 18,
    marginTop: 16
  },
  modalContainer_image:{
    marginTop: 12
  },
  modalImages:{
    width: 320,
    height: 220,
    marginTop: 32,
    marginLeft: 20
  }
});
export default App;
