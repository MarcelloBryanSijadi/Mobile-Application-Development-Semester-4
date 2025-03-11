import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput placeholder="Masukkan username anda" style={styles.input} />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          placeholder="Masukkan password anda"
          secureTextEntry
          style={styles.input}
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

// Styles untuk React Native
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  welcomeText: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  inputContainer: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    width: '100%',
    padding: 10,
    fontSize: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: 'white',
  },
  button: {
    marginTop: 10,
    width: '100%',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#007bff',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default App;
