import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';
import { Styling, HeightRatio, WidthRatio } from '../Styling';
import { hslToRgb, hslToHex, hexToHsl, generatePalette} from '../components/ConversionAlgorithms';

export const RandomPaletteArray = () => {
    const [palette, setPalette] = useState([]);
    const [copiedCode, setCopiedCode] = useState('');
    const [palettes, setPalettes] = useState([]); // New state variable to store generated palettes

    const copyColorCode = async (color) => {
        // Clipboard.setString(color);
        await Clipboard.setStringAsync(color);
        fetchCopyColorCode();

    };
    const fetchCopyColorCode = async () => {
        const color = await Clipboard.getStringAsync();
        setCopiedCode(color);
    };

    const HandleDisplayPalettes = () => {

    }

    useEffect(() => {

        for (let i = 0; i < 10; i++) {
            let paletteColors = generatePalette();
            setPalettes(previous => [...previous, paletteColors])
            
        }

    }, [])
    // useEffect(() => {
    //     console.log(palettes)
    // }, [palettes])


    return (
        <>
            <View style={styles.container}>
                
                {copiedCode != '' ?
                    <>
                        <Text style={{
                            ...Styling.small_text, 
                            marginBottom: HeightRatio(10)
                        }}>{copiedCode}</Text>
                        <Text style={{
                            ...Styling.small_text, 
                            margin: HeightRatio(10)
                        }}>Copied!</Text>
                        <View style={{
                            ...Styling.large_color_block,
                            backgroundColor: `${copiedCode}`
                        }}></View>
                    </>
                    :
                    null
                }
                <View style={{...Styling.circle_palette_container, width: WidthRatio(300)}}>
                    {palettes.map((num, i) => (
                        <>
                            <View style={{...Styling.circle_palette_box}} key={i} >
                                {palettes[i].map((color, index) => (
                                    <TouchableOpacity key={index} onPress={() => copyColorCode(color)}>
                                        <View key={index} style={[Styling.circle_color, { backgroundColor: color }]} />
                                    </TouchableOpacity>
                                ))}
                            </View>
                        </>
                    ))}
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
});


