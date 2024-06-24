import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';

import React, {useEffect, useState} from 'react';

import RNBootSplash from 'react-native-bootsplash';

import WelcomeIm from '../assets/Images/PNG/Mainback.png';
import Main from '../assets/Images/PNG/Logo.png';
import Toast from 'react-native-toast-message';
import CheckBox from '@react-native-community/checkbox';

const Register = ({navigation}) => {
  useEffect(() => {
    const hideSplash = () => {
      RNBootSplash.hide();
    };
    const timeoutId = setTimeout(hideSplash, 1000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const [name, setName] = useState();
  const [address, setaddress] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [date, setdate] = useState();
  const [code, setcode] = useState();
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = newValue => {
    setChecked(newValue);
  };
  const [checkedHem, setCheckedHem] = useState(false);

  const handleCheckboxChangeHem = newValue => {
    setCheckedHem(newValue);
  };

  return (
    <ImageBackground source={WelcomeIm} style={styles.container}>
      <ScrollView>
        <View style={styles.Logocontainer}>
          <Image source={Main} resizeMode="contain" />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.Title}>Dina personuppgifter</Text>
        </View>

        <View style={styles.MainInputs}>
          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Namn</Text>
            <TextInput
              placeholder="Namn"
              placeholderTextColor={'#8e8e8e'}
              value={name}
              onChangeText={text => {
                setName(text);
              }}
              style={styles.Inputs}
            />
          </View>

          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Adress</Text>
            <TextInput
              placeholder="Adress"
              placeholderTextColor={'#8e8e8e'}
              value={address}
              onChangeText={text => {
                setaddress(text);
              }}
              style={styles.Inputs}
            />
          </View>

          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Tel.nummer</Text>
            <TextInput
              placeholder="Tel.nummer"
              placeholderTextColor={'#8e8e8e'}
              value={number}
              onChangeText={text => {
                setNumber(text);
              }}
              style={styles.Inputs}
            />
          </View>

          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>E-mail adress</Text>
            <TextInput
              placeholder="E-mail adress"
              placeholderTextColor={'#8e8e8e'}
              value={email}
              onChangeText={text => {
                setEmail(text);
              }}
              style={styles.Inputs}
            />
          </View>
        </View>

        <View style={styles.MainInputs2}>
          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Datum</Text>
            <TextInput
              placeholder="Datum"
              placeholderTextColor={'#8e8e8e'}
              value={date}
              onChangeText={text => {
                setdate(text);
              }}
              style={styles.Inputs}
            />
          </View>

          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Code</Text>
            <TextInput
              placeholder="Code"
              placeholderTextColor={'#8e8e8e'}
              value={code}
              onChangeText={text => {
                setcode(text);
              }}
              style={styles.Inputs}
            />
          </View>
        </View>
        <View style={{paddingHorizontal: 30}}>
          <Text style={styles.Policy}>
            Acceptera våra
            <Text
              onPress={() => {
                navigation.navigate('Terms');
              }}
              style={styles.InnerPolicy}>
              {' '}
              Användarvillkor{' '}
            </Text>
            och
            <Text
              onPress={() => {
                navigation.navigate('Policy');
              }}
              style={styles.InnerPolicy}>
              {' '}
              Integritets policy
            </Text>
          </Text>
          <Text style={styles.Policy}>
            Genom att skicka godkänner du Användarvillkor & Integritets Policy
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              disabled={false}
              value={checked}
              onValueChange={handleCheckboxChange}
              tintColors={{true: '#0079BC', false: '#0079BC'}}
            />

            <Text style={styles.InputTexts}>Skicka</Text>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <CheckBox
              disabled={false}
              value={checkedHem}
              onValueChange={handleCheckboxChangeHem}
              tintColors={{true: '#0079BC', false: '#0079BC'}}
            />

            <Text style={styles.InputTexts}>Hem</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Taxiselection');
            }}
            style={styles.ButtonContainer}>
            <Text style={styles.buttonText}>Registrera</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
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

  Logocontainer: {
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },

  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  Title: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    textAlign: 'center',
  },
  MainInputs: {
    marginTop: 20,
  },
  MainInputs2: {
    marginTop: 50,
  },
  InputContainers: {
    paddingHorizontal: 20,
  },
  InputTexts: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    paddingLeft: 20,
  },
  Inputs: {
    backgroundColor: '#FFF',
    color: '#000',
    fontFamily: 'Poppins-Regular',
    padding: 10,
    paddingHorizontal: 30,
    borderRadius: 50,
    marginBottom: 10,
  },
  Policy: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
  },
  InnerPolicy: {
    color: '#0079BC',
    fontFamily: 'Poppins-SemiBold',
  },
  ButtonContainer: {
    alignItems: 'center',
    backgroundColor: '#449C3D',
    padding: 10,
    width: width * 0.68,
    alignSelf: 'center',
    justifyContent: 'space-between',
    borderRadius: 30,
    marginVertical: 20,
  },

  buttonText: {
    color: '#FFF',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    paddingLeft: 10,
  },
});

export default Register;
