import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from 'react-native';

import React, {useEffect} from 'react';

import RNBootSplash from 'react-native-bootsplash';

import WelcomeIm from '../assets/Images/PNG/Mainback.png';
import Logo from '../assets/Images/PNG/Logo.png';
import {BackArrow} from '../assets/Images/SVGs/Continue';

const Texx = ({navigation}) => {
  useEffect(() => {
    const hideSplash = () => {
      RNBootSplash.hide();
    };
    const timeoutId = setTimeout(hideSplash, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <ImageBackground source={WelcomeIm} style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          //   navigation.navigate('Driverhome');
        }}
        style={styles.MenubarContainer}>
        <BackArrow />
      </TouchableOpacity>
      <View style={styles.container3}>
        <Image source={Logo} resizeMode="contain" />

        <Text style={styles.buttonText}>
          Hej, och tack för att du vill samarbeta med BLINK taxi-app!
        </Text>
        <Text style={styles.buttonText}>
          Vi hör av oss till dig inom kort. Ha en bra dag.
        </Text>
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
  container3: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Nullcontainer: {
    height: height * 0.55,
  },
  MainContainer: {
    height: height * 0.25,
    justifyContent: 'space-evenly',
    marginTop: height * 0.04,
  },
  buttonText: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    width: width * 0.6,
    textAlign: 'center',
    marginVertical: 30,
  },
  MenubarContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 100,
    alignSelf: 'flex-end',
    margin: 20,
  },
});

export default Texx;
