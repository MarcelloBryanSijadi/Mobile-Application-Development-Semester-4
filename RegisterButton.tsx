import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './App';

export const RegisterButton = ({onPress}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonText}>Register</Text>
  </TouchableOpacity>
);
