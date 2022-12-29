import React, { useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image, Color } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { GetColorGradient } from './utils/GetColorGradient';
import * as Clipboard from 'expo-clipboard';
import { Palette } from './Palette';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
} = Dimensions.get('window');

const scaleWidth = SCREEN_WIDTH / 360;
const scaleHeight = SCREEN_HEIGHT / 800;

const WidthRatio = (size) => {
    const newSize = size * scaleWidth;
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

const HeightRatio = (size) => {
    const newSize = size * scaleHeight;
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
}

export const Blog = () => {
    return (
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <View style={{alignSelf: 'center'}}>
                <Text style={{...styles.paragraph, color: '#00b4d8'}}>
                    Complementary Colors
                </Text>
                <Text style={styles.paragraph}>
                    Certain colors and hues can work well together and appear to be complementary 
                    because of the way that the colors are arranged on the color wheel. The color 
                    wheel is a visual representation of the colors of the visible spectrum arranged in a circle.
                </Text>
                <Text style={styles.paragraph}>
                    There are a few different ways that colors can be arranged on the color wheel, but one common 
                    way is to arrange the primary colors (red, yellow, and blue) around the wheel, with the secondary 
                    colors (orange, green, and purple) between the primary colors. The tertiary colors 
                    (yellow-green, blue-green, blue-purple, red-purple, red-orange, and yellow-orange) are 
                    located between the primary and secondary colors on the wheel.
                </Text>
                <Text style={styles.paragraph}>
                    Colors that are located opposite each other on the color wheel are known as complementary colors. 
                    These colors tend to work well together because they are highly contrasting, which can create a 
                    visually appealing balance. For example, red and green are complementary colors, as are blue and orange.
                </Text>
                <Text style={styles.paragraph}>
                    There are several theories about why certain color combinations are pleasing to the eye, and some of 
                    these theories involve mathematical principles such as the golden ratio. However, the exact reasons 
                    for why certain color combinations are perceived as being harmonious or complementary are still not 
                    fully understood and are the subject of ongoing research in fields such as psychology and neuroscience.
                </Text>
                <View style={{borderBottomColor: 'white', borderBottomWidth: 4, marginTop: '1rem'}}></View>

            {/* <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', height: '20rem', width: '20rem', borderRadius: '1rem' }}>
                <Text style={{ color: 'white', alignSelf: 'center', marginTop: '2rem', fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'Inter_900Black', width: '18rem', }}>Complementary Colors</Text>
            </View> */}

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderRadius: 5,
    },
    hoveredButton: {
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
        marginBottom: HeightRatio(20),
        width: '22rem',
        alignSelf: 'center'
    },
    normalButton: {
        backgroundColor: '#fff',
        marginBottom: HeightRatio(20),
        width: '22rem',
        alignSelf: 'center'
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
    },
    paragraph: {
        marginVertical: 8,
        color: 'white', fontFamily: 'Inter_900Black', fontSize: '2vh',
        width: '80vw'
      },
});





