import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {styles} from './App';

// Komponen Button
export function Button({title, style, onPress}): React.JSX.Element {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
