import { StyleSheet, Text, View, Dimensions, PixelRatio, Image, SafeAreaView, ScrollView, StatusBar, Platform } from 'react-native';
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
}

const HeightRatio = (size) => {
  const newSize = size * scaleHeight;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

export default function App() {
  return (
    <>

      <LinearGradient
        colors={['#181818', '#000000']}
        style={{ opacity: 1, width: '100%', alignSelf: 'center', flex: 1 }}
      // start={[0.0, 0.5]} end={[1.0, 0.5]}
      >
        <View >

          <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', height: '4rem' }}>
            <Text style={{ color: '#b892ff', alignSelf: 'center', marginTop: '0.8rem', fontSize: '2rem', fontWeight: 'bold', fontFamily: 'Inter_900Black', }}>HEX to RGBA Pro</Text>
          </View>

          <View style={{}}>
            <SafeAreaView style={styles.container}>
              <ScrollView style={{}} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
              <Convert />
              </ScrollView>
            </SafeAreaView>
            {/* <StatusBar style="auto" /> */}
          </View>

        </View>
      </LinearGradient>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3255964932603196"
        crossOrigin="anonymous"></script>
    </>
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
