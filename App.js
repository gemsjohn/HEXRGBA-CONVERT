import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, PixelRatio, Image } from 'react-native';
import { Convert } from './Convert'
import { LinearGradient } from 'expo-linear-gradient';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

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
    //   if (Platform.OS === 'ios') {
    //     return Math.round(PixelRatio.roundToNearestPixel(newSize))
    //   } else {
    //     return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
    //   }
}

const HeightRatio = (size) => {
    const newSize = size * scaleHeight;
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

const DisplayGradient = () => {
  return (
    <>
      <LinearGradient
        // colors={['#5390d9', '#4361ee']}
        colors={['#33415c', '#181818']}
        style={{ opacity: 1, height: '7rem', width: '95vw', marginTop: '1rem', alignSelf: 'center', borderRadius: '10rem', flex: 1 }}
        // start={[0.0, 0.5]} end={[1.0, 0.5]}
      >
        <Text style={{color: 'white', alignSelf: 'center', marginTop: '0.8rem', fontSize: '2.9rem', fontWeight: 'bold'}}>Hex to RGBA Pro</Text>
        <View style={{borderBottomWidth: 6, borderBottomColor: '#ff006e', width: '20rem', alignSelf: 'center'}}></View>
      </LinearGradient>
    </>
  )
}

export default function App() {
  return (
    <LinearGradient
        // colors={['#5390d9', '#4361ee']}
        colors={['#181818', '#000000' ]}
        style={{ opacity: 1, width: windowWidth, alignSelf: 'center', flex: 1 }}
        // start={[0.0, 0.5]} end={[1.0, 0.5]}
      >
    <View >
      {/* <Image source={require('./assets/favicon.png')} style={{width: '10rem', height: '10rem', position: 'absolute', height: '4rem', width: '4rem', top: '0.5rem', left: '1rem'}} />
    <View style={{borderBottomWidth: 2, borderBottomColor: 'rgba(255, 255, 255, 0.2)', width: windowWidth, marginTop: '5rem', alignSelf: 'center'}}></View>
    <View style={{borderLeftWidth: 2, borderLeftColor: 'rgba(255, 255, 255, 0.2)', height: windowHeight, marginLeft: '6rem', position: 'absolute'}}></View> */}
    <View style ={{backgroundColor: 'rgba(255, 255, 255, 0.05)', height: '4rem'}}>
      <Text style={{color: '#b892ff', alignSelf: 'center', marginTop: '0.8rem', fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Inter_900Black',}}>HEX to RGBA Pro</Text>
    </View>
    
      
    {/* <DisplayGradient /> */}
    {/* <View style={{backgroundColor: '#f5cb5c', height: '5rem', width: windowWidth, borderBottomRightRadius: '2rem', borderBottomLeftRadius: '2rem'}}>
        <Text style={{color: '#000814', alignSelf: 'center', marginTop: '0.8rem', fontSize: '2.9rem', fontWeight: 'bold'}}>HEX To RGBA Pro</Text>
    </View> */}
      <View style={styles.container}>
        <Convert />
        <StatusBar style="auto" />
      </View>
      
    </View>
    </LinearGradient>
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
