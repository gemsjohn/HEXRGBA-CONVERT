import React, { useEffect, useState } from 'react';
import { View, Text, Image } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
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
            <View style={{ ...Styling.content_container }}>

                <View style={{ flexDirection: 'column', width: '60vw', margin: HeightRatio(10) }}>
                    <Image
                        source={require('./assets/cycle.png')}
                        style={{
                            height: HeightRatio(150),
                            width: HeightRatio(150),
                            justifyContent: 'center',
                            alignSelf: 'center'
                        }}
                        accessibilityLabel="Circular image with arcing arrows drawn between HEX, RGBA, and the Color Palette."
                    />

                </View>
                <View style={{
                    flexDirection: 'column',
                    width: WidthRatio(280),
                    margin: HeightRatio(10)
                }}>
                    <Text style={Styling.heading_0}>
                        Jump from HEX to RGBA to Color Palette!
                    </Text>
                    <Text style={{
                        ...Styling.heading_0,
                        fontSize: HeightRatio(20),
                        width: '85%'
                    }}>
                        Use colors consistently across different platforms and systems, customize the appearance of colors, and work with the color model that is most convenient for you.
                    </Text>
                </View>
            </View>

            {/* TOOLS HEADER */}
            <View style={{ ...Styling.content_container, marginTop: HeightRatio(20) }}>
                <View style={{ flexDirection: 'column', }}>
                    <View style={{
                        flexDirection: 'column',
                        justifyContent: 'center',
                        marginTop: HeightRatio(10),
                        width: '90vw'
                    }}>
                        <Text style={Styling.heading_0}>
                            Tools
                        </Text>
                        <View style={Styling.division_line} />
                    </View>
                </View>
            </View>
            <View style={{ ...Styling.content_container, width: WidthRatio(300) }}>
                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                    <View style={{ ...Styling.content_container }}>
                        <ConvertTool />
                    </View>

                </View>
                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                    <View style={{ ...Styling.content_container }}>
                        <HarmoniousPalette />
                    </View>
                </View>
                <View style={{ flexDirection: 'column', }}>
                    <View style={{ ...Styling.content_container }}>
                        <RandomPalette />
                    </View>
                </View>
            </View>

            {/* COLOR PALETTA INSPIRATION */}
            <View style={{ ...Styling.content_container, marginTop: HeightRatio(20) }}>
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ ...Styling.heading_0, width: WidthRatio(300) }}>
                        Color Palette Inspiration
                    </Text>
                    <Text style={{
                        ...Styling.heading_0,
                        ...Styling.accent_color,
                        fontSize: HeightRatio(20)
                    }}>
                        Click a Color to Copy!
                    </Text>
                    <View style={Styling.division_line} />
                    <View style={{ alignSelf: 'center', marginTop: '1rem' }}></View>
                </View>
            </View>
            <View style={{ ...Styling.content_container }}>
                <View style={{ flexDirection: 'column', alignSelf: 'center' }}>
                    <View style={{ ...Styling.content_container }}>
                        <RandomPaletteArray />
                    </View>
                </View>
            </View>
        </>

    );
};






