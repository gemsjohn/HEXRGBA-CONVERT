import React from 'react';
import { Text, View, RefreshControl } from 'react-native';
import { Index } from './Index'
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Styling, WidthRatio, HeightRatio } from './Styling';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <LinearGradient
      colors={['#1b262c', '#070707']}
      style={{ opacity: 1, width: '100%', alignSelf: 'center' }}
      start={[0.0, 0.0]} end={[0.75, 0.5]}
    >
      {/* HEADER */}
      <View style={{
        // height: HeightRatio(1),
        width: WidthRatio(300),
        alignSelf: 'center'
      }}>
        <Text style={Styling.heading_0}>
          HEX to RGBA <strong style={Styling.accent_color}>Pro</strong>
        </Text>
        <View style={Styling.division_line} />
      </View>

      {/* BODY */}
      <Index />

      {/* FOOTER */}
      <View style={Styling.division_line} />
      <View style={{ alignSelf: 'center', marginTop: HeightRatio(50) }}>
        <Text style={{ ...Styling.heading_0, fontSize: HeightRatio(20) }}>
          HEX to RGBA Pro  |  Made with &#x2665;
        </Text>
      </View>

      <View style={{ height: HeightRatio(40) }} />
    </LinearGradient>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Color Converter - Hex to RGBA - HTML Color Picker and Pelette">
        <Stack.Screen
          name="Color Converter - Hex to RGBA - HTML Color Picker and Pelette"
          component={HomeScreen}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

