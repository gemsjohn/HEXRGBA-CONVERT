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
    alignSelf: 'center',
    margin: 10
  },
  accent_color: {
    color: '#ff9f1c'
  },
  primarySquare: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    width: '350px',
    // height: '13rem',  
    margin: '0.75rem',
    borderRadius: '1rem'
  },
  text_input: {
    outline: 'none',
    backgroundColor: 'transparent',
    color: 'white',
    display: 'flex',
    justifyContent: 'flex-start',
    padding: HeightRatio(20),
    border: 'solid',
    borderColor: 'white',
    borderWidth: 4,
    borderBottomWidth: 2,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 0,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 0,
    alignSelf: 'center',
    marginTop: HeightRatio(5),
    width: '20rem',
    fontSize: '18px',
    fontFamily: 'Inter_900Black'
  },
  button_input: {
    backgroundColor: '#ff1654',
    padding: HeightRatio(10),
    border: 'solid',
    borderColor: 'white',
    borderWidth: 4,
    borderTopWidth: 2,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 30,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 30,
    marginBottom: 4,
    width: '20rem'
  },
  small_text: {
    color: 'white',
    fontSize: HeightRatio(18),
    fontFamily: 'Inter_900Black',
    alignSelf: 'center'
  },
  hoveredButton: {
    marginBottom: '10px',
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: '300px'
  },
  normalButton: {
    marginBottom: '10px',
    alignSelf: 'center',
    flexDirection: 'column',
    width: WidthRatio(300)
  },
  large_color_block: {
    width: '100px',
    alignSelf: 'center',
    height: '100px',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: 'rgba(100, 100, 100, 0.25)',
  },
  small_color_block: {
    height: 50,
    width: 75,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: 'rgba(100, 100, 100, 0.25)',
  },
  palette_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '22rem',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  close_button: {
    height: '4vh',
    width: '4vh',
    borderRadius: 10,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#ff1654',
    top: '1vh',
    left: '-5vh'
  },
  red_x: {
    height: 15, 
    width: 15, 
    alignSelf: 'center', 
    marginTop: '1.3vh', 
    marginLeft: '0.1vh'
  }
});