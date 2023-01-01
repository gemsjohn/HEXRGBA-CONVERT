import React, { useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image } from 'react-native';
import color from 'color';
import * as Clipboard from 'expo-clipboard';
import { Styling, HeightRatio } from '../Styling';
import { generateGoldenRatioPalette } from '../components/ConversionAlgorithms';

export const HarmoniousPalette = () => {
    const [inputColor, setInputColor] = useState('');
    const [palette, setPalette] = useState([]);
    const [gradientCopiedText, setGradientCopiedText] = React.useState('');
    const [isGradientHovered, setIsGradientHovered] = useState(false);

    // Gradient
    const copyGradientToClipboard = async (input) => {
        await Clipboard.setStringAsync(input);
        // console.log("copyToClipboard")
        fetchGradientCopiedText();
    };

    const fetchGradientCopiedText = async () => {
        const text = await Clipboard.getStringAsync();
        setGradientCopiedText(text);
    };


    function handleGeneratePalette() {
        if (inputColor.startsWith('#') || inputColor.startsWith('rgba') || inputColor.startsWith('rgb')) {
            const newPalette = generateGoldenRatioPalette(inputColor);
            setPalette(newPalette);
        } else {
            console.log("ERROR")
        }
    }

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
            <View style={{ marginLeft: '3rem', marginRight: '3rem', marginTop: '1rem' }}>
                <Text style={{...Styling.small_text}}>Harmonious Palette</Text>
                <Text style={{...Styling.small_text, fontSize: HeightRatio(12)}}>(HEX, RGB, RGBA)</Text>

                <View style={{}}>
                    {inputColor &&
                        <TouchableOpacity
                            onPress={() => {
                                setInputColor('');
                                setInputColor('');
                                setPalette([]);
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
                            value={inputColor}
                            onChangeText={text => setInputColor(text)}
                            placeholder="Enter HEX, RGB, RGBA..."
                            style={{...Styling.text_input}}
                        />
                        <TouchableOpacity
                            onPress={handleGeneratePalette}
                            style={{...Styling.button_input}}
                        >
                            <Text style={{...Styling.small_text}}>Generate!</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ alignSelf: 'center', flexDirection: 'column', margin: HeightRatio(10) }}>
                        <Text style={{ ...Styling.heading_0 }}>{gradientCopiedText}</Text>
                        {gradientCopiedText != '' &&
                            <Text style={{ ...Styling.small_text }}>Copied!</Text>
                        }
                    </View>
                    <View style={{ ...Styling.palette_container }}>
                        {palette.map((color) => (
                            <>
                                <TouchableOpacity
                                    onPress={() => copyGradientToClipboard(color)} style={{ flexWrap: 'wrap', width: 75, margin: 4 }}
                                    onMouseEnter={() => setIsGradientHovered(true)}
                                    onMouseLeave={() => setIsGradientHovered(false)}
                                    key={color}
                                >
                                    <View key={color} style={{
                                        backgroundColor: color,
                                        ...Styling.small_color_block
                                    }}></View>
                                </TouchableOpacity>
                            </>
                        ))}
                    </View>
                    
                </View>
            </View>
        </View>
    );
}
