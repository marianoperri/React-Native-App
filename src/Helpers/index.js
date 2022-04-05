import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

export const screenOptions = ({route}) => ({
  headerShown: false,
  tabBarIcon: ({focused}) => {
    let iconName;
    let color;
    let size;
    if (route.name === 'Home') {
      iconName = focused ? 'circle' : 'home';
      color = focused ? '#fff' : '#4f6d7a';
      size = focused ? 10 : 17;
    } else if (route.name === 'Favorites') {
      iconName = focused ? 'circle' : 'bars';
      color = focused ? '#fff' : '#4f6d7a';
      size = focused ? 10 : 17;
    }
    return <Icon name={iconName} color={color} size={size} />;
  },
  tabBarActiveTintColor: '#fff',
  tabBarInactiveTintColor: 'gray',
  tabBarActiveBackgroundColor: '#4f6d7a',
  tabBarInactiveBackgroundColor: '#fff',
});
