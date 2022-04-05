import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {searchMovie} from '../Api/Api';

const SearchComponent = ({results}) => {
  const [text, setText] = useState('');

  const onSearch = async () => {
    try {
      const res = await searchMovie(`s=${text}`);
      results({movieResults: res});
    } catch (err) {
      console.log('error ' + err);
    }
  };

  return (
    <View>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <TouchableOpacity onPress={onSearch}>
        <Text style={styles.text}>Search </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#6ED0FA',
    backgroundColor: '#fff',
    padding: 10,
  },
  text: {
    color: '#fff',
  },
});

export default SearchComponent;
