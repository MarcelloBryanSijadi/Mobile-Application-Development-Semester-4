import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      {/* Bagian Atas (Merah) */}
      <View style={styles.topSection}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>

      {/* Bagian Logo & Text */}
      <View style={styles.logoSection}>
        <Image
          source={require('./assets/images/logo-with-motto-3.png')}
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Universitas Klabat</Text>
          <Text style={styles.subtitle}>Pathway to Excellence</Text>
        </View>
      </View>

      {/* Bagian Bawah (Biru) */}
      <View style={styles.bottomSection}>
        <View style={styles.blackBox} />
        <View style={styles.yellowBox} />
        <View style={styles.blackBox} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  // Bagian Atas
  topSection: {
    width: '100%',
    height: '15%',
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // Bagian Bawah
  bottomSection: {
    width: '100%',
    height: '15%',
    backgroundColor: 'aqua',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  // Kotak Hitam
  blackBox: {
    width: 60,
    height: 60,
    backgroundColor: 'yellow',
  },
  // Kotak Kuning
  yellowBox: {
    width: 60,
    height: 60,
    backgroundColor: 'black',
  },
  // Bagian Logo
  logoSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 150, // Ukuran logo diperbesar
    height: 150,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 18,
    fontStyle: 'italic',
  },
});

export default App;
