import React from 'react';
import { Text, View, SafeAreaView, ScrollView, StatusBar, Platform, RefreshControl } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { Index } from './index'
import { LinearGradient } from 'expo-linear-gradient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Styling, WidthRatio, HeightRatio } from './Styling';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.hideAsync();

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

function HomeScreen({ navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  let [fontsLoaded] = useFonts({ Inter_900Black, });
  if (!fontsLoaded) { return null; }

  return (
    <LinearGradient
      colors={['#1b262c', '#070707']}
      style={{ opacity: 1, width: '100%', alignSelf: 'center' }}
      start={[0.0, 0.0]} end={[0.75, 0.5]}
    >
      <StatusBar
        animated={true}
        backgroundColor="#80ffdb"
        barStyle={'dark-content'}
        showHideTransition={'none'}
        hidden={false} />
      {/* HEADER */}
      <View style={{
        // height: HeightRatio(1),
        width: WidthRatio(300),
        alignSelf: 'center'
      }}>

        {Platform.OS !== 'android' &&
          <>
          <Text style={Styling.heading_0}>
            Color Swatch 
          </Text>
          <Text style={{...Styling.heading_0, ...Styling.accent_color}}>
            Converter and Palette Generator
          </Text>
          </>
        }
        {Platform.OS === 'android' &&
          <Text style={Styling.heading_0}>
          Color <Text style={Styling.accent_color}>Swatch</Text>
        </Text>
        }
        <View style={Styling.division_line} />
      </View>

      {/* BODY */}
      <SafeAreaView style={Styling.container}>
        <ScrollView style={Styling.scrollView}>
          <Index />
        </ScrollView>
      </SafeAreaView>

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


