/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MovieContext} from './src/Context/MovieContext';
import Home from './src/Screens/Home';
import Favorites from './src/Screens/Favorites';
import {screenOptions} from './src/Helpers';
import {MovieReducer} from './src/Reducer/MovieReducer';

const Tab = createBottomTabNavigator();

const App = () => {
  const initialState = {
    movieResults: [],
    favorites: [],
    errorMessage: '',
  };
  const [state, dispatch] = useReducer(MovieReducer, initialState);
  return (
    <MovieContext.Provider value={{state, dispatch}}>
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
