import React from 'react';
import {View, Text, Image, FlatList, StyleSheet} from 'react-native';

const users = [
  {
    id: '1',
    name: 'Bluth George',
    email: 'george.bluth@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    id: '2',
    name: 'Weaver Janet',
    email: 'janet.weaver@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    id: '3',
    name: 'Wong Emma',
    email: 'emma.wong@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
  },
  {
    id: '4',
    name: 'Holt Eve',
    email: 'eve.holt@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    id: '5',
    name: 'Smith John',
    email: 'john.smith@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    id: '6',
    name: 'Doe Jane',
    email: 'jane.doe@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
  {
    id: '7',
    name: 'Brown Alex',
    email: 'alex.brown@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
  },
  {
    id: '8',
    name: 'Taylor Lisa',
    email: 'lisa.taylor@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/women/8.jpg',
  },
  {
    id: '9',
    name: 'Davis Mark',
    email: 'mark.davis@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/men/9.jpg',
  },
  {
    id: '10',
    name: 'Wilson Emily',
    email: 'emily.wilson@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    id: '11',
    name: 'Anderson Tom',
    email: 'tom.anderson@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    id: '12',
    name: 'Martin Olivia',
    email: 'olivia.martin@reqres.in',
    avatar: 'https://randomuser.me/api/portraits/women/12.jpg',
  },
];

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

const UserItem = ({user}: {user: User}) => (
  <View style={styles.card}>
    <Image source={{uri: user.avatar}} style={styles.avatar} />
    <View>
      <Text style={styles.name}>{user.name}</Text>
      <Text style={styles.email}>{user.email}</Text>
    </View>
  </View>
);

const UserList = () => {
  return (
    <FlatList
      data={users}
      keyExtractor={item => item.id}
      renderItem={({item}) => <UserItem user={item} />}
      contentContainerStyle={styles.listContainer}
      showsVerticalScrollIndicator={true}
    />
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
