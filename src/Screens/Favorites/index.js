import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {FAV_KEY} from '../../Consts/consts';

const Favorites = () => {
  const [favorites, setfavorites] = useState({fav: []});
  const [refresh, setRefresh] = useState(false);

  const loadFavorites = async () => {
    let favorites = [];
    try {
      favorites = await AsyncStorage.getItem(FAV_KEY);

      setfavorites(JSON.parse(favorites));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    loadFavorites();
  }, [refresh]);

  return (
    <View>
      <TouchableOpacity onPress={() => setRefresh(!refresh)}>
        <Text>Favorites</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => AsyncStorage.clear()}>
        <Text>Clean</Text>
      </TouchableOpacity>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={favorites}
        keyExtractor={fav => fav.imdbID}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity>
                <Text style={styles.title}>{item.Title}</Text>
                <Image style={styles.image} source={{uri: item.Poster}} />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    width: 350,
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    margin: 20,
  },
  image: {
    alignSelf: 'center',
    height: 200,
    width: 200,
    borderRadius: 15,
    marginBottom: 10,
  },
});

export default Favorites;
