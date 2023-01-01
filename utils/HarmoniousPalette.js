import React, { useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image } from 'react-native';
import color from 'color';
import * as Clipboard from 'expo-clipboard';
import { Styling, HeightRatio } from '../Styling';

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




    function generateGoldenRatioPalette(inputColor) {

        if (inputColor.startsWith('#')) {
            const [r0, g0, b0, a0] = inputColor.match(/\w\w/g).map(x => parseInt(x, 16));
            let a;
            // Convert HEX to RGBA
            const r = parseInt(inputColor.substring(1, 3), 16);
            const g = parseInt(inputColor.substring(3, 5), 16);
            const b = parseInt(inputColor.substring(5, 7), 16);
            if (a0 != undefined) {
                a = a0;
            } else {
                a = 255;
            }

            // Calculate the golden ratio
            const phi = (1 + Math.sqrt(5)) / 2;

            // Generate 5 colors based on the golden ratio
            const color1 = `#${inputColor.substring(1, 7)}`;
            const color2 = `#${Math.round(r * phi).toString(16)}${Math.round(g * phi).toString(16)}${Math.round(b * phi).toString(16)}`;
            const color3 = `#${Math.round(r / phi).toString(16)}${Math.round(g / phi).toString(16)}${Math.round(b / phi).toString(16)}`;
            const color4 = `#${Math.round(r * phi).toString(16)}${Math.round(g / phi).toString(16)}${Math.round(b * phi).toString(16)}`;
            const color5 = `#${Math.round(r / phi).toString(16)}${Math.round(g * phi).toString(16)}${Math.round(b / phi).toString(16)}`;

            function padHex(hex) {
                // Check if the HEX value is less than six characters long
                if (hex.length < 7) {
                    // Pad the HEX value with leading zeros
                    return `#${hex.substring(1, 7).padStart(6, '0')}`;
                }
                // Check if the HEX value is longer than six characters
                else if (hex.length > 7) {
                    // Trim the HEX value to six characters
                    return `#${hex.substring(1, 7)}`;
                }
                // Otherwise, return the HEX value as-is
                return hex;
            }


            // Check the length of each color and pad with leading zeros if necessary
            const paddedColor1 = padHex(color1);
            const paddedColor2 = padHex(color2);
            const paddedColor3 = padHex(color3);
            const paddedColor4 = padHex(color4);
            const paddedColor5 = padHex(color5);

            // Return the array of padded colors
            return [paddedColor1, paddedColor2, paddedColor3, paddedColor4, paddedColor5];

        } else if (inputColor.startsWith('rgba')) {
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
            const color1 = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
            const color2 = `#${Math.round(r * phi).toString(16).padStart(2, '0')}${Math.round(g * phi).toString(16).padStart(2, '0')}${Math.round(b * phi).toString(16).padStart(2, '0')}`;
            const color3 = `#${Math.round(r / phi).toString(16).padStart(2, '0')}${Math.round(g / phi).toString(16).padStart(2, '0')}${Math.round(b / phi).toString(16).padStart(2, '0')}`;
            const color4 = `#${Math.round(r * phi).toString(16).padStart(2, '0')}${Math.round(g / phi).toString(16).padStart(2, '0')}${Math.round(b * phi).toString(16).padStart(2, '0')}`;
            const color5 = `#${Math.round(r / phi).toString(16).padStart(2, '0')}${Math.round(g * phi).toString(16).padStart(2, '0')}${Math.round(b * phi).toString(16).padStart(2, '0')}`;

            function padHex(hex) {
                // Check if the HEX value is less than six characters long
                if (hex.length < 7) {
                    // Pad the HEX value with leading zeros
                    return `#${hex.substring(1, 7).padStart(6, '0')}`;
                }
                // Check if the HEX value is longer than six characters
                else if (hex.length > 7) {
                    // Trim the HEX value to six characters
                    return `#${hex.substring(1, 7)}`;
                }
                // Otherwise, return the HEX value as-is
                return hex;
            }


            // Check the length of each color and pad with leading zeros if necessary
            const paddedColor1 = padHex(color1);
            const paddedColor2 = padHex(color2);
            const paddedColor3 = padHex(color3);
            const paddedColor4 = padHex(color4);
            const paddedColor5 = padHex(color5);

            // Return the array of padded colors
            return [paddedColor1, paddedColor2, paddedColor3, paddedColor4, paddedColor5];
        } else if (inputColor.startsWith('rgb')) {
            // Convert RGBA to HEX
            const parts = inputColor.match(/^rgb?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
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
            const color1 = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
            const color2 = `#${Math.round(r * phi).toString(16).padStart(2, '0')}${Math.round(g * phi).toString(16).padStart(2, '0')}${Math.round(b * phi).toString(16).padStart(2, '0')}`;
            const color3 = `#${Math.round(r / phi).toString(16).padStart(2, '0')}${Math.round(g / phi).toString(16).padStart(2, '0')}${Math.round(b / phi).toString(16).padStart(2, '0')}`;
            const color4 = `#${Math.round(r * phi).toString(16).padStart(2, '0')}${Math.round(g / phi).toString(16).padStart(2, '0')}${Math.round(b * phi).toString(16).padStart(2, '0')}`;
            const color5 = `#${Math.round(r / phi).toString(16).padStart(2, '0')}${Math.round(g * phi).toString(16).padStart(2, '0')}${Math.round(b * phi).toString(16).padStart(2, '0')}`;

            function padHex(hex) {
                // Check if the HEX value is less than six characters long
                if (hex.length < 7) {
                    // Pad the HEX value with leading zeros
                    return `#${hex.substring(1, 7).padStart(6, '0')}`;
                }
                // Check if the HEX value is longer than six characters
                else if (hex.length > 7) {
                    // Trim the HEX value to six characters
                    return `#${hex.substring(1, 7)}`;
                }
                // Otherwise, return the HEX value as-is
                return hex;
            }


            // Check the length of each color and pad with leading zeros if necessary
            const paddedColor1 = padHex(color1);
            const paddedColor2 = padHex(color2);
            const paddedColor3 = padHex(color3);
            const paddedColor4 = padHex(color4);
            const paddedColor5 = padHex(color5);

            // Return the array of padded colors
            return [paddedColor1, paddedColor2, paddedColor3, paddedColor4, paddedColor5];
        }
    }

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
