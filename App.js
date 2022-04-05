/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MovieContext} from './src/Context/MovieContext';
import Home from './src/Screens/Home';
import Favorites from './src/Screens/Favorites';
import {screenOptions} from './src/Helpers';

const Tab = createBottomTabNavigator();
const App = () => {
  const [movie, setMovie] = useState({});
  return (
    <MovieContext.Provider value={{movie, setMovie}}>
      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Favorites" component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
    </MovieContext.Provider>
  );
};

export default App;
