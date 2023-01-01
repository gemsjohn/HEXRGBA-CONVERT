import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image, Color } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { GetColorGradient } from './GetColorGradient';
import * as Clipboard from 'expo-clipboard';
import { HeightRatio, Styling, WidthRatio } from '../Styling';

export const ConvertTool = () => {
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

    // Primary Color
    const copyToClipboard = async () => {
        await Clipboard.setStringAsync(result);
        fetchCopiedText();
    };

    const fetchCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setCopiedText(text);
    };

    // Gradient
    const copyGradientToClipboard = async (input) => {
        await Clipboard.setStringAsync(input);
        fetchGradientCopiedText();
    };

    const fetchGradientCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setGradientCopiedText(text);
    };

    const handleConvert = () => {
        setCopiedText('')
        if (value.startsWith('#')) {
            const [r0, g0, b0, a0] = value.match(/\w\w/g).map(x => parseInt(x, 16));
            let a;
            // Convert HEX to RGBA
            const r = parseInt(value.slice(1, 3), 16);
            const g = parseInt(value.slice(3, 5), 16);
            const b = parseInt(value.slice(5, 7), 16);
            if (a0 != undefined) {
                a = a0;
            } else {
                a = 255;
            }
             // Assume full opacity
            setResult(`rgba(${r}, ${g}, ${b}, ${parseFloat(a/255).toFixed(2)})`);
            setGradient(GetColorGradient(`rgba(${r}, ${g}, ${b}, ${parseFloat(a/255).toFixed(2)})`))
        } else if (value.startsWith('rgba')) {
            setGradient(GetColorGradient(value))
            // Convert RGBA to HEX
            const parts = value.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            const r = parseInt(parts[1]).toString(16).padStart(2, '0');
            const g = parseInt(parts[2]).toString(16).padStart(2, '0');
            const b = parseInt(parts[3]).toString(16).padStart(2, '0');
            setResult(`#${r}${g}${b}`);
        } else if (value.startsWith('rgb')) {
            setGradient(GetColorGradient(value))
            // Convert RGBA to HEX
            const parts = value.match(/^rgb?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            const r = parseInt(parts[1]).toString(16).padStart(2, '0');
            const g = parseInt(parts[2]).toString(16).padStart(2, '0');
            const b = parseInt(parts[3]).toString(16).padStart(2, '0');
            setResult(`#${r}${g}${b}`);
        }
    };

    return (
        <View
            style={[
                Styling.primarySquare,
                {
                    shadowOffset: {
                        width: 10,
                        height: 10,
                    },
                    shadowOpacity: 0.15,
                    shadowRadius: 10,
                },
            ]}
        >
            <View style={{ marginLeft: HeightRatio(45) , marginRight: HeightRatio(45) , marginTop: HeightRatio(15) }}>
                <Text style={{...Styling.small_text}}>Convert</Text>
                <Text style={{...Styling.small_text, fontSize: HeightRatio(12)}}>(HEX, RGB, RGBA)</Text>

                <View style={{}}>
                    {value &&
                        <TouchableOpacity
                            onPress={() => {
                                setValue('');
                                setResult('');
                                setGradient([]);
                                setGradientCopiedText('');
                            }}
                            style={{...Styling.close_button}}>
                            <Image
                                source={require('../assets/x.png')}
                                style={{ ...Styling.red_x }}
                            />
                        </TouchableOpacity>
                    }
                    <View style={{ flexDirection: 'column', alignSelf: 'center', margin: 10 }}>
                        <TextInput
                            value={value}
                            onChangeText={setValue}
                            placeholder="Enter HEX, RGB, or RGBA... "
                            placeholderTextColor="white"
                            style={{...Styling.text_input}}
                        />
                        <TouchableOpacity
                            onPress={() => handleConvert()}
                            style={{...Styling.button_input}}
                        >
                            <Text style={{...Styling.small_text}}>Swap!</Text>
                        </TouchableOpacity>
                    </View>
                    {result &&
                        <>
                            <TouchableOpacity
                                onPress={copyToClipboard}
                                activeOpacity={1}
                                style={[
                                    {padding: 10,
                                    borderRadius: 5},
                                    isHovered ? Styling.hoveredButton : Styling.normalButton
                                ]}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            >

                                <Text style={{
                                    ...Styling.small_text, 
                                    margin: HeightRatio(10)
                                }}>{result}</Text>

                                {copiedText != '' &&
                                    <Text style={{
                                        ...Styling.small_text, 
                                        margin: HeightRatio(10)
                                    }}>Copied!</Text>
                                }

                                <View style={{
                                    ...Styling.large_color_block,
                                    backgroundColor: `${result}`
                                }}></View>

                            </TouchableOpacity>

                        </>
                    }

                </View>


                <View style={{ ...Styling.palette_container }}>
                    {gradient.map((c, i) => (
                        <>
                            <TouchableOpacity
                                onPress={() => copyGradientToClipboard(c)} style={{ flexWrap: 'wrap', width: 75, margin: 4 }}
                                onMouseEnter={() => setIsGradientHovered(true)}
                                onMouseLeave={() => setIsGradientHovered(false)}
                                key={i}
                            >
                                <View key={i} style={{
                                    backgroundColor: c,
                                     ...Styling.small_color_block
                                }}></View>
                            </TouchableOpacity>
                        </>
                    ))}
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'column', margin: HeightRatio(10)  }}>
                    <Text style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize: HeightRatio(34) }}>{gradientCopiedText}</Text>
                    {gradientCopiedText != '' &&
                        <Text style={{ color: 'white', fontFamily: 'Inter_900Black', fontSize: HeightRatio(15), alignSelf: 'center' }}>Copied!</Text>
                    }
                </View>
            </View>
        </View>
    )
}

