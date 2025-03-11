import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Button} from './Button.1';
import {Input} from './Input';

// Komponen Title
const Title = () => {
  return <Text style={styles.title}>Welcome</Text>;
};

// Komponen App
const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
    // Logic untuk penanganan sign in
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleSocialSignIn = (platform: string) => {
    // Logic untuk penanganan sign in dengan platform sosial media
    console.log(`Sign in dengan ${platform}`);
  };

  return (
    <View style={styles.container}>
      <Title />
      <Input
        label="Username/Email"
        placeholder="Masukkan username anda"
        value={username}
        onChangeText={setUsername}
        secureTextEntry={undefined}
      />
      <Input
        label="Password"
        placeholder="Masukkan password anda"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <Button title="Sign in" style={styles.button} onPress={handleSignIn} />

      <View style={styles.socialMediaContainer}>
        <Button
          title="Sign in Google"
          style={[styles.socialMediaButton, styles.googleButton]}
          onPress={() => handleSocialSignIn('Google')}
        />
        <Button
          title="Sign in Facebook"
          style={[styles.socialMediaButton, styles.facebookButton]}
          onPress={() => handleSocialSignIn('Facebook')}
        />
        <Button
          title="Sign in Apple"
          style={[styles.socialMediaButton, styles.appleButton]}
          onPress={() => handleSocialSignIn('Apple')}
        />
      </View>
    </View>
  );
};

// Styles untuk React Native
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
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
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  socialMediaButton: {
    width: '30%',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  googleButton: {
    backgroundColor: 'red',
  },
  facebookButton: {
    backgroundColor: 'blue',
  },
  appleButton: {
    backgroundColor: 'black',
  },
});

export default App;
