import React, {useEffect, useState, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {MovieContext} from '../../Context/MovieContext';
import SafeAreaView from 'react-native-safe-area-view';
import {localFavorites} from '../../Reducer/MovieReducer';

const Favorites = () => {
  const {state, dispatch} = useContext(MovieContext);

  const [refresh, setRefresh] = useState(false);
  const delFavorite = id => {
    const action = {
      type: 'del_favorites',
      payload: id,
    };
    dispatch(action);
  };
  useEffect(() => {
    dispatch(localFavorites());
    console.log(state.favorites);
  }, [state]);

  useEffect(() => {
    dispatch(localFavorites());
  }, [refresh]);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <TouchableOpacity onPress={() => setRefresh(!refresh)}>
          <Text>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => AsyncStorage.clear()}>
          <Text>Clean</Text>
        </TouchableOpacity>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={state.favorites}
          keyExtractor={fav => fav.imdbID}
          renderItem={({item}) => {
            return (
              <View>
                <TouchableOpacity onPress={() => delFavorite(item.imdbID)}>
                  <Text style={styles.title}>{item.Title}</Text>
                  <Image style={styles.image} source={{uri: item.Poster}} />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
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
