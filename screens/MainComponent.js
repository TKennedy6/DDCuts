import { Platform, View, Image, ImageBackground, Text, StyleSheet } from "react-native";
import {Card, Icon} from 'react-native-elements'
import DDCutting from '../assets/DD-cutting.jpg';
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from 'expo-constants'
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from './HomePage';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import Biography from "./Biography";
import Location from "./Location";
import ContactMe from "./ContactMe";
import { ScrollView } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#000'}
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
        screenOptions={{headerShown: false}}>
            <Stack.Screen 
            name="Home"
            component={HomeContent}
            options={{title: 'Home'}}/>

        </Stack.Navigator>
    )
};

const BiographyNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Biography'
        screenOptions={{headerShown: false}}>
          <Stack.Screen 
          name="Biography"
          component={Biography}
          options={{title: 'Biography'}}/>
        </Stack.Navigator>
    )
}

const LocationNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Location'
        screenOptions={{headerShown: false}}>
          <Stack.Screen 
          name="Location"
          component={Location}
          options={{title: 'Location'}}/>
        </Stack.Navigator>
    )
}

const ContactNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
        screenOptions={{headerShown: false}}>
          <Stack.Screen 
          name="Contact Me"
          component={ContactMe}
          options={{title: 'Contact Me'}}/>
        </Stack.Navigator>
    )
}

const HomeContent = () => {
  return (
    <ImageBackground
      source={DDCutting}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      resizeMode="cover"
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
                      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
      <Card containerStyle={styles.Card}>
              <Card.Title style={styles.headerText}>Cuts by DD</Card.Title>
              </Card>
              </Animatable.View>
              </ScrollView>
              
    </ImageBackground>
    )
    }
    


const Main = () => {
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Navigator
        initialRouteName="HomeNav"
        screenOptions={{
          drawerStyle: { backgroundColor: '#fff' },
          headerShown: true,
          
        }}
      >
        <Drawer.Screen
            name="HomeNav"
            component={HomeNavigator}
            options={({ navigation }) => ({
              title: 'Home',
              headerShown: true,
              headerLeft: () => (
                <Icon
                  name="home"
                  type="font-awesome-5"
                  iconStyle={styles.stackIcon}
                  onPress={() => navigation.toggleDrawer()}
                />
              ),
            })}
          />
        <Drawer.Screen
          name="BiographyNav"
          component={BiographyNavigator}
          options={{
            title: "About DD",
            headerShown: true,
            headerLeft: () => (
                <Icon
                  name="home"
                  type="font-awesome-5"
                  iconStyle={styles.stackIcon}
                />
            )
          }}/>
          <Drawer.Screen
          name="LocationNav"
          component={LocationNavigator}
          options={{
            title: "Shop Location",
            headerShown: true,
          }}/>
          <Drawer.Screen
          name="ContactNav"
          component={ContactNavigator}
          options={{
            title: "Contact Me",
            headerShown: true,
          }}/>
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  stackIcon: {
    marginLeft: 10,
    color: "#000",
    fontSize: 24,
  },
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

export default Main;