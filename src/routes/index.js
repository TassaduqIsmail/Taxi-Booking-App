import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Welcome from '../screens/Welcome';
import Register from '../screens/Register';
import Policy from '../screens/Policy';
import Terms from '../screens/Terms';
import Taxiselection from '../screens/Taxiselection';
import Home from '../screens/Home';
import Driverregis from '../screens/DriverScreens/Driverrigis';
import Texscreen from '../screens/DriverScreens/Texscreen';
import Driverhome from '../screens/DriverScreens/Driverhome';
import Driverp from '../screens/DriverScreens/Driverp';
import Tranporter from '../screens/Tranporter';
import Driveee from '../screens/Driveeee';
import Plane from '../screens/Plane';
import Eyeforeye from '../screens/Eyeforeye';

const Stack = createNativeStackNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Eyeforeye"
          component={Eyeforeye}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Policy"
          component={Policy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Terms"
          component={Terms}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Taxiselection"
          component={Taxiselection}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Driverregis"
          component={Driverregis}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Texscreen"
          component={Texscreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Driverhome"
          component={Driverhome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Driverp"
          component={Driverp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Tranporter"
          component={Tranporter}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Driveee"
          component={Driveee}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Plane"
          component={Plane}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Route;
