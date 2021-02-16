import React from 'react';
import {View, SafeAreaView, StyleSheet,ScrollView,Image} from 'react-native';
import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ExploreScreen = () => {

  return (
    <SafeAreaView style={styles.container}>
      <View style={{justifyContent:'center', alignItems:'center', marginTop:8}}>
        <Avatar.Image 
            source={{
              uri: 'https://maryza.gnomio.com/pluginfile.php/2/course/section/1/logoTecNM.png',
            }}
            size={150} 
          />
          </View>
      <View style={styles.userInfoSection}>
        <View style={{flexDirection: 'row', marginTop: 18}}>
          <View style={{marginLeft: 10}}>
            <Title style={[styles.title, {marginTop:8,marginBottom: 0,justifyContent:'center'
            }]}>Instituto Tecnologico Superior de Apatzingan</Title>
          </View>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
      <View style={{marginLeft: 10}}>
            <Title style={[styles.title, {marginTop:8,marginBottom: 0,justifyContent:'center',fontSize:16
            }]}>Vision</Title>
            
            <Caption style={styles.caption,{justifyContent:'center',fontSize:13}}>“Ser la Institución de Educación Superior líder en el Estado de Michoacán, con gestión institucional transparente, reconocida por ofertar programas acreditados, por sus egresados con formación integral, competentes en investigación aplicada y con cultura emprendedora e innovadora”.</Caption>
      </View>

      <View style={{marginLeft: 10, marginBottom:30}}>
            <Title style={[styles.title, {marginTop:8,marginBottom: 0,fontSize:16
            }]}>Misión</Title>
            
            <Caption style={styles.caption,{justifyContent:'center',fontSize:13}}>“Ser un Instituto Tecnológico Lider en Innovación Tecnológica y Emprendedurismo, con participación en programas internacionales para coadyuvar en la formación integral de personas comprometidas con el desarrollo sustentable regional y nacional”.</Caption>
      </View>

      <View style={styles.userInfoSection}>
        <View style={styles.row}>
          <Icon name="map-marker-radius" color="#104573" size={20}/>
          <Text style={{color:"#000", marginLeft: 20}}>Km. 3.5 carretera Apatzingán-Aguililla, Apatzingán Michoacán.</Text>
        </View>
        <View style={styles.row}>
          <Icon name="phone" color="#104573" size={20}/>
          <Text style={{color:"#000", marginLeft: 20}}>453-534-8300,453-534-0371 y 453-534-2513 </Text>
        </View>
        <View style={styles.row}>
          <Icon name="email" color="#104573" size={20}/>
          <Text style={{color:"#000", marginLeft: 20}}>webadmin@itsa.edu.mx </Text>
        </View>
      </View>
      </ScrollView>
      
    </SafeAreaView>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
  },
  userInfoSection: {
    paddingHorizontal: 10,
    marginBottom: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    justifyContent:'center'
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