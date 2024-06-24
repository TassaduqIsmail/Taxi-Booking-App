import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
  Switch,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';

import logo from '../../assets/Images/PNG/Smalllogo.png';
import Profile from '../../assets/Images/PNG/Profile.png';
import {
  Back,
  BackArrow,
  Call2,
  Car,
  Email,
  Forar,
  Menubarw,
  Prof,
  SecondBack,
  Tup,
} from '../../assets/Images/SVGs/Continue';

const Driverp = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled(previousState => !previousState);
  };
  return (
    <View style={styles.Container}>
      <View
        style={{
          backgroundColor: '#449C3D',
          flexDirection: 'row',
          width: width,
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.pop();
          }}
          style={styles.MenubarContainer}>
          <SecondBack />
        </TouchableOpacity>
        <Text
          style={{
            color: '#FFF',
            fontFamily: 'Poppins-ExtraBold',
            fontSize: 20,
          }}>
          Min Profil
        </Text>
        <Image source={logo} />
      </View>
      <ScrollView>
        <View>
          <View style={styles.FLattouch}>
            <Text style={styles.Flattext}>Aktiv Status</Text>
            <Switch
              trackColor={{false: '#767577', true: '#20DF01'}}
              thumbColor={isEnabled ? '#fff' : '#fff'}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          <TouchableOpacity style={styles.FLattouch}>
            <Text style={styles.Flattext}>Profil info</Text>
            <Prof />
          </TouchableOpacity>
          <View style={{alignItems: 'center', marginVertical: 10}}>
            <Image
              source={Profile}
              style={{
                height: height * 0.18,
                width: width * 0.38,
                borderRadius: 100,
              }}
            />
            <Text
              style={[
                styles.Flattext,
                {color: '#000', fontFamily: 'Poppins-ExtraBold', fontSize: 20},
              ]}>
              John Ricky
            </Text>
          </View>
          <View style={styles.FLattouch2}>
            <Email />
            <View style={{paddingLeft: 20}}>
              <Text style={styles.Flattext2}>Email</Text>
              <Text style={styles.Flattext3}>testdriver456@gmail.com</Text>
            </View>
          </View>
          <View style={styles.FLattouch2}>
            <Call2 />
            <View style={{paddingLeft: 20}}>
              <Text style={styles.Flattext2}>Mobil nummer</Text>
              <Text style={styles.Flattext3}>+92 324 6549 456</Text>
            </View>
          </View>
          <View style={styles.FLattouch2}>
            <Forar />
            <View style={{paddingLeft: 20}}>
              <Text style={styles.Flattext2}>Förar id</Text>
              <Text style={styles.Flattext3}>code3456</Text>
            </View>
          </View>
          <View style={styles.FLattouch2}>
            <Car />
            <View style={{paddingLeft: 20}}>
              <Text style={styles.Flattext2}>Storbil</Text>
              <Text style={styles.Flattext3}>Comfort</Text>
            </View>
          </View>
          <View style={styles.FLattouch2}>
            <Tup />
            <View style={{paddingLeft: 20}}>
              <Text style={styles.Flattext2}>Förar Betyg</Text>
              <Text style={styles.Flattext3}>4.5</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#DFEBC7',
    flex: 1,
  },
  MenubarContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 100,
  },
  FLattouch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,

    borderColor: '#73479C33',
    paddingHorizontal: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    marginVertical: 5,
    justifyContent: 'space-between',
  },
  FLattouch2: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,

    borderColor: '#73479C33',
    paddingHorizontal: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    marginVertical: 5,
  },
  Flattext: {
    fontFamily: 'EncodeSans-Bold',
    color: '#000',
    fontSize: 16,
  },
  Flattext2: {
    fontFamily: 'Poppins-SemiBold',
    color: '#000',
    fontSize: 14,
  },
  Flattext3: {
    fontFamily: 'Poppins-Regular',
    color: '#8e8e8e',
    fontSize: 12,
  },
});
export default Driverp;
