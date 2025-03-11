import React from 'react';
import {Text, View, StyleSheet, Image, ScrollView} from 'react-native';

// Biodata Component
const App = () => {
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileContainer}>
          <Image
            source={require('./assets/images/MBS.jpg')}
            style={styles.profileImage}
          />
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Biodata Diri</Text>
        </View>
        <Text style={styles.subTitle}>Nama : Marcello Bryan Sijadi </Text>

        <Text style={styles.subTitle}>Umur : 20 Tahun </Text>

        <Text style={styles.subTitle}>Status : Mahasiswa</Text>

        <Text style={styles.subTitle}>Hobi : Music, Play Game</Text>
        <Text style={styles.subTitle}>Asal : Jawa</Text>
      </ScrollView>
    </>
  );
};

// Export the component
export default App;

// Styles
const styles = StyleSheet.create({
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  profileImage: {
    height: 200,
    width: 200,
    borderRadius: 75, // Circular shape
    borderWidth: 2,
    borderColor: 'black',
    marginBottom: 10,
  },
  container: {
    borderColor: 'black',
    margin: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: '800',
    color: 'white',
    textAlign: 'center',
    backgroundColor: 'aqua',
    padding: 10,
    marginBottom: 20,
    borderRadius: 15,
  },
  subTitle: {
    fontSize: 25,
    marginLeft: 20,
    fontWeight: '500',
    marginBottom: 10,
  },
  text: {
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 15,
  },
});
