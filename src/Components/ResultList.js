import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {MovieContext} from '../Context/MovieContext';
import {addMovie} from '../Reducer/MovieReducer';

const ResulList = () => {
  const {state, dispatch} = useContext(MovieContext);

  const addFavorites = movieAdd => {
    if (!state.favorites.find(movie => movie === movieAdd))
      state.favorites.push(movieAdd);
    addMovie(state.favorites, dispatch);
  };

  if (!state.movieResults) {
    return null;
  }
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={state.movieResults}
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
