import React from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ProfileScreen = () => {

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 18}}>
          <Avatar.Image 
            source={{
              uri: 'https://maryza.gnomio.com/pluginfile.php/2/course/section/1/logoTecNM.png',
            }}
            size={80}
          />
          <View style={{marginLeft: 20}}>
            <Title style={[styles.title, {marginTop:8,marginBottom: 0,
            }]}>Jesus Alejandro</Title>
            <Title style={[styles.title, {marginTop:0,marginBottom: 5,
            }]}>Aguilera Magaña</Title>
            <Caption style={styles.caption}>Estudiante ISC</Caption>
          </View>
        </View>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Apatzingan-Mich Mexico</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>4531698688</Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#777777" size={20}/>
          <Text style={{color:"#777777", marginLeft: 20}}>Tal15020357@itsa.edu.mx</Text>
        </View>
      </View>
      
      <ScrollView style={styles.scrollView}>
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Title>0</Title>
              <Caption>En curso</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>47</Title>
              <Caption>Faltantes</Caption>
            </View>
            
        </View>
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Title>0</Title>
              <Caption>Aprobadas</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>0</Title>
              <Caption>Reprobadas</Caption>
            </View>
            
        </View>
        <View style={styles.infoBoxWrapper}>
            <View style={[styles.infoBox, {
              borderRightColor: '#dddddd',
              borderRightWidth: 1
            }]}>
              <Title>0</Title>
              <Caption>Especial 1</Caption>
            </View>
            <View style={styles.infoBox}>
              <Title>0</Title>
              <Caption>Especial 2</Caption>
            </View>
            
            
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  infoBoxWrapper: {
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
    borderTopColor: '#dddddd',
    borderTopWidth: 1,
    flexDirection: 'row',
    height: 100,
  },
  infoBox: {
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuWrapper: {
    marginTop: 10,
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});