import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {Back, Uper} from '../assets/Images/SVGs/Continue';
import Main from '../assets/Images/PNG/Logo.png';
import {Termstext} from './Components/Policytext';
import CheckBox from '@react-native-community/checkbox';
const Terms = ({navigation}) => {
  const scrollViewRef = useRef(null);

  const handleScrollToTop = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({y: 0, animated: true});
    }
  };
  const [checked, setChecked] = useState(false);

  const handleCheckboxChange = newValue => {
    setChecked(newValue);
    setTimeout(() => {
      navigation.pop();
    }, 1000);
  };
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => {
          navigation.pop();
        }}>
        <Back />
      </TouchableOpacity>
      <ScrollView ref={scrollViewRef}>
        <Image source={Main} resizeMode="contain" style={styles.img} />
        <View style={styles.TextContainer}>
          <Text style={styles.InnerPolicy}>
            Allmänna villkor för användning av Blink -appen -Passagerare
          </Text>
        </View>
        <View style={styles.TextContainer2}>
          <Termstext />
        </View>
        <View style={styles.UpersMain}>
          <View style={{alignItems: 'flex-start', paddingLeft: 20}}>
            <TouchableOpacity
              onPress={() => {
                navigation.pop();
              }}>
              <Text style={styles.InputTexts}>Tillbaka</Text>
            </TouchableOpacity>
            <CheckBox
              disabled={false}
              value={checked}
              onValueChange={handleCheckboxChange}
              tintColors={{true: '#000', false: '#000'}}
            />
          </View>
          <TouchableOpacity onPress={handleScrollToTop} style={styles.Scrollup}>
            <Uper />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#DFEBC7',
  },
  backContainer: {
    backgroundColor: '#EAF2DB',
    padding: 15,
    width: width * 0.25,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
  },
  Title: {
    color: '#000',
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
    textAlign: 'center',
    marginTop: 10,
  },
  img: {
    alignSelf: 'center',
    marginVertical: 10,
  },
  TextContainer: {
    padding: 10,
    alignItems: 'center',
  },
  TextContainer2: {
    padding: 10,
    paddingLeft: 30,
  },
  InnerPolicy: {
    color: '#000',
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    textAlign: 'left',
  },
  Scrollup: {
    backgroundColor: '#DFEBC7',
    elevation: 10,
    padding: 15,
    alignSelf: 'flex-end',
    borderRadius: 100,
    margin: 10,
  },
  UpersMain: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  InputTexts: {
    color: '#000',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
  },
});

export default Terms;
