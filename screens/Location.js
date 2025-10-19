import { Text, View, ImageBackground, StyleSheet } from 'react-native';
import BarberChair from '../assets/BarberChair.jpg';
import {Card} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const Location = () => {
    return (
        <ImageBackground
              source={BarberChair}
              style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
              resizeMode="cover"
            >
              <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
              <Card containerStyle={styles.Card}>
        <Card.Title style={styles.headerText}>Classic Cuts 2.0</Card.Title>
        <Card.Divider />
        <View style={styles.contactInfo}>
        <Text style={styles.Text}>DD will be cutting out of the newly reimagined Classic Cuts 2.0. However, until the shop opens, DD is a mobile barber that comes to you!</Text>
        </View>
      </Card>
      </Animatable.View>
      </ScrollView>
            </ImageBackground>
    )
};

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

export default Location;