/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Button
} from 'react-native';

const App: () => React$Node = (props) => {
  const { navigation } = props;
  return (
    <>
    <View style={styles.sectionContainer}>
        <Button title={"FlatListDemo"}
            onPress={ () => {
                navigation.navigate("FlatListDemo")
            }}/>
        <Button title={"SectionListDemo"}
            onPress={ () => {
                navigation.navigate("SectionListDemo")
            }}/>
    </View>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

export default App;
