import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import plane from '../assets/Images/PNG/plane.png';
import {Planei} from './Dummy';
import {Home} from '../assets/Images/SVGs/Continue';
const Plane = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <Image
        source={plane}
        style={{
          width: width,
          //   resizeMode: 'contain',
        }}
      />
      <TouchableOpacity
        style={styles.backContainer}
        onPress={() => {
          navigation.pop();
        }}>
        <Home />
      </TouchableOpacity>
      <FlatList
        data={Planei}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity>
              <View
                style={{
                  backgroundColor: index == 0 ? null : '#EAF2DB',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: width * 1,
                  padding: 10,
                  marginVertical: 5,
                }}>
                <Text
                  style={[
                    styles.Headerssss,
                    {
                      fontFamily:
                        index === 0 ? 'Poppins-Bold' : 'Poppins-Regular',

                      width: width * 0.3,
                    },
                  ]}>
                  {item?.From}
                </Text>
                <Text
                  style={[
                    styles.Headerssss,
                    {
                      fontFamily:
                        index === 0 ? 'Poppins-Bold' : 'Poppins-Regular',

                      width: width * 0.3,
                      marginLeft: 15,
                    },
                  ]}>
                  {item?.To}
                </Text>
                <Text
                  style={[
                    styles.Headerssss,
                    {
                      fontFamily:
                        index === 0 ? 'Poppins-Bold' : 'Poppins-Regular',

                      width: width * 0.2,
                    },
                  ]}>
                  {item?.Standard}
                </Text>
                <Text
                  style={[
                    styles.Headerssss,
                    {
                      fontFamily:
                        index === 0 ? 'Poppins-Bold' : 'Poppins-Regular',

                      width: width * 0.2,
                    },
                  ]}>
                  {item?.Bigcar}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#C7E197',
  },
  Headerssss: {color: '#000'},
  backContainer: {
    backgroundColor: '#E0E0EA',
    padding: 15,
    width: width * 0.25,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 20,
    position: 'absolute',
  },
});

export default Plane;
