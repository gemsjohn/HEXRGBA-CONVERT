import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image, Color } from 'react-native';
import { useFonts, Inter_900Black } from '@expo-google-fonts/inter';
import { GetColorGradient } from './utils/GetColorGradient';
import * as Clipboard from 'expo-clipboard';
import { Palette } from './Palette';
import { EyeDropper } from './Eyedropper';
import { ColorPaletteGenerator } from'./ColorPalleteGenerator';
import { ColorPaletteAuto } from './ColorPalleteAuto';
import { ConvertTool } from './ConvertTool';
// import { PixelHover } from './PixelHover';

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

export const Convert = () => {
    // const [value, setValue] = useState('')
    const [result, setResult] = useState('');
    // const [color, setColor] = useState('');
    // const [gradient, setGradient] = useState([]);
    // const [isHovered, setIsHovered] = useState(false);
    // const [isGradientHovered, setIsGradientHovered] = useState(false);
    // const [copiedText, setCopiedText] = React.useState('');
    // const [gradientCopiedText, setGradientCopiedText] = React.useState('');
    // const [squares, setSquares] = useState([]);
    const data = [
        {
            data:
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ ...styles.paragraph, color: '#00b4d8' }}>
                        RGBA (Red Green Blue Alpha)
                    </Text>
                    <Text style={styles.paragraph}>
                        RGBA stands for Red Green Blue Alpha, which is a color model used in digital design and programming to
                        specify colors with an added alpha channel for transparency. Like the RGB model, RGBA uses a combination
                        of letters and numbers to represent specific colors, but with the added alpha channel, RGBA codes consist
                        of four values instead of three. The alpha channel represents the level of transparency, with 0 being
                        fully transparent and 1 being fully opaque.
                    </Text>
                    <Text style={styles.paragraph}>
                        For example, the RGBA code for red with 50% transparency would be "rgba(255,0,0,0.5)". In this case, the
                        red value is 255 (fully intense), the green and blue values are 0 (no intensity), and the alpha value is 0.5 (50% transparency).
                    </Text>
                    <Text style={styles.paragraph}>
                        One key difference between RGBA and RGB is the inclusion of the alpha channel in RGBA, which allows for the specification of
                        transparent colors. This can be useful for creating layered or blended effects in digital design. RGB, on the other hand, does
                        not have an alpha channel and is limited to solid, opaque colors.
                    </Text>
                    {/* <View style={{borderBottomColor: 'white', borderBottomWidth: 4, marginTop: '1rem', marginBottom: '1rem'}}></View> */}
                </View>
        },
        {
            data:
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ ...styles.paragraph, color: '#00b4d8' }}>
                        Hexidecimal
                    </Text>
                    <Text style={styles.paragraph}>
                        Hex color codes are a widely used method in digital design and programming to specify colors
                        for web pages, graphics, and user interfaces. These codes consist of a six-digit combination of
                        letters and numbers that represent a specific color using the RGB (red, green, blue) color model.
                        Each color is represented by a two-digit hexadecimal number, with 00 being the lowest intensity
                        and FF being the highest intensity. For example, the hex color code for red is "#FF0000", green
                        is "#00FF00", and blue is "#0000FF". In addition to these primary colors, hex color codes can be
                        combined to create a wide range of colors, such as "#FFFFFF" for white, "#000000" for black, and
                        "#9ACD32" for yellow.
                    </Text>
                </View>
        },
        {
            data:
                <View style={{ alignSelf: 'center' }}>
                    <Text style={{ ...styles.paragraph, color: '#00b4d8' }}>
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
                </View>
        }

    ]; // example data array
    let [fontsLoaded] = useFonts({ Inter_900Black, });
    if (!fontsLoaded) { return null; }

    // const handleGenerate = () => {
    //     setGradient(GetColorGradient(color));
    // };

    // // Primary Color
    // const copyToClipboard = async () => {
    //     await Clipboard.setStringAsync(result);
    //     console.log("copyToClipboard")
    //     fetchCopiedText();
    // };

    // const fetchCopiedText = async () => {
    //     const text = await Clipboard.getStringAsync();
    //     setCopiedText(text);
    // };

    // // Gradient
    // const copyGradientToClipboard = async (input) => {
    //     await Clipboard.setStringAsync(input);
    //     console.log("copyToClipboard")
    //     fetchGradientCopiedText();
    // };

    // const fetchGradientCopiedText = async () => {
    //     const text = await Clipboard.getStringAsync();
    //     setGradientCopiedText(text);
    // };

    // const handleConvert = () => {
    //     setCopiedText('')
    //     if (value.startsWith('#')) {
    //         // Convert HEX to RGBA
    //         const r = parseInt(value.slice(1, 3), 16);
    //         const g = parseInt(value.slice(3, 5), 16);
    //         const b = parseInt(value.slice(5, 7), 16);
    //         const a = 1; // Assume full opacity
    //         setResult(`rgba(${r}, ${g}, ${b}, ${a})`);
    //         setGradient(GetColorGradient(`rgba(${r}, ${g}, ${b}, ${a})`))
    //     } else if (value.startsWith('rgba')) {
    //         setGradient(GetColorGradient(value))
    //         // Convert RGBA to HEX
    //         const parts = value.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
    //         const r = parseInt(parts[1]).toString(16).padStart(2, '0');
    //         const g = parseInt(parts[2]).toString(16).padStart(2, '0');
    //         const b = parseInt(parts[3]).toString(16).padStart(2, '0');
    //         setResult(`#${r}${g}${b}`);
    //     }
    // };






    return (
        <>
            <View style={{  }}>

                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'column', width: '400px', margin: '2rem', }}>
                        <Image source={require('./assets/cycle.png')} style={{ height: '40vh', width: '40vh', justifyContent: 'center', alignSelf: 'center' }} />

                    </View>
                    <View style={{ flexDirection: 'column', width: '400px', margin: '2rem' }}>
                        <Text style={{ color: 'white', marginTop: '0.8rem', fontSize: '50px', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Inter_900Black', alignSelf: 'center' }}>Jump from HEX to RGBA to color palette!</Text>
                        <Text style={{ color: 'white', marginTop: '0.8rem', fontSize: '18px', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Inter_900Black', width: '350px', marginTop: '10px', alignSelf: 'center' }}>
                            Use colors consistently across different platforms and systems, customize the appearance of colors, and work with the color model that is most convenient for you.
                        </Text>

                    </View>

                </View>
                {/* TOOLS HEADER */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'column', }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: '4vh', width: '90vw' }}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontFamily: 'Inter_900Black', fontSize: '4vh', alignSelf: 'center', textAlign: 'center'}}>Tools</Text>
                            <View style={{borderBottomWidth: 1, borderBottomColor: '#80ffdb', width: '60vw', alignSelf: 'center', marginTop: '2rem'}} />
                            <View style={{alignSelf: 'center', marginTop: '1rem'}}></View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'column', width: '400px', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                            <ConvertTool />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'column', width: '400px', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
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
                                <Palette />
                            </View>

                        </View>
                    </View>
                    <View style={{ flexDirection: 'column', width: '400px' }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                            
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
                                <ColorPaletteGenerator />
                            </View>
                        </View>
                    </View>

                    <View style={{ height: '30vh' }} />
                </View>
                {/* COLOR PALETTA INSPIRATION */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'column', }}>
                        <View style={{ flexDirection: 'column', justifyContent: 'center', marginTop: '6vh', width: '90vw' }}>
                            <Text style={{color: 'white', fontWeight: 'bold', fontFamily: 'Inter_900Black', fontSize: '4vh', alignSelf: 'center', textAlign: 'center'}}>Color Palette Inspiration</Text>
                            <Text style={{color: '#ff9f1c', fontWeight: 'bold', fontFamily: 'Inter_900Black', fontSize: '3vh', alignSelf: 'center', textAlign: 'center', marginTop: '2vh'}}>Click a Color to Copy!</Text>
                            <View style={{borderBottomWidth: 1, borderBottomColor: '#80ffdb', width: '60vw', alignSelf: 'center', marginTop: '2rem'}} />
                            <View style={{alignSelf: 'center', marginTop: '1rem'}}></View>
                        </View>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'column', width: '400px', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                            <ColorPaletteAuto />
                        </View>
                    </View>
                </View>
                {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                    <View style={{ flexDirection: 'column', width: '400px', alignSelf: 'center' }}>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                        <PixelHover />
                        </View>
                    </View>
                </View> */}

                

                

            </View>
            {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'column', width: '84vw', margin: 2 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignSelf: 'center', justifyContent: 'center' }}>
                        {data.map((item) => (
                            <View
                                key={item}
                                style={[
                                    styles.square,
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
                                {item.data}
                            </View>
                        ))}

                    </View>
                </View>
            </View> */}
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





