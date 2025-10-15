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
      <Card containerStyle={{ backgroundColor: "rgba(210, 52, 155, 0.8)" }}>
        <Text>Did this do anything?</Text>
      </Card>
       <Card containerStyle={{ backgroundColor: "rgba(210, 52, 155, 0.8)" }}>
        <Text>Did this do anything?</Text>
      </Card>
    </ImageBackground>
    )
    }
    


const Main = () => {
  return (
    
    <SafeAreaView style={{ flex: 1 }}>
      <Drawer.Navigator
        initialRouteName="HomeNav"
        screenOptions={{
          drawerStyle: { backgroundColor: "#cec8ff" },
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
})

export default Main;