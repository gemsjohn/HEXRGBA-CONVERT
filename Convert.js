import React, { useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image, Color } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { GetColorGradient } from './utils/GetColorGradient';
import * as Clipboard from 'expo-clipboard';
import { Palette } from './Palette';
import { EyeDropper } from './Eyedropper';

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

export const Convert = () => {
    const [value, setValue] = useState('')
    const [result, setResult] = useState('');
    const [color, setColor] = useState('');
    const [gradient, setGradient] = useState([]);
    const [isHovered, setIsHovered] = useState(false);
    const [isGradientHovered, setIsGradientHovered] = useState(false);
    const [copiedText, setCopiedText] = React.useState('');
    const [gradientCopiedText, setGradientCopiedText] = React.useState('');
    let [fontsLoaded] = useFonts({ Inter_900Black, });
    if (!fontsLoaded) { return null; }



    const handleGenerate = () => {
        setGradient(GetColorGradient(color));
    };

    // Primary Color
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(result);
        console.log("copyToClipboard")
        fetchCopiedText();
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
    };

    // Gradient
    const copyGradientToClipboard = async (input) => {
        await Clipboard.setStringAsync(input);
        console.log("copyToClipboard")
        fetchGradientCopiedText();
    };

    const fetchGradientCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setGradientCopiedText(text);
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

        <View style={{flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center'}}>
            <View style={{marginLeft: '3rem', marginRight: '3rem', marginTop: '3rem'}}>
                <Text style={{
                    fontFamily: 'Inter_900Black',
                    fontSize: '4vh',
                    alignSelf: 'center',
                    color: 'white'
                }}>Convert HEX or RGBA</Text>

                <View style={{}}>
                    {value &&
                        <TouchableOpacity
                            onPress={() => { 
                                setValue('');  
                                setResult('');
                                setGradient([]);
                                setGradientCopiedText('');
                            }}
                            style={{
                                height: '4vh',
                                width: '4vh',
                                borderRadius: 10,
                                position: 'absolute',
                                zIndex: 10,
                                backgroundColor: '#ff1654',
                                top: '1vh'
                            }}>
                            <Image
                                source={require('./assets/x.png')}
                                style={{ height: 15, width: 15, alignSelf: 'center', marginTop: '1.3vh', marginLeft: '0.1vh' }}
                            />
                        </TouchableOpacity>
                    }
                    <View style={{ flexDirection: 'column', alignSelf: 'center', margin: 10 }}>
                        <TextInput
                            value={value}
                            onChangeText={setValue}
                            placeholder="Enter HEX or RGBA value"
                            style={{
                                outline: 'none',
                                backgroundColor: 'transparent',
                                color: 'white',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                padding: 30,
                                border: 'solid',
                                borderColor: 'white',
                                borderWidth: 4,
                                borderBottomWidth: 2,
                                borderTopLeftRadius: 30,
                                borderBottomLeftRadius: 0,
                                borderTopRightRadius: 30,
                                borderBottomRightRadius: 0,
                                alignSelf: 'center',
                                marginTop: 10,
                                // marginBottom: 4,
                                width: '20rem',
                                fontSize: '1.8vh',
                                fontFamily: 'Inter_900Black'
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => handleConvert()}
                            style={{
                                backgroundColor: '#ff1654',
                                padding: '1vh',
                                border: 'solid',
                                borderColor: 'white',
                                borderWidth: 4,
                                borderTopWidth: 2,
                                borderTopLeftRadius: 0,
                                borderBottomLeftRadius: 30,
                                borderTopRightRadius: 0,
                                borderBottomRightRadius: 30,
                                // marginTop: 10,
                                marginBottom: 4,
                                width: '20rem'
                            }}
                        >
                            <Text style={{
                                color: 'white',
                                marginTop: '0.5vh',
                                fontSize: '2vh',
                                fontFamily: 'Inter_900Black',
                                alignSelf: 'center'
                            }}>Swap!</Text>
                        </TouchableOpacity>
                    </View>
                    {result &&
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

                                <Text style={{
                                    color: 'black',
                                    fontSize: 30,
                                    marginTop: '0.5rem',
                                    marginBottom: '2vh',
                                    fontFamily: 'Inter_900Black',
                                    alignSelf: 'center'
                                }}>{result}</Text>

                                {copiedText != '' &&
                                    <Text style={{
                                        color: 'black',
                                        fontSize: 20,
                                        margin: '0.5rem',
                                        fontFamily: 'Inter_900Black',
                                        alignSelf: 'center'
                                    }}>Copied!</Text>
                                }

                                <View style={{
                                    width: '18rem',
                                    alignSelf: 'center',
                                    height: '15rem',
                                    marginBottom: HeightRatio(20),
                                    borderRadius: 30,
                                    backgroundColor: `${result}`
                                }}></View>

                            </TouchableOpacity>

                        </>
                    }

                </View>


                <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '22rem', alignSelf: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
                    {gradient.map((c, i) => (
                        <>
                            <TouchableOpacity
                                onPress={() => copyGradientToClipboard(c)} style={{ flexWrap: 'wrap', width: 75, margin: 4 }}
                                onMouseEnter={() => setIsGradientHovered(true)}
                                onMouseLeave={() => setIsGradientHovered(false)}
                                key={i}
                            >
                                <View key={i} style={{ backgroundColor: c, height: 50, width: 75, borderRadius: 5 }}>
                                    {/* {isGradientHovered &&
                                        <Text key={i} style={{
                                            fontFamily: 'Inter_900Black',
                                            alignSelf: 'center',
                                            marginTop: '1rem'
                                        }}>{c}</Text>
                                    } */}
                                </View>
                            </TouchableOpacity>
                        </>
                    ))}
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'column' }}>
                    <Text style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize: '2.2rem' }}>{gradientCopiedText}</Text>
                    {gradientCopiedText != '' &&
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize: '1rem', alignSelf: 'center' }}>Copied!</Text>
                    }
                </View>
            </View>

            <View style={{marginLeft: '3rem', marginRight: '3rem', marginTop: '3rem'}}>
                <View style={{}}>
                    <Palette />
                </View>
            </View>

            {/* <View style={{marginLeft: '3rem', marginRight: '3rem', marginTop: '3rem'}}>
                <View style={{}}>
                <EyeDropper/>
                </View>
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
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        marginBottom: HeightRatio(20),
        width: '22rem',
        alignSelf: 'center'
    },
    normalButton: {
        backgroundColor: '#fff',
        marginBottom: HeightRatio(20),
        width: '22rem',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
    },
});





