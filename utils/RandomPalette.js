import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { HeightRatio, Styling } from '../Styling';
import { hslToRgb, hslToHex, hexToHsl, generatePalette} from '../components/ConversionAlgorithms';

export const RandomPalette = () => {
    const [palette, setPalette] = useState([]);
    const [copiedCode, setCopiedCode] = useState('');

    const copyColorCode = async (color) => {
        await Clipboard.setStringAsync(color);
        fetchCopyColorCode();

    };
    const fetchCopyColorCode = async () => {
        const color = await Clipboard.getStringAsync();
        setCopiedCode(color);
    };

    return (
        <>
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
                <View style={styles.container}>
                    <Text style={{...Styling.small_text}}>
                        Random Palette
                    </Text>
                    <Text style={{
                        ...Styling.small_text, 
                        ...Styling.accent_color, 
                        margin: HeightRatio(10)
                    }}>Try it out!</Text>
                    <TouchableOpacity
                        onPress={() => { setCopiedCode(''); setPalette(generatePalette()); }}
                        style={{
                            backgroundColor: '#ff1654',
                            padding: '10px',
                            border: 'solid',
                            borderColor: 'white',
                            borderWidth: 4,
                            borderRadius: 10,
                            marginBottom: 4,
                            width: '20rem'
                        }}
                    >
                        <Text style={{...Styling.small_text}}>Generate!</Text>

                    </TouchableOpacity>
                    <Text style={{
                        ...Styling.small_text, 
                        margin: HeightRatio(10)
                    }}>{copiedCode}</Text>
                    {copiedCode != '' &&
                        <>
                            <Text style={{
                                ...Styling.small_text, 
                                margin: HeightRatio(10)
                            }}>Copied!</Text>
                            <View style={{
                                ...Styling.large_color_block,
                                backgroundColor: `${copiedCode}`
                            }}></View>
                        </>
                    }

                    <View style={{...Styling.circle_palette_container, margin: HeightRatio(10)}}>
                        {palette.map((color, index) => (
                            <TouchableOpacity key={index} onPress={() => copyColorCode(color)}>
                                <View style={[Styling.circle_color, { backgroundColor: color }]} />
                            </TouchableOpacity>
                        ))}
                    </View>
                    

                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        margin: '1rem'
    },
});


