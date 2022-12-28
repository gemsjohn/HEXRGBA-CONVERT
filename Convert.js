import React, { useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { GetColorGradient } from './utils/GetColorGradient';
import * as Clipboard from 'expo-clipboard';
import xIcon from './assets/x.png';



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



const DisplayGradient = (props) => {
    return (
        <>
            <Image source={props.image} style={{ ...Styling.background, opacity: 0.4 }} />
            <LinearGradient
                colors={props.gradient}
                style={{ ...Styling.background, opacity: 0.5 }}
            />
        </>
    )
}

export const Convert = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('');
    const [color, setColor] = useState('');
    const [gradient, setGradient] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [copiedText, setCopiedText] = React.useState('');
    let [fontsLoaded] = useFonts({
        Inter_900Black,
    });
    
      if (!fontsLoaded) {
        return null;
      }

    

        const handleGenerate = () => {
            setGradient(GetColorGradient(color));
        };

        const copyToClipboard = async () => {
            await Clipboard.setStringAsync(result);
            console.log("copyToClipboard")
            fetchCopiedText();
          };

          const fetchCopiedText = async () => {
            const text = await Clipboard.getStringAsync();
            setCopiedText(text);
          };

    const handleConvert = () => {
        setCopiedText('')
        if (value.startsWith('#')) {
            // Convert HEX to RGBA
            const r = parseInt(value.slice(1, 3), 16);
            const g = parseInt(value.slice(3, 5), 16);
            const b = parseInt(value.slice(5, 7), 16);
            const a = 1; // Assume full opacity
            setResult(`rgba(${r}, ${g}, ${b}, ${a})`);
            setGradient(GetColorGradient(`rgba(${r}, ${g}, ${b}, ${a})`))
          } else if (value.startsWith('rgba')) {
            setGradient(GetColorGradient(value))
            // Convert RGBA to HEX
            const parts = value.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            const r = parseInt(parts[1]).toString(16).padStart(2, '0');
            const g = parseInt(parts[2]).toString(16).padStart(2, '0');
            const b = parseInt(parts[3]).toString(16).padStart(2, '0');
            setResult(`#${r}${g}${b}`);
          }
    };

    return (
        <View>
            <Text style={{ fontFamily: 'Inter_900Black', fontSize: 40, alignSelf: 'center' }}>Convert HEX or RGBA</Text>
            
            <View style={{backgroundColor: 'transparent', borderBottomWidth: 6, borderColor: 'rgba(0, 0, 0, 0.25)'}}>
                {/* {value &&
                    <TouchableOpacity onPress={() => {setValue('')}} style={{height: HeightRatio(28), width: HeightRatio(28), borderRadius: 10, position: 'absolute', zIndex: 10, backgroundColor: 'red', top: HeightRatio(-10)}}>
                        <Image source={require('./assets/x.png')} style={{height: 15, width: 15, alignSelf: 'center', marginTop: HeightRatio(8), marginLeft: WidthRatio(.5) }} />
                    </TouchableOpacity>
                } */}
                <View style={{ flexDirection: 'row', alignSelf: 'center', margin: 10 }}>
                    {value &&
                        <TouchableOpacity onPress={() => {setValue('')}} style={{height: HeightRatio(60), width: HeightRatio(60), borderRadius: 10, backgroundColor: 'red', alignSelf: 'center', margin: 10}}>
                            <Image source={require('./assets/x.png')} style={{height: 25, width: 25, alignSelf: 'center', marginTop: HeightRatio(20), marginLeft: WidthRatio(.5) }} />
                        </TouchableOpacity>
                    }
                    <TextInput
                        value={value}
                        onChangeText={setValue}
                        placeholder="Enter HEX or RGBA value"
                        style={{
                            outline: 'none',
                            backgroundColor: 'transparent',
                            color: 'black',
                            display: 'flex',
                            justifyContent: 'flex-start',
                            padding: 30,
                            border: 'solid',
                            borderColor: 'black',
                            borderTopWidth: 4,
                            borderLeftWidth: 4,
                            borderBottomWidth: 4,
                            borderRightWidth:0,
                            borderTopLeftRadius: 30,
                            borderBottomLeftRadius: 30,
                            alignSelf: 'center',
                            marginTop: 10,
                            marginBottom: 4,
                            width: windowWidth/4,
                            fontSize: 20
                        }}
                    />
                    {/* [[[SUMBIT BUTTON]]] */}
                    <TouchableOpacity
                        onPress={() => handleConvert()}
                        style={{
                            backgroundColor: '#2ec4b6',
                            padding: 9,
                            border: 'solid',
                            borderColor: 'black',
                            borderTopWidth: 4,
                            borderRightWidth: 4,
                            borderBottomWidth: 4,
                            borderLeftWidth: 0,
                            borderTopRightRadius: 30,
                            borderBottomRightRadius: 30,
                            marginTop: 10,
                            marginBottom: 4,
                        }}
                    >
                        <Text style={{ color: 'black', margin: HeightRatio(14), fontSize: 30, fontFamily: 'Inter_900Black'}}>Convert</Text>
                    </TouchableOpacity>
                </View>
                        {result ? 
                        <>
                        <TouchableOpacity 
                            onPress={copyToClipboard}
                            activeOpacity={1}
                            style={[
                                styles.button,
                                isHovered ? styles.hoveredButton : styles.normalButton
                            ]}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            {isHovered && <Text style={{ position: 'absolute', color: 'rgba(0, 0, 0, 0.5)', fontSize: 20, margin: HeightRatio(20), fontFamily: 'Inter_900Black', alignSelf: 'center', left: 0, top: 0}}>Copy!</Text>}
                            <Text style={{color: 'black', fontSize: 30, margin: HeightRatio(20), fontFamily: 'Inter_900Black', alignSelf: 'center'}}>{result}</Text>
                            {copiedText != '' && <Text style={{color: 'black', fontSize: 20, margin: HeightRatio(20), fontFamily: 'Inter_900Black', alignSelf: 'center'}}>Copied!</Text>}
                            <View style={{width: windowWidth/4, alignSelf: 'center', height: HeightRatio(250), marginBottom: HeightRatio(20), borderRadius: 30, backgroundColor: `${result}`}}></View>
                        </TouchableOpacity>
                        </>
                        :
                        <>
                            <Text style={{color: 'rgba(0, 0, 0, 0.4)', fontSize: 30, margin: HeightRatio(20), fontFamily: 'Inter_900Black', alignSelf: 'center'}}>...result</Text>
                            <View style={{width: windowWidth/4, alignSelf: 'center', height: HeightRatio(250), marginBottom: HeightRatio(20), borderRadius: 30, borderWidth: 4, borderColor: 'rgba(0, 0, 0, 0.4)'}}></View>
                        </>
                        }
                    
            </View>          

            {/* <View style={{}}>
                {gradient.map((c, i) => (
                    <View key={i} style={{ backgroundColor: c, height: 50 }} />
                ))}
            </View> */}
            
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
      padding: 10,
      borderRadius: 5,
    },
    hoveredButton: {
      backgroundColor: '#eee',
      borderRadius: 40,
      marginBottom: HeightRatio(20)
    },
    normalButton: {
      backgroundColor: '#fff',
      marginBottom: HeightRatio(20)
    },
    buttonText: {
      color: '#000',
      fontSize: 18,
    },
  });
  
  
  
  
  
