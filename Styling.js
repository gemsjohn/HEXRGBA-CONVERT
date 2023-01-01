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
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    // backgroundColor: 'pink',
    // marginHorizontal: 20,
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
    marginTop: HeightRatio(10),
    fontSize: HeightRatio(38),
    fontWeight: 'bold',
    fontFamily: 'Inter_900Black',
    textAlign: 'center'
  },
  division_line: {
    borderBottomWidth: 1,
    borderBottomColor: '#80ffdb',
    width: WidthRatio(200),
    alignSelf: 'center',
    margin: 10
  },
  accent_color: {
    color: '#ff9f1c'
  },
  primarySquare: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    width: HeightRatio(330),
    margin: HeightRatio(10),
    borderRadius: HeightRatio(10)
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
    width: HeightRatio(270),
    fontSize: HeightRatio(18),
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
    width: HeightRatio(270)
  },
  small_text: {
    color: 'white',
    fontSize: HeightRatio(18),
    fontFamily: 'Inter_900Black',
    alignSelf: 'center'
  },
  hoveredButton: {
    marginBottom: HeightRatio(10),
    alignSelf: 'center',
    flexDirection: 'column',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    width: HeightRatio(300)
  },
  normalButton: {
    marginBottom: HeightRatio(10),
    alignSelf: 'center',
    flexDirection: 'column',
    width: WidthRatio(300)
  },
  large_color_block: {
    width: HeightRatio(80),
    alignSelf: 'center',
    height: HeightRatio(80),
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
    width: HeightRatio(300),
    alignSelf: 'center',
    justifyContent: 'center'
  },
  circle_palette_container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circle_palette_box: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      width: HeightRatio(280),
      margin: HeightRatio(10),
      borderWidth: 2,
      borderColor: 'white',
      borderRadius: HeightRatio(10)
  },
  circle_color: {
      width: 50,
      height: 50,
      borderRadius: 25,
      margin: 10,
  },
  close_button: {
    height: HeightRatio(35),
    width: HeightRatio(35),
    borderRadius: 10,
    position: 'absolute',
    zIndex: 10,
    backgroundColor: '#ff1654',
    top: HeightRatio(8),
    left: HeightRatio(-35)
  },
  red_x: {
    height: 15, 
    width: 15, 
    alignSelf: 'center', 
    marginTop: HeightRatio(12), 
    marginLeft: HeightRatio(2)
  },

});