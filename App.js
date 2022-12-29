import { StyleSheet, Text, View, Dimensions, PixelRatio, Image, SafeAreaView, ScrollView, StatusBar, Platform, TouchableOpacity } from 'react-native';
import { Convert } from './Convert'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Blog } from './Blog';

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

function HomeScreen({ navigation }) {
  return (
    <LinearGradient
        colors={['#181818', '#000000']}
        style={{ opacity: 1, width: '100%', alignSelf: 'center'}}
      // start={[0.0, 0.5]} end={[1.0, 0.5]}
      >
        <View >

          <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', height: '4rem' }}>
            <Text style={{ color: '#b892ff', alignSelf: 'center', marginTop: '0.8rem', fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Inter_900Black', }}>HEX to RGBA Pro</Text>
          </View>
          <View style={{alignSelf: 'center', }}>
            <TouchableOpacity onPress={() => navigation.navigate('Blog')} style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', height: '3rem', marginTop: '1rem', borderRadius: '1rem'}}>
              <Text style={{color: 'white', fontSize: 20, margin: '1rem', fontSize: '1.8vh', fontFamily: 'Inter_900Black'}}>BLOG</Text>
            </TouchableOpacity>
          </View>

          <View style={{}}>
            <SafeAreaView style={styles.container}>
              <ScrollView style={{}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
              <Convert />
              </ScrollView>
            </SafeAreaView>
            {/* <StatusBar style="auto" /> */}
          </View>

          <View style={{ height: '100rem' }} />

        </View>
      </LinearGradient>
  );
}

function BlogScreen({ navigation }) {
  return (
    <LinearGradient
        colors={['#181818', '#000000']}
        style={{ opacity: 1, width: '100%', alignSelf: 'center' }}
      // start={[0.0, 0.5]} end={[1.0, 0.5]}
      >
        <View >

          <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', height: '4rem' }}>
            <Text style={{ color: '#b892ff', alignSelf: 'center', marginTop: '0.8rem', fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Inter_900Black', }}>HEX to RGBA Pro</Text>
          </View>
          <View style={{alignSelf: 'center', }}>
            <TouchableOpacity onPress={() => navigation.navigate('Home')} style={{backgroundColor: 'rgba(255, 255, 255, 0.05)', height: '3rem', marginTop: '1rem', borderRadius: '1rem'}}>
              <Text style={{color: 'white', fontSize: 20, margin: '1rem', fontSize: '1.8vh', fontFamily: 'Inter_900Black'}}>HOME</Text>
            </TouchableOpacity>
          </View>

          <View style={{}}>
            <SafeAreaView style={styles.container}>
              <ScrollView style={{}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
              <Blog />
              </ScrollView>
            </SafeAreaView>
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
          <Stack.Screen 
            name="Blog" 
            component={BlogScreen} 
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
