import React, {useState} from 'react';
import {View, Alert, StyleSheet} from 'react-native';
import {Title} from './Title';
import {InputField} from './InputField.1';
import {RegisterButton} from './RegisterButton';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    console.log({name, username, email, address, phone});
    Alert.alert('Registration Successful', 'Check console for details.');
  };

  return (
    <View style={styles.container}>
      <Title text="Registration" />
      <InputField
        label="Name"
        value={name}
        onChangeText={setName}
        keyboardType={undefined}
      />
      <InputField
        label="Username"
        value={username}
        onChangeText={setUsername}
        keyboardType={undefined}
      />
      <InputField
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <InputField
        label="Address"
        value={address}
        onChangeText={setAddress}
        keyboardType={undefined}
      />
      <InputField
        label="Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />
      <RegisterButton onPress={handleRegister} />
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#fff', flex: 1},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 20},
  inputContainer: {marginBottom: 15},
  label: {fontSize: 16, fontWeight: '500', marginBottom: 5},
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#D633FF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {color: '#fff', fontSize: 18, fontWeight: 'bold'},
});

export default RegistrationScreen;
