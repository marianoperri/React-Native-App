import React, {useContext} from 'react';
import {View, StyleSheet, Text, SafeAreaView} from 'react-native';

import ResulList from '../../Components/ResultList';
import SearchComponent from '../../Components/SearchComponent';
import {MovieContext} from '../../Context/MovieContext';

const Home = () => {
  const {state, dispatch} = useContext(MovieContext);
  const {errorMessage} = state;

  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <SearchComponent dispatch={dispatch} />
        {errorMessage ? <Text style={styles.text}>{errorMessage}</Text> : null}
        <ResulList />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#4f6d7a',
  },
  text: {
    color: 'red',
    backgroundColor: 'white',
  },
});

export default Home;
