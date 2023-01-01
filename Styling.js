import { StyleSheet, Dimensions, StatusBar, PixelRatio } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  } = Dimensions.get('window');
  
  const scaleWidth = SCREEN_WIDTH / 360;
  const scaleHeight = SCREEN_HEIGHT / 800;

export const WidthRatio = (size) => {
  const newSize = size * scaleWidth;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

export const HeightRatio = (size) => {
  const newSize = size * scaleHeight;
  return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

export const Styling = StyleSheet.create({
    container: {
      // flex: 1,
      // backgroundColor: '#181818',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '6vh'
    },
    content_container: {
      flexDirection: 'row', 
      flexWrap: 'wrap', 
      alignSelf: 'center', 
      justifyContent: 'center'
    },
    heading_0: {
        color: 'white', 
        alignSelf: 'center', 
        marginTop: '0.8rem', 
        fontSize: HeightRatio(38), 
        fontWeight: 'bold', 
        fontFamily: 'Inter_900Black',
        textAlign: 'center'
    },
    division_line: {
        borderBottomWidth: 1, 
        borderBottomColor: '#80ffdb', 
        width: '60vw', 
        alignSelf: 'center'
    },
    accent_color: {
        color: '#ff9f1c'
    }
  });