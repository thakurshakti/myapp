/* eslint-disable prettier/prettier */
import React from 'react';
import {Text} from 'react-native-design-utility';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
const SearchScreen = () => {
  return (
    <>
      <View style={Styles.Search}>
        <TextInput
          style={Styles.input}
          placeholder="Search Podcast"
          selectionColor="black"
        />
      </View>
      <FlatList
        style={Styles.list}
        data={[{id: 1}, {id: 2}]}
        renderItem={() => (
          <View style={Styles.items}>
            <View style={Styles.SubItem} />
            <View style={Styles.texts}>
              <Text style={{fontWeight: 'bold'}}>Harry</Text>
              <Text style={{color: 'grey'}}>This is the subtitle</Text>
              <Text style={{color: '#0afaf6'}}>400 Episodes</Text>
            </View>
            <View />
          </View>
        )}
      />
    </>
  );
};

const Styles = StyleSheet.create({
  Search: {
    backgroundColor: '#ccc8c8',
    height: 50,
    paddingLeft: 40,
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    borderRadius: 10,
  },
  input: {
    fontSize: 18,
  },
  items: {
    // backgroundColor: 'red',
    flexDirection: 'row',
    marginTop: 20,

    // alignItems: 'center',
  },
  SubItem: {
    height: 80,
    width: 80,
    backgroundColor: '#055250',
    borderRadius: 10,
    marginLeft: 10,
  },
  texts: {
    marginLeft: 10,
  },
  list: {
    minHeight: '100%',
  },
});

export default SearchScreen;
