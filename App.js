import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Dimensions, PixelRatio } from 'react-native';
import { Convert } from './Convert'
import { LinearGradient } from 'expo-linear-gradient';

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
        // colors={['#5390d9', '#7400b8']}
        colors={['#ffff3f', '#000814']}
        style={{ opacity: 0.5, height: HeightRatio(100), width: windowWidth, borderBottomRightRadius: 90, borderBottomLeftRadius: 90 }}
        start={[0.0, 0.5]} end={[1.0, 0.5]}
      >
        <Text style={{color: 'white', alignSelf: 'center', marginTop: HeightRatio(10), fontSize: 70, fontWeight: 'bold'}}>Hex To RGBA Pro</Text>
        <View style={{borderBottomWidth: 6, borderBottomColor: '#ffff3f', width: windowWidth/3, alignSelf: 'center'}}></View>
      </LinearGradient>
    </>
  )
}

export default function App() {
  return (
    <>
    {/* <DisplayGradient /> */}
    <View style={{backgroundColor: '#ffff3f', height: HeightRatio(100), width: windowWidth, borderBottomRightRadius: 90, borderBottomLeftRadius: 90}}>
        <Text style={{color: '#000814', alignSelf: 'center', marginTop: HeightRatio(10), fontSize: 70, fontWeight: 'bold'}}>HEX To RGBA Pro</Text>
    </View>
    <View style={styles.container}>
      <Convert />
      <StatusBar style="auto" />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
