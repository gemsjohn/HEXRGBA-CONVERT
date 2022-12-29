import React, { useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image } from 'react-native';

export const Palette = () => {
    const [inputColor, setInputColor] = useState('');
    const [palette, setPalette] = useState([]);

    function handleGeneratePalette() {
        const newPalette = generateColorPalette(inputColor);
        setPalette(newPalette);
    }

    return (
        <View style={{ backgroundColor: 'red', height: 100 }}>
            {/* <TextInput
          value={inputColor}
          onChangeText={text => setInputColor(text)}
          
        /> */}
            <TextInput
                value={inputColor}
                onChangeText={text => setInputColor(text)}
                // placeholder="Enter HEX or RGBA value"
                style={{
                    outline: 'none',
                    backgroundColor: 'transparent',
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'flex-start',
                    padding: 30,
                    border: 'solid',
                    borderColor: 'white',
                    borderTopWidth: 4,
                    borderLeftWidth: 4,
                    borderBottomWidth: 4,
                    borderRightWidth: 0,
                    borderTopLeftRadius: 30,
                    borderBottomLeftRadius: 10,
                    alignSelf: 'center',
                    marginTop: 10,
                    marginBottom: 4,
                    width: '17rem',
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
                    borderTopWidth: 4,
                    borderRightWidth: 4,
                    borderBottomWidth: 4,
                    borderLeftWidth: 0,
                    borderTopRightRadius: 10,
                    borderBottomRightRadius: 30,
                    marginTop: 10,
                    marginBottom: 4,
                    width: '6rem'
                }}
            >
                <Text style={{
                    color: 'white',
                    marginTop: '2.5vh',
                    fontSize: '2vh',
                    fontFamily: 'Inter_900Black',
                    alignSelf: 'center'
                }}>SWAP!</Text>
            </TouchableOpacity>
            <Button onPress={() => console.log("Generate")} title="Generate Palette" />
            {palette.map(color => (
                <View style={{ backgroundColor: color, height: 50, width: 50 }} />
            ))}
        </View>
    );
}
