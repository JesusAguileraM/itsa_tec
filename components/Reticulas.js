import React, { useState, useEffect,useRef } from 'react'
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar,
    Linking
} from 'react-native';
import {Button,  Avatar, Card, Title, Paragraph, Dialog, Portal,Caption,ProgressBar,Colors} from 'react-native-paper';


const { width, heigth } = Dimensions.get('window');


const Carousel = () => {
    <View style={styles.contenidoCard}>
    <ScrollView>
        <Card  onPress={ ()=>{ Linking.openURL('https://www.itsa.edu.mx/wp-content/uploads/2014/11/Reti%CC%81cula-ISIC-2010-224-May161.pdf')}}>
            <Card.Content>
            <Title>Ing.Sistemas en Computacionales</Title>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://moodle.itq.edu.mx/pluginfile.php/42340/course/overviewfiles/Ingenieria-en-Sistemas-Computacionales.jpg' }} />
            <Card.Actions>
            <Button>Ver Reticula</Button>
            </Card.Actions>
        </Card>

        <Card  onPress={ ()=>{ Linking.openURL('https://www.itsa.edu.mx/wp-content/uploads/2014/11/Reti%CC%81cula-ISIC-2010-224-May161.pdf')}}>
            <Card.Content>
            <Title>Ing. en adiministración de Empresas</Title>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://edec.mx/wp-content/uploads/2017/08/Licenciatura-en-Administracion-de-Empresas.jpg' }} />
            <Card.Actions>
            <Button>Ver Reticula</Button>
            </Card.Actions>
        </Card>

        <Card  onPress={ ()=>{ Linking.openURL('https://www.itsa.edu.mx/wp-content/uploads/2014/11/Reti%CC%81cula-ISIC-2010-224-May161.pdf')}}>
            <Card.Content>
            <Title>Ing. Informática</Title>
            </Card.Content>
            <Card.Cover source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT38B0x3dvMrR9GwtzvwDQDi2XFMRDIsbFyA&usqp=CAU' }} />
            <Card.Actions>
            <Button>Ver Reticula</Button>
            </Card.Actions>
        </Card>
    </ScrollView>
</View>
    
}


const styles = StyleSheet.create({
    contenidoCard:{
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height /3 + 20,
    },
    
})

export default Carousel