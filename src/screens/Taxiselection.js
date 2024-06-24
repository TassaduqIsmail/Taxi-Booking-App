import {
  View,
  Text,
  ImageBackground,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
  TextInput,
  Modal,
  Button,
  FlatList,
  Animated,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Rating, AirbnbRating} from 'react-native-ratings';
import WelcomeIm from '../assets/Images/PNG/Drives.png';
import WelcomeIm2 from '../assets/Images/PNG/Map.png';
import logo from '../assets/Images/PNG/Smalllogo.png';
import blogo from '../assets/Images/PNG/Logo.png';
import Car from '../assets/Images/PNG/Car.png';
import Profile from '../assets/Images/PNG/Profile.png';

import {
  BackArrow,
  Drop,
  Inputline,
  Menubar,
  MiddleArrow,
  SecondBack,
  Speed,
  Travel,
} from '../assets/Images/SVGs/Continue';
import {Draw, Rides} from './Dummy';

const Taxiselection = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [donePrice, setDonePrice] = useState(false);
  const [reached, setReached] = useState(false);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    // Open the modal when the screen loads
    setModalVisible(true);
    setDonePrice(false);
    setReached(false);
  }, []);
  const handleRating = newRating => {
    setRating(newRating);
  };
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerAnimation] = useState(new Animated.Value(0));
  const toggleDrawer = () => {
    const toValue = drawerOpen ? 0 : 1;
    Animated.timing(drawerAnimation, {
      toValue,
      duration: 300,
      useNativeDriver: false,
    }).start();
    setDrawerOpen(!drawerOpen);
  };
  const translateX = drawerAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [-650, 0],
  });
  return (
    <ImageBackground
      source={modalVisible === true ? WelcomeIm : WelcomeIm2}
      style={styles.container}>
      <View style={styles.Main}>
        {modalVisible == true ? (
          <TouchableOpacity
            onPress={toggleDrawer}
            style={styles.MenubarContainer}>
            <Menubar />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              if (reached == true) {
                setReached(false);
                setDonePrice(true);
              }
              if (donePrice == true) {
                setReached(false);
                setDonePrice(false);
                setModalVisible(true);
              }
            }}
            style={styles.MenubarContainer}>
            <SecondBack />
          </TouchableOpacity>
        )}
        {reached === true ? (
          <View
            style={[
              styles.Icon,
              {
                width: width * 0.8,
              },
            ]}>
            {modalVisible == true ? (
              <TouchableOpacity>
                <BackArrow />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Text style={styles.NormalTex2}>Boknings Status; Påbörjad</Text>
              </TouchableOpacity>
            )}
            <Image source={logo} resizeMode="contain" />
          </View>
        ) : (
          <View
            style={[
              styles.Icon,
              {
                width: width * 0.4,
              },
            ]}>
            {modalVisible == true ? (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setDonePrice(true);
                }}>
                <BackArrow />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(false);
                  setDonePrice(false);
                  setReached(true);
                }}>
                <Text style={styles.NormalTex2}>Boka</Text>
              </TouchableOpacity>
            )}
            <Image source={logo} resizeMode="contain" />
          </View>
        )}
      </View>
      <View
        style={[
          styles.Travel,
          {
            position: reached == true ? 'absolute' : null,
            bottom: reached == true ? 90 : 0,
            width: reached == true ? width : width * 0.9,
          },
        ]}>
        <Travel />
        <View>
          {reached == true ? (
            <Text
              // placeholder="P-40, Subash Nagar, Banglore"
              // placeholderTextColor={'#000'}
              style={styles.Input}>
              P-40, Subash Nagar, Banglore
            </Text>
          ) : (
            <TextInput
              placeholder="P-40, Subash Nagar, Banglore"
              placeholderTextColor={'#000'}
              style={styles.Input}
            />
          )}

          <Inputline />
          {reached == true ? (
            <Text
              // placeholder="P-40, Subash Nagar, Banglore"
              // placeholderTextColor={'#000'}
              style={styles.Input}>
              Airport AC Bus Stand, International Airport
            </Text>
          ) : (
            <TextInput
              placeholder="Airport AC Bus Stand, International Airport"
              placeholderTextColor={'#000'}
              style={styles.Input}
            />
          )}
        </View>
      </View>
      {/* <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}> */}
      {modalVisible == true ? (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              contentContainerStyle={{
                margin: 10,
              }}
              data={Rides}
              renderItem={({item, index}) => {
                return (
                  <TouchableOpacity style={styles.MainTouch}>
                    <Image source={item.Car} style={styles.CarImage} />
                    <View style={styles.CarMain}>
                      <Text
                        ellipsizeMode="tail"
                        numberOfLines={1}
                        style={styles.CarName}>
                        {item.Name}
                      </Text>
                      <View style={styles.MainContainer}>
                        <Text style={styles.Cardetail}>${item.Price}/ km</Text>
                        <Text style={styles.Cardetail}>
                          {' '}
                          Capacity: {item.limit},
                        </Text>
                        <Text style={styles.Cardetail}> Type: {item.type}</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />

            <TouchableOpacity
              onPress={() => {
                setModalVisible(!modalVisible);
                setDonePrice(true);
              }}
              style={styles.button}>
              <Text style={styles.buttonText}>Priskoll</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
      {/* </Modal> */}

      {donePrice == true ? (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent2}>
            <View style={styles.Textview}>
              <Text style={styles.NormalTex}>Här är din fasta taxa</Text>
            </View>
            <View style={styles.Middle}>
              <MiddleArrow />
            </View>
            <View style={styles.TexCont}>
              <View style={styles.Tex}>
                <Text style={styles.NormalTex2}>Fast Pris</Text>
                <Text style={styles.NormalTex3}>$ 94.58</Text>
              </View>
              <View style={styles.Null}></View>
              <View style={styles.Tex}>
                <Text style={styles.NormalTex2}>14.29 km</Text>
                <Text style={styles.NormalTex3}>$ 94.58</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <TouchableOpacity
                onPress={() => {
                  setDonePrice(!donePrice);
                  setModalVisible(true);
                }}
                style={styles.button2}>
                <Text style={styles.buttonText}>Tillbaka</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setDonePrice(!donePrice);
                  setReached(true);
                }}
                style={styles.button1}>
                <Text style={styles.buttonText}>Boka</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      ) : null}
      {reached === true ? (
        <View style={styles.modalContainer}>
          <View style={styles.modalContent2}>
            <View style={styles.Textview2}></View>
            <View style={styles.Middle}>
              <MiddleArrow />
            </View>
            <View style={styles.TexCont}>
              <View style={styles.Tex}>
                <Text style={styles.NormalTex}>Standard</Text>
                <Image source={Car} style={styles.CarImage} />
                <Text style={styles.NormalTex}>WES 123</Text>
              </View>
              <View style={styles.Null}></View>
              <View style={styles.Tex}>
                <Speed />
                <Text style={styles.NormalTex}>Test Drive</Text>
                <Rating
                  type="custom"
                  ratingColor="orange"
                  ratingBackgroundColor="grey"
                  imageSize={20}
                  ratingCount={5}
                  startingValue={2}
                  fractions={2}
                  onFinishRating={handleRating}
                  tintColor="#FFF"
                  defaultRating={0}
                  // style={{marginVertical: 20}}
                />
              </View>
            </View>
          </View>
        </View>
      ) : null}
      <Animated.View style={[styles.drawer, {transform: [{translateX}]}]}>
        <View style={styles.drawer1}>
          <View
            style={{
              height: height * 0.28,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <View>
              <Image
                source={Profile}
                style={{
                  height: height * 0.155,
                  width: width * 0.3,
                  resizeMode: 'contain',
                  borderRadius: 100,
                }}
              />
              <Text style={styles.Tex2}>John Ricky </Text>
              <Text style={styles.NormalTex}>testdriver456@gmail.com</Text>
            </View>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text style={styles.NormalTex}>Språk</Text>
              <Drop />
            </TouchableOpacity>
          </View>
          <FlatList
            // contentContainerStyle={{
            //   marginTop: '40%',
            // }}
            data={Draw}
            renderItem={({item, index}) => {
              return (
                <TouchableOpacity
                  // onPress={() => {
                  //   if (index === 0) {
                  //     navigation.navigate('Looks');
                  //   } else if (index === 1) {
                  //     navigation.navigate('Setting');
                  //   } else if (index === 2) {
                  //     navigation.navigate('Account');
                  //   } else if (index === 3) {
                  //     navigation.navigate('FAQs');
                  //   } else if (index === 4) {
                  //     navigation.navigate('Rule');
                  //   } else if (index === 5) {
                  //     navigation.navigate('About');
                  //   } else if (index === 6) {
                  //     navigation.navigate('Orders');
                  //   }
                  // }}
                  style={styles.FLattouch}>
                  {typeof item.img === 'function' ? (
                    item.img()
                  ) : (
                    <Image source={item.img} />
                  )}
                  <Text style={styles.Flattext}>{item?.title}</Text>
                </TouchableOpacity>
              );
            }}
          />
          <Image source={blogo} style={{alignSelf: 'center'}} />
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={toggleDrawer}
          style={styles.drawer2}></TouchableOpacity>
      </Animated.View>
    </ImageBackground>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFEBC7',
  },
  Main: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingLeft: 10,
  },
  MenubarContainer: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 100,
  },
  Icon: {
    flexDirection: 'row',
    alignItems: 'center',

    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  Travel: {
    backgroundColor: '#FFF',
    margin: 10,
    alignSelf: 'center',

    borderRadius: 10,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Input: {
    color: '#000',
    padding: 5,
    fontSize: 15,
    width: width * 0.7,
  },
  modalContainer: {
    position: 'absolute',
    bottom: 0,
    width: width,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'rgba(0,0,0,0.5)', // semi-transparent background
  },
  modalContent: {
    backgroundColor: '#D5D6DA',
    // padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  modalContent2: {
    backgroundColor: '#FFF',
    // padding: 20,
    // borderRadius: 10,
    elevation: 5,
  },
  MainTouch: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 5,
    paddingLeft: 20,
    borderRadius: 10,
    // elevation: 10,
    margin: 5,
  },
  CarImage: {
    height: 30,
    width: 45,
    resizeMode: 'contain',
  },
  MainContainer: {
    flexDirection: 'row',
  },
  CarMain: {
    paddingLeft: 15,
    width: width * 0.6,
  },
  CarName: {
    color: '#000',
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    width: width * 0.55,
  },
  Cardetail: {
    color: '#646464',
    fontSize: 8,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    backgroundColor: '#449C3D',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    backgroundColor: '#449C3D',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.5,
  },
  button2: {
    backgroundColor: 'red',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.5,
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Poppins-Bold',
    fontSize: 25,
  },
  NormalTex: {
    color: '#000',
  },
  NormalTex2: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },
  NormalTex3: {
    color: '#000',
    fontSize: 18,
    fontWeight: '800',
  },
  Tex2: {
    color: '#000',
    fontSize: 20,
    fontWeight: '800',
  },
  Textview: {
    padding: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#00A3FE',
  },
  Textview2: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderColor: '#00A3FE',
  },
  Middle: {alignItems: 'center', width: width},
  Tex: {
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.6,
  },
  TexCont: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: width,
    marginLeft: 1.5,
    padding: 10,
  },
  Null: {
    backgroundColor: '#000',
    width: 2,
    height: height * 0.08,
  },
  drawer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    width: width,
    zIndex: 1,
    flexDirection: 'row',
    // flexDirection: 'row',
    // alignItems: 'center',
  },
  drawer2: {
    top: 0,
    bottom: 0,
    left: 0,
    width: width * 0.35,
    backgroundColor: 'rgba(0, 0, 0, 0.60)',
    zIndex: 1,
  },
  drawer1: {
    width: width * 0.78,
    backgroundColor: '#DFEBC7',
    zIndex: 1,
    opacity: 2,
  },
  FLattouch: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,

    borderColor: '#73479C33',
    paddingLeft: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.35)',
    marginVertical: 5,
  },
  // FlatImg: {height: 30, width: 30, resizeMode: 'contain'},
  Flattext: {
    fontFamily: 'EncodeSans-Bold',
    color: '#000',
    fontSize: 16,
    marginLeft: '10%',
  },
});
export default Taxiselection;
