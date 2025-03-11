import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {styles} from './App';

// Komponen Input
export function Input({
  label,
  placeholder,
  secureTextEntry,
  value,
  onChangeText,
}): React.JSX.Element {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}
