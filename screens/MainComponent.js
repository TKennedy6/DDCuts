import { View, Image } from "react-native";
import {Card} from 'react-native-elements'
import DDCutting from '../assets/DD-cutting.jpg';
import { SafeAreaView } from "react-native-safe-area-context";


const Main = () => {
    return (
        <SafeAreaView>
    <View>
        <Card>
        <Image source={DDCutting}
        style={{width: 350, height: 300, borderRadius: 15}}/>
        </Card>
    </View>
    </SafeAreaView>
    )
};

export default Main;