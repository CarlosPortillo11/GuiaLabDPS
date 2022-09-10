import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text, Card, Button, Icon } from '@rneui/themed';

const comidas = [
  {
    id: '1',
    title: 'Pupusas',
    description: 'Las pupusas son una comida bien rica rica',
    src: require('./src/imgs/pupusa.jpg'),
  },
  {
    id: '2',
    title: 'Nuegados',
    description: 'Acompañados con miel de panela son uno de los platillos más ricos',
    src: require('./src/imgs/nuegados.jpg'),
  },
  {
    id: '3',
    title: 'Elote loco',
    description: 'Ya sea raspado o en mazorca, siempre y cuando lleve sus condimentos porque es lo que importa',
    src: require('./src/imgs/eloteloco.jpeg'),
  },
  {
    id: '4',
    title: 'Empanadas',
    description: 'Las empanadas están hechos de masa de maíz o platano y pueden tener leche o frijol',
    src: require('./src/imgs/empanadas.jpg'),
  },
  {
    id: '5',
    title: 'Riguas',
    description: 'La hermana lejana de la pupusa, no se queda atras con respecto a sabrosura',
    src: require('./src/imgs/riguas.jpg'),
  }
]

type CardsComponentsProps = {};

const Cards: React.FunctionComponent<CardsComponentsProps> = () => {
  return (
    <>
      <ScrollView>
        <View style={styles.container}>
          <Card style={styles.card}>
            <Card.Title style={{fontSize: 24, textAlign: 'center'}} >COMIDA TÍPICA</Card.Title>
            <Card.Divider />
            {comidas.map((item, i) => {
              return (
                <View key={i} style={styles.food}>
                  <Image style={styles.image} source={item.src} />
                  <View style={styles.info}>
                    <Text style={styles.name}>{item.title}</Text>
                    <Text style={styles.description}>{item.description}</Text>
                  </View>
                </View>
              );
            })}
          </Card>
        </View>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
    height: '100%'
  },
  card: {
    backgroundColor: '#181818'
  },
  fonts: {
    marginBottom: 8,
  },
  food: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  info:{
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 3
  },
  image: {
    width: 70,
    height: 80,
    marginRight: 10,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 24,
    marginTop: 5,
  },
  description: {
    width: '100%',
  }
});
  
export default Cards;