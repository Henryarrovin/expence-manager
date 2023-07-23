import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppBar = ({ title }) => {
  return (
    <View style={styles.appBar}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  appBar: {
    backgroundColor: '#212121',
    height: '10%',
    flexDirection: 'row',
    alignItems: 'flex-start', 
    justifyContent: 'center',
    paddingTop: 20, 
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default AppBar;
