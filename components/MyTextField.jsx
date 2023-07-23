import { View, TextInput, StyleSheet } from 'react-native';

const MyTextField = ({ hintText, onChangeText }) => {
    
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={hintText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});

export default MyTextField;
