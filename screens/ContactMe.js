import { ScrollView } from "react-native-gesture-handler"
import { Card, Text, Button, Icon } from "react-native-elements"
import * as Animatable from 'react-native-animatable';
import * as MailComposer from 'expo-mail-composer';
import { View, ImageBackground } from "react-native";
import counterSetUp from '../assets/counterSetUp.jpeg';

const ContactScreen = () => {

  const sendMail = () => {
    MailComposer.composeAsync({
      recipients: ['campsites@nucamp.co'],
      subject: 'Inquiry',
      body: 'To whom it may concern'
    });
  };

  return (
    <>
<ImageBackground
              source={counterSetUp}
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
              resizeMode="cover"
            >
            <ScrollView>
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
      <Card containerStyle={{margin: 20, backgroundColor: "rgba(210, 52, 155, 0.8)" }}>
        <Card.Title>Get Ahold of DD</Card.Title>
        <Card.Divider />
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
        name="instagram"
        type="font-awesome"
        color='#c13584'
        size={40}
        marginRight={10}/>
        <Text style={{fontSize: 24}}>@Phadeguru</Text>
        </View>
        
      </Card>
      </Animatable.View>
    </ScrollView>
    </ImageBackground>
    </>
  )
}

export default ContactScreen
