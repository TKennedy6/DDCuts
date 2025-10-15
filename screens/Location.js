import { Text, View, ImageBackground } from 'react-native';
import BarberChair from '../assets/BarberChair.jpg';
import {Card} from 'react-native-elements';

const Location = () => {
    return (
        <ImageBackground
              source={BarberChair}
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
};

export default Location;