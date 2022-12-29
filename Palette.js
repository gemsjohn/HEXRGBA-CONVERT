import React, { useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image } from 'react-native';
import color from 'color';

export const Palette = () => {
    const [inputColor, setInputColor] = useState('');
    const [palette, setPalette] = useState([]);

    function generateColorPalette(inputColor) {
        const palette = [];
      
        // Generate a lighter version of the input color
        const lightColor = color(inputColor).lighten(0.5).hex();
        palette.push(lightColor);
      
        // Generate a darker version of the input color
        const darkColor = color(inputColor).darken(0.5).hex();
        palette.push(darkColor);
      
        // Generate a version of the input color with a different hue
        const hueColor = color(inputColor).rotate(180).hex();
        palette.push(hueColor);
      
        return palette;
      }

    function handleGeneratePalette() {
        const newPalette = generateColorPalette(inputColor);
        setPalette(newPalette);
    }

    return (
        <View style={{  }}>
            <View style={{ flexDirection: 'column', alignSelf: 'center', margin: 10 }}>
                    <TextInput
                        value={inputColor}
                        onChangeText={text => setInputColor(text)}
                        placeholder=""
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
            {palette.map(color => (
                <View style={{ backgroundColor: color, height: 50, width: 50 }} />
            ))}
        </View>
    );
}
