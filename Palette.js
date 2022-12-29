import React, { useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image } from 'react-native';
import color from 'color';
import * as Clipboard from 'expo-clipboard';

export const Palette = () => {
    const [inputColor, setInputColor] = useState('');
    const [palette, setPalette] = useState([]);
    const [gradientCopiedText, setGradientCopiedText] = React.useState('');
    const [isGradientHovered, setIsGradientHovered] = useState(false);

    

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

    function generateGoldenRatioPalette(inputColor) {

        if (inputColor.startsWith('#')) {
            // Convert HEX to RGBA
            const r = parseInt(inputColor.substring(1, 3), 16);
            const g = parseInt(inputColor.substring(3, 5), 16);
            const b = parseInt(inputColor.substring(5, 7), 16);
            const a = 1; // Assume full opacity

            // Calculate the golden ratio
            const phi = (1 + Math.sqrt(5)) / 2;

            // Generate 5 colors based on the golden ratio
            const color1 = `rgba(${r}, ${g}, ${b}, ${a})`;
            const color2 = `rgba(${Math.round(r * phi)}, ${Math.round(g * phi)}, ${Math.round(b * phi)}, ${a})`;
            const color3 = `rgba(${Math.round(r / phi)}, ${Math.round(g / phi)}, ${Math.round(b / phi)}, ${a})`;
            const color4 = `rgba(${Math.round(r * phi)}, ${Math.round(g / phi)}, ${Math.round(b * phi)}, ${a})`;
            const color5 = `rgba(${Math.round(r / phi)}, ${Math.round(g * phi)}, ${Math.round(b / phi)}, ${a})`;


            return [color1, color2, color3, color4, color5];

        } else if (inputColor.startsWith('rgba')) {
            console.log("STARTS WITH")
            // Convert RGBA to HEX
            const parts = inputColor.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            const r0 = parseInt(parts[1]).toString(16).padStart(2, '0');
            const g0 = parseInt(parts[2]).toString(16).padStart(2, '0');
            const b0 = parseInt(parts[3]).toString(16).padStart(2, '0');
            const newHex = `#${r0}${g0}${b0}`;

            const r = parseInt(newHex.substring(1, 3), 16);
            const g = parseInt(newHex.substring(3, 5), 16);
            const b = parseInt(newHex.substring(5, 7), 16);
            const a = 1; // Assume full opacity

            // Calculate the golden ratio
            const phi = (1 + Math.sqrt(5)) / 2;

            // Generate 5 colors based on the golden ratio
            const color1 = `rgba(${r}, ${g}, ${b}, ${a})`;
            const color2 = `rgba(${Math.round(r * phi)}, ${Math.round(g * phi)}, ${Math.round(b * phi)}, ${a})`;
            const color3 = `rgba(${Math.round(r / phi)}, ${Math.round(g / phi)}, ${Math.round(b / phi)}, ${a})`;
            const color4 = `rgba(${Math.round(r * phi)}, ${Math.round(g / phi)}, ${Math.round(b * phi)}, ${a})`;
            const color5 = `rgba(${Math.round(r / phi)}, ${Math.round(g * phi)}, ${Math.round(b / phi)}, ${a})`;
            return [color1, color2, color3, color4, color5];
        }
    }

    function handleGeneratePalette() {
        if (inputColor.startsWith('#') || inputColor.startsWith('rgba')) {
            const newPalette = generateGoldenRatioPalette(inputColor);
            setPalette(newPalette);
        } else {
            console.log("ERROR")
        }
    }

    return (
        <View>
            <Text style={{
                fontFamily: 'Inter_900Black',
                fontSize: '4vh',
                alignSelf: 'center',
                color: 'white'
            }}>Custom Palette</Text>

            <View style={{}}>
                {inputColor &&
                    <TouchableOpacity
                        onPress={() => { 
                            setInputColor('');
                            setInputColor('');
                            setPalette([]);
                            setGradientCopiedText('');
                        }}
                        style={{
                            height: '4vh',
                            width: '4vh',
                            borderRadius: 10,
                            position: 'absolute',
                            zIndex: 10,
                            backgroundColor: '#ff1654',
                            top: '1vh',
                            left: '-1.5vw'
                        }}>
                        <Image
                            source={require('./assets/x.png')}
                            style={{ height: 15, width: 15, alignSelf: 'center', marginTop: '1.3vh', marginLeft: '0.1vh' }}
                        />
                    </TouchableOpacity>
                }
                <View style={{ flexDirection: 'column', alignSelf: 'center', margin: 10 }}>

                    <TextInput
                        value={inputColor}
                        onChangeText={text => setInputColor(text)}
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
                        onPress={handleGeneratePalette}
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
                        }}>Generate!</Text>
                    </TouchableOpacity>
                </View>
                {/* <Button onPress={() => console.log("Generate")} title="Generate Palette" /> */}
                {/* {palette.map(color => (
                <View style={{ backgroundColor: color, height: 50, width: 50 }} />
            ))} */}



                <View style={{ flexDirection: 'row', flexWrap: 'wrap', width: '22rem', alignSelf: 'center', justifyContent: 'center' }}>
                    {palette.map((color, i) => (
                        <>
                            <TouchableOpacity
                                onPress={() => copyGradientToClipboard(color)} style={{ flexWrap: 'wrap', width: 75, margin: 4 }}
                                onMouseEnter={() => setIsGradientHovered(true)}
                                onMouseLeave={() => setIsGradientHovered(false)}
                                key={i}
                            >
                                <View key={i} style={{ backgroundColor: color, height: 50, width: 75, borderRadius: 5 }} />
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
        </View>
    );
}
