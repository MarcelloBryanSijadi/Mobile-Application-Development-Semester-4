import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './App';

export const InputField = ({label, value, onChangeText, keyboardType}) => (
  <View style={styles.inputContainer}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      style={styles.input}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType || 'default'}
      placeholder={`Masukan ${label.toLowerCase()} anda`}
    />
  </View>
);
