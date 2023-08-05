import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AppBar = () => {
  return (
      <View style={styles.header}>
          <Text style={styles.title}>EXPENCE MANAGER</Text>
      </View>
  )
}

const styles = StyleSheet.create({
header: {
  height: 80,
  paddingTop: 38,
  backgroundColor: 'black',
},
title: {
  textAlign: 'center',
  color: '#fff',
  fontSize: 20,
  fontWeight: 'bold'
}
});

export default AppBar;
