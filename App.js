import React from 'react';
import { StyleSheet, Text, View, Dimensions, PixelRatio, Image, SafeAreaView, ScrollView, StatusBar, Platform, TouchableOpacity, RefreshControl } from 'react-native';
import { Convert } from './Convert'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Blog } from './Blog';
import { Layout } from './Layout';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scaleWidth = SCREEN_WIDTH / 360;
const scaleHeight = SCREEN_HEIGHT / 800;

const WidthRatio = (size) => {
  const newSize = size * scaleWidth;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

const HeightRatio = (size) => {
  const newSize = size * scaleHeight;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

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
        style={{ opacity: 1, width: '100%', alignSelf: 'center'}}
      start={[0.0, 0.0]} end={[0.75, 0.5]}
      >
        <View >

          <View style={{ height: '4rem', borderBottomWidth: 1, borderBottomColor: '#80ffdb', width: '50vw', alignSelf: 'center' }}>
            <Text style={{ color: 'white', alignSelf: 'center', marginTop: '0.8rem', fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Inter_900Black', }}>HEX to RGBA Pro</Text>
          </View>
          {/* <View style={{alignSelf: 'center', }}>
            <TouchableOpacity onPress={() => navigation.navigate('Blog')} style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', height: '3rem', marginTop: '1rem', borderRadius: '1rem'}}>
              <Text style={{color: 'white', fontSize: 20, margin: '1rem', fontSize: '1.8vh', fontFamily: 'Inter_900Black'}}>INFO</Text>
            </TouchableOpacity>
          </View> */}

          <View style={{}}>
            {/* <SafeAreaView style={styles.container}>
              <ScrollView 
                style={{}}
                refreshControl={
                  <RefreshControl
                    refreshing={refreshing}
                    onRefresh={onRefresh}
                    enabled={true}
                  />
                } 
              > */}
              <Convert />
              {/* <Layout /> */}
              {/* </ScrollView>
            </SafeAreaView> */}
            {/* <StatusBar style="auto" /> */}
          </View>

          <View style={{ height: '100rem' }} />

        </View>
      </LinearGradient>
  );
}



const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen 
            name="Home" 
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

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#181818',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '6vh'
  },
});
