import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native'; // Import navigation hooks

import Blink from '../assets/Images/PNG/blink1.png';
import open from '../assets/Images/PNG/blink.png';

import RNBootSplash from 'react-native-bootsplash';

const Eyeforeye = () => {
  const [isBlinking, setIsBlinking] = useState(false);
  const navigation = useNavigation(); // Initialize navigation hook

  useEffect(() => {
    const hideSplash = () => {
      RNBootSplash.hide();
    };
    const timeoutId = setTimeout(hideSplash, 500);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setIsBlinking(prevState => !prevState);
    }, 500);

    const navigationTimeout = setTimeout(() => {
      clearInterval(blinkInterval); // Stop blinking after 5 seconds
      navigation.navigate('Home'); // Navigate to the next screen
    }, 5000);

    return () => {
      clearInterval(blinkInterval);
      clearTimeout(navigationTimeout);
    };
  }, []);

  return (
    <ImageBackground source={isBlinking ? Blink : open} style={{flex: 1}}>
      {/* You can add any other components or content here */}
    </ImageBackground>
  );
};

export default Eyeforeye;
