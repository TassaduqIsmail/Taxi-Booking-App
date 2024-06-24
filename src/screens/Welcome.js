import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';

import React, {useEffect} from 'react';

import WelcomeIm from '../assets/Images/PNG/Register.jpg';
import {ToastContainer} from 'react-bootstrap';
import Toast from 'react-native-toast-message';

const Welcome = ({navigation}) => {
  return (
    <ImageBackground source={WelcomeIm} style={styles.container}>
      <View style={styles.Nullcontainer}></View>

      <View style={styles.MainContainer}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}
          style={styles.ButtonContainer}>
          <Text style={styles.buttonText}>Passagerare</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Driverregis');
          }}
          style={styles.ButtonContainer}>
          <Text style={styles.buttonText}>Chaufför-Åkeri</Text>
        </TouchableOpacity>
      </View>

      <Toast />
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
    height: height * 0.55,
  },

  MainContainer: {
    height: height * 0.25,
    justifyContent: 'space-evenly',
    marginTop: height * 0.04,
  },

  ButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#449C3D',
    padding: 10,
    width: width * 0.68,
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
  },

  buttonText: {
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default Welcome;
