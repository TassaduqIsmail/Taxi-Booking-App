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

import WelcomeIm from '../../assets/Images/PNG/Mainback.png';
import Main from '../../assets/Images/PNG/Logo.png';
import Toast from 'react-native-toast-message';
import CheckBox from '@react-native-community/checkbox';
import {SecondBack} from '../../assets/Images/SVGs/Continue';

const Driverregis = ({navigation}) => {
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
  const [Laddachecked, setLaddachecked] = useState(false);
  const [bildchecked, setbildchecked] = useState(false);
  const [Regchecked, setRegchecked] = useState(false);

  const handleCheckboxChange = newValue => {
    setChecked(newValue);
  };

  const LaddacheckedCheckboxChange = newValue => {
    setLaddachecked(newValue);
  };
  const bildCheckboxChange = newValue => {
    setbildchecked(newValue);
  };
  const RegCheckboxChange = newValue => {
    setRegchecked(newValue);
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
            <Text style={styles.InputTexts}>Företagsnamn</Text>
            <TextInput
              placeholder="Företagsnamn"
              placeholderTextColor={'#8e8e8e'}
              //   value={name}
              //   onChangeText={text => {
              //     setName(text);
              //   }}
              style={styles.Inputs}
            />
          </View>

          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Adress</Text>
            <TextInput
              placeholder="Adress"
              placeholderTextColor={'#8e8e8e'}
              //   value={address}
              //   onChangeText={text => {
              //     setaddress(text);
              //   }}
              style={styles.Inputs}
            />
          </View>

          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Moms reg.nr</Text>
            <TextInput
              placeholder="Moms reg.nr"
              placeholderTextColor={'#8e8e8e'}
              //   value={number}
              //   onChangeText={text => {
              //     setNumber(text);
              //   }}
              style={styles.Inputs}
            />
          </View>

          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Antal bilar</Text>
            <TextInput
              placeholder="Antal bilar"
              placeholderTextColor={'#8e8e8e'}
              //   value={email}
              //   onChangeText={text => {
              //     setEmail(text);
              //   }}
              style={styles.Inputs}
            />
          </View>
          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Reg.nr bilar</Text>
            <TextInput
              placeholder="Reg.nr bilar"
              placeholderTextColor={'#8e8e8e'}
              //   value={email}
              //   onChangeText={text => {
              //     setEmail(text);
              //   }}
              style={styles.Inputs}
            />
          </View>
          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Bankkonto</Text>
            <TextInput
              placeholder="Bankkonto"
              placeholderTextColor={'#8e8e8e'}
              //   value={email}
              //   onChangeText={text => {
              //     setEmail(text);
              //   }}
              style={styles.Inputs}
            />
          </View>
          <View style={styles.InputContainers}>
            <Text style={styles.InputTexts}>Clearing nr (4 siffror)</Text>
            <TextInput
              placeholder="Clearing nr (4 siffror)"
              placeholderTextColor={'#8e8e8e'}
              //   value={email}
              //   onChangeText={text => {
              //     setEmail(text);
              //   }}
              style={styles.Inputs}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={[styles.InputTexts, {marginLeft: 10, fontSize: 10}]}>
              Ladda upp;
              <Text style={[styles.Policy, {fontSize: 10}]}>
                Reg.bevis Bolagsverket
              </Text>
            </Text>
            <CheckBox
              disabled={false}
              value={Laddachecked}
              onValueChange={LaddacheckedCheckboxChange}
              tintColors={{true: '#8e8e8e', false: '#8e8e8e'}}
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 30,
            }}>
            <Text style={[styles.Policy, {fontSize: 10}]}>
              Bild moms.reg Skatteverk
            </Text>
            <CheckBox
              disabled={false}
              value={bildchecked}
              onValueChange={bildCheckboxChange}
              tintColors={{true: '#8e8e8e', false: '#8e8e8e'}}
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginLeft: 30,
            }}>
            <Text style={[styles.Policy, {fontSize: 10}]}>
              Reg.bevis Bolagsverket
            </Text>

            <CheckBox
              disabled={false}
              value={Regchecked}
              onValueChange={RegCheckboxChange}
              tintColors={{true: '#8e8e8e', false: '#8e8e8e'}}
              style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
            />
          </View>
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
        {/* 
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
        </View> */}
        <View style={{paddingHorizontal: 30}}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                styles.InputTexts,
                {fontFamily: 'Poppins-SemiBold', fontSize: 14},
              ]}>
              Ladda upp körkort (båda sidor) ;
            </Text>
            <CheckBox
              disabled={false}
              value={checked}
              onValueChange={handleCheckboxChange}
              tintColors={{true: '#0079BC', false: '#0079BC'}}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                styles.InputTexts,
                {fontFamily: 'Poppins-SemiBold', fontSize: 14},
              ]}>
              Ladda upp Taxiförarlegitimation ;
            </Text>
            <CheckBox
              disabled={false}
              value={checkedHem}
              onValueChange={handleCheckboxChangeHem}
              tintColors={{true: '#0079BC', false: '#0079BC'}}
            />
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          style={styles.Icon}>
          <SecondBack />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Texscreen');
          }}
          style={styles.ButtonContainer}>
          <Text style={styles.buttonText}>Registrera</Text>
        </TouchableOpacity>
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
  Icon: {
    alignItems: 'center',

    backgroundColor: '#EAF2DB',
    justifyContent: 'space-between',
    alignSelf: 'flex-start',
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    paddingLeft: 20,
  },
});

export default Driverregis;
