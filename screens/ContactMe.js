import { ScrollView } from "react-native-gesture-handler"
import { Card, Text, Button, Icon } from "react-native-elements"
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';
import { View, ImageBackground, StyleSheet } from "react-native";
import counterSetUp from '../assets/counterSetUp.jpeg';

const ContactScreen = () => {

  return (
    <>
<ImageBackground
              source={counterSetUp}
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
              resizeMode="cover"
            >
            <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
      <Card containerStyle={styles.Card}>
        <Card.Title style={styles.Text}>Get Ahold of DD</Card.Title>
        <Card.Divider />
        <View style={styles.contactInfo}>
            <Icon
        name="instagram"
        type="font-awesome"
        color='#fff'
        size={40}
        style={styles.Icon}/>
        <Text style={styles.Text}>@Phadeguru</Text>
        </View>
        <View style={styles.contactInfo}>
        <Icon
        name="phone"
        type="font-awesome"
        color='#fff'
        size={40}
        style={styles.Icon}/>
        <Text style={styles.Text}>(702) 555-5555</Text>
        </View>
        
      </Card>
      </Animatable.View>
    </ScrollView>
    </ImageBackground>
    </>
  )
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    Card: {
        width: '100%',
        backgroundColor: 'rgba(17, 5, 5, 0.5)',
        borderRadius: 15,
        padding: 60
    },
    contactInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    Icon: {
        marginRight: 10,
    },
    Text: {
        color: '#fff',
        opacity: 1,
        fontSize: 30
    }
})

export default ContactScreen
