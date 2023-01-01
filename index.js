import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image, Color } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { GetColorGradient } from './utils/GetColorGradient';
import * as Clipboard from 'expo-clipboard';
import { ConvertTool } from './utils/ConvertTool';
import { HarmoniousPalette } from './utils/HarmoniousPalette';
import { RandomPalette } from './utils/RandomPalette';
import { RandomPaletteArray } from './utils/RandomPaletteArray';
import { HeightRatio, Styling, WidthRatio } from './Styling';

export const Index = () => {
    
    let [fontsLoaded] = useFonts({ Inter_900Black, });
    if (!fontsLoaded) { return null; }

    return (
        <>
        <View style={{}}>
            <View style={{ ...Styling.content_container }}>

                <View style={{ flexDirection: 'column', width: '60vw', margin: HeightRatio(10) }}>
                    <Image 
                        source={require('./assets/cycle.png')} 
                        style={{ height: HeightRatio(150), width: HeightRatio(150), justifyContent: 'center', alignSelf: 'center' }} 
                    />

                </View>
                <View style={{ flexDirection: 'column', width: WidthRatio(280), margin: HeightRatio(10) }}>
                    <Text style={Styling.heading_0}>
                        Jump from HEX to RGBA to Color Palette!
                    </Text>
                    <Text style={{ color: 'white', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Inter_900Black', width: '90%', marginTop: '10px', alignSelf: 'center' }}>
                        Use colors consistently across different platforms and systems, customize the appearance of colors, and work with the color model that is most convenient for you.
                    </Text>
                </View>
            </View>
            {/* TOOLS HEADER */}
            <View style={{ ...Styling.content_container }}>
                <View style={{ flexDirection: 'column', }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: '4vh', width: '90vw' }}>
                        <Text style={Styling.heading_0}>Tools</Text>
                        <View style={Styling.division_line} />
                    </View>
                </View>
            </View>
            <View style={{ ...Styling.content_container, width: '60vw' }}>
                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                    <View style={{ ...Styling.content_container }}>
                        <ConvertTool />
                    </View>

                </View>
                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                    <View style={{ ...Styling.content_container }}>
                        <View
                            style={[
                                styles.primarySquare,
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
                            <HarmoniousPalette />
                        </View>

                    </View>
                </View>
                <View style={{ flexDirection: 'column', }}>
                    <View style={{ ...Styling.content_container }}>

                        <View
                            style={[
                                styles.primarySquare,
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
                            <RandomPalette />
                        </View>
                    </View>
                </View>

                <View style={{ height: '2vh' }} />
            </View>
            {/* COLOR PALETTA INSPIRATION */}
            <View style={{ ...Styling.content_container }}>
                <View style={{ flexDirection: 'column', }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: '6vh', width: '60vw' }}>
                        <Text style={Styling.heading_0}>
                            Color Palette Inspiration
                        </Text>
                        <Text style={{...Styling.heading_0, ...Styling.accent_color, fontSize: HeightRatio(20),}}>
                            Click a Color to Copy!
                        </Text>
                        <View style={{ borderBottomWidth: 1, borderBottomColor: '#80ffdb', width: '60vw', alignSelf: 'center', marginTop: '2rem' }} />
                        <View style={{ alignSelf: 'center', marginTop: '1rem' }}></View>
                    </View>
                </View>
            </View>
            <View style={{ ...Styling.content_container }}>
                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                    <View style={{ ...Styling.content_container }}>
                        <RandomPaletteArray />
                    </View>
                </View>
            </View>
        </View>
        </>

    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
    },
    hoveredButton: {
        marginBottom: '10px',
        alignSelf: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        width: '300px'
    },
    normalButton: {
        marginBottom: '10px',
        alignSelf: 'center',
        flexDirection: 'column',
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
    },
    primarySquare: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        width: '350px',
        // height: '13rem',  
        margin: '0.75rem',
        borderRadius: '1rem'
    },
    square: {
        backgroundColor: 'rgba(255, 255, 255, 0.05)',
        width: '80vw',
        // height: '13rem',
        margin: '0.75rem',
        borderRadius: '1rem'
    },
    paragraph: {
        marginVertical: 8,
        color: 'white', fontFamily: 'Inter_900Black', fontSize: '2vh',
        width: '78vw',
        padding: '0.25rem'
    },
});





