import { Platform, View, Image } from "react-native";
import {Card} from 'react-native-elements'
import DDCutting from '../assets/DD-cutting.jpg';
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from 'expo-constants'
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from './HomePage';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

const screenOptions = {
    headerTintColor: '#fff',
    headerStyle: {backgroundColor: '#000'}
};

const HomeNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
        screenOptions={screenOptions}>
            <Stack.Screen 
            name="Home"
            component={HomeContent}
            options={{title: 'Home'}}/>

        </Stack.Navigator>
    )
};

const DirectoryNavigator = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator initialRouteName='Directory'
        screenOptions={screenOptions}>
        </Stack.Navigator>
    )
}

const HomeContent = () => {
  return (
    <View>
      <Card>
        <Image
          source={DDCutting}
          style={{ width: 350, height: 300, borderRadius: 15 }}
        />
      </Card>
    </View>
  );
};


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
          options={{
            title: 'Home',
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="HomeContent"
          component={HomeContent} // ✅ Move your Card/Image here
          options={{ title: "DD Cutting" }}
        />
      </Drawer.Navigator>
    </SafeAreaView>
  );
};

export default Main;