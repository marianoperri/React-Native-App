import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MovieContext} from '../Context/MovieContext';
import {FAV_KEY} from '../Consts/consts';

const ResulList = () => {
  const {movie} = useContext(MovieContext);
  const addFavorites = async movieAdd => {
    let favorites = [];
    const res = await AsyncStorage.getItem(FAV_KEY);
    favorites = JSON.parse(res);
    if (favorites === null) {
      favorites = [];
      favorites.push(movieAdd);
    } else {
      favorites.push(movieAdd);
    }
    try {
      await AsyncStorage.setItem(FAV_KEY, JSON.stringify(favorites));
    } catch (err) {
      console.log(err);
    }
  };

  if (!movie.movieResults) {
    return null;
  }
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={movie.movieResults}
        keyExtractor={results => results.imdbID}
        renderItem={({item}) => {
          return (
            <View>
              <TouchableOpacity onPress={() => addFavorites(item)}>
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
    color: '#fff',
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
  button: {
    color: '#C74459',
    backgroundColor: '#6EFAD8',
  },
});

export default ResulList;
