import React from 'react';
import {View, Text, Image, ScrollView, StyleSheet} from 'react-native';

const users = [
  {
    id: '1',
    first_name: 'George',
    last_name: 'Bluth',
    email: 'george.bluth@reqres.in',
    avatar: 'https://reqres.in/img/faces/1-image.jpg',
  },
  {
    id: '2',
    first_name: 'Janet',
    last_name: 'Weaver',
    email: 'janet.weaver@reqres.in',
    avatar: 'https://reqres.in/img/faces/2-image.jpg',
  },
  {
    id: '3',
    first_name: 'Emma',
    last_name: 'Wong',
    email: 'emma.wong@reqres.in',
    avatar: 'https://reqres.in/img/faces/3-image.jpg',
  },
  {
    id: '4',
    first_name: 'Eve',
    last_name: 'Holt',
    email: 'eve.holt@reqres.in',
    avatar: 'https://reqres.in/img/faces/4-image.jpg',
  },
  {
    id: '5',
    first_name: 'Charles',
    last_name: 'Morris',
    email: 'charles.morris@reqres.in',
    avatar: 'https://reqres.in/img/faces/5-image.jpg',
  },
  {
    id: '6',
    first_name: 'Tracey',
    last_name: 'Ramos',
    email: 'tracey.ramos@reqres.in',
    avatar: 'https://reqres.in/img/faces/6-image.jpg',
  },
  {
    id: '7',
    first_name: 'Michael',
    last_name: 'Lawson',
    email: 'michael.lawson@reqres.in',
    avatar: 'https://reqres.in/img/faces/7-image.jpg',
  },
  {
    id: '8',
    first_name: 'Lindsay',
    last_name: 'Ferguson',
    email: 'lindsay.ferguson@reqres.in',
    avatar: 'https://reqres.in/img/faces/8-image.jpg',
  },
  {
    id: '9',
    first_name: 'Tobias',
    last_name: 'Funke',
    email: 'tobias.funke@reqres.in',
    avatar: 'https://reqres.in/img/faces/9-image.jpg',
  },
  {
    id: '10',
    first_name: 'Byron',
    last_name: 'Fields',
    email: 'byron.fields@reqres.in',
    avatar: 'https://reqres.in/img/faces/10-image.jpg',
  },
  {
    id: '11',
    first_name: 'George',
    last_name: 'Edwards',
    email: 'george.edwards@reqres.in',
    avatar: 'https://reqres.in/img/faces/11-image.jpg',
  },
  {
    id: '12',
    first_name: 'Rachel',
    last_name: 'Howell',
    email: 'rachel.howell@reqres.in',
    avatar: 'https://reqres.in/img/faces/12-image.jpg',
  },
];

const UserList = () => {
  return (
    <ScrollView contentContainerStyle={styles.listContainer}>
      {users.map(user => (
        <View key={user.id} style={styles.card}>
          <Image source={{uri: user.avatar}} style={styles.avatar} />
          <View>
            <Text style={styles.name}>
              {user.first_name} {user.last_name}
            </Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    marginVertical: 6,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  email: {
    fontSize: 14,
    color: 'gray',
  },
});

export default UserList;
