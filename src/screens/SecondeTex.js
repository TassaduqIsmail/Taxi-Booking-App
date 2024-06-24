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
import Smt from '../assets/Images/PNG/Smt.png';

import Toast from 'react-native-toast-message';
import {Back, BackArrow, SecondBack} from '../assets/Images/SVGs/Continue';

const SecondeTex = ({navigation}) => {
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
          BLINK har startats av några taxi entusiaster med många års erfarenhet
          av taxibranschen. Ambitionen är att appen ska vara en pålitlig partner
          för både passagerare och chaufförer. BLINK är en webbaserad plattform
          där du kan snabbt och enkelt beställa en taxi där du befinner dig.
        </Text>
        <Text style={styles.buttonText}>
          Websidan eller appen i din telefon har allt du behöver för att boka
          din resa. Förbokningar kan ej tas emot utan allt sker såsom
          direktbokning. Alltid fast pris på din resa i förväg.
        </Text>
        <Text style={styles.buttonText}>
          Starta din BLINK upplevelse med att registrera dig och sedan kan du
          enkelt boka din resa
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.buttonText2}>TREVLIG RESA önskar</Text>
          <Image source={Smt} />
        </View>
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
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    width: width * 0.8,
    textAlign: 'center',
    marginVertical: 10,
  },
  buttonText2: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    width: width * 0.5,
    textAlign: 'center',
    marginVertical: 10,
  },
  MenubarContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 100,
    alignSelf: 'flex-end',
    margin: 20,
  },
});

export default SecondeTex;
