import React, {useContext, useEffect} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import ResulList from '../../Components/ResultList';
import SearchComponent from '../../Components/SearchComponent';
import {MovieContext} from '../../Context/MovieContext';

const Home = () => {
  const {movie, setMovie} = useContext(MovieContext);

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <SearchComponent results={setMovie} />
        <ResulList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#4f6d7a',
  },
});

export default Home;
