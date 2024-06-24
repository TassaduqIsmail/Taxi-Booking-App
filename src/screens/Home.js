import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import React, {useEffect} from 'react';

import WelcomeIm from '../assets/Images/PNG/Welcome.jpg';

import ContinueSvg from '../assets/Images/SVGs/Continue';

const Home = ({navigation}) => {
  return (
    <ImageBackground source={WelcomeIm} style={styles.container}>
      <View style={styles.Nullcontainer}></View>
      <View style={styles.titleContainer}>
        <Text style={styles.Title}>Alltid Fast Pris På Din Taxiresa</Text>
      </View>

      <View style={styles.MainContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Plane');
          }}
          style={styles.ButtonContainer}>
          <Text style={styles.buttonText}>Fasta Priser Flygplatser</Text>
          <ContinueSvg />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Welcome');
          }}
          style={styles.ButtonContainer}>
          <Text style={styles.buttonText}>Registrera Dig</Text>
          <ContinueSvg />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={styles.ButtonContainer}>
          <Text style={styles.buttonText}>Boka En Resa</Text>
          <ContinueSvg />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFEBC7',
  },

  Nullcontainer: {
    height: height * 0.49,
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  Title: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 35,
    textAlign: 'center',
  },

  MainContainer: {
    height: height * 0.3,
    justifyContent: 'space-evenly',
    marginTop: height * 0.04,
  },

  ButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#449C3D',
    padding: 8,
    width: width * 0.68,
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
  },

  buttonText: {
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 13,
    paddingLeft: 10,
  },
});

export default Home;
