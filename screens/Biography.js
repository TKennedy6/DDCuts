import { View, StyleSheet, ImageBackground } from 'react-native';
import BarberWheel from '../assets/BarberWheel.png';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { Card, Text, Button, Icon } from "react-native-elements"



const Biography = () => {
    return (
       <ImageBackground
              source={BarberWheel}
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
              resizeMode="cover"
            >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
      <Card containerStyle={styles.Card}>
        <Card.Title style={styles.headerText}>About DD</Card.Title>
        <Card.Divider />
        <View style={styles.contactInfo}>
        <Text style={styles.Text}>Originally from Shreveport, Louisiana, DD has been cutting hair for over 30 years. When not cutting hair, DD enjoys fishing and watching his son play football. DD is also a huge LSU Tigers fan and Dallas Cowboys.</Text>
        </View>
        
      </Card>
      </Animatable.View>
    </ScrollView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Card: {
        width: '90%',
        backgroundColor: 'rgba(17, 5, 5, 0.5)',
        borderRadius: 15,
        padding: 50
    },
    contactInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    Icon: {
        marginRight: 10,
    },
    headerText: {
        color: '#fff',
        opacity: 1,
        fontSize: 30
    },
     Text: {
        color: '#fff',
        opacity: 1,
        fontSize: 20
    }
})

export default Biography;