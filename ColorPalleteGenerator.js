import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import * as Clipboard from 'expo-clipboard';

export const ColorPaletteGenerator = () => {
    const [palette, setPalette] = useState([]);
    const [copiedCode, setCopiedCode] = useState('');

    const generatePalette = () => {
        const hexValues = Array.from({ length: 20 }).map(() => {
            // Generate a random number between 0 and 16777215 (16777215 is equal to FFFFFF in hexadecimal)
            const randomNumber = Math.floor(Math.random() * 16777216);
            // Convert the number to a HEX value and return it
            return '#' + randomNumber.toString(16).padStart(6, '0');
        });
        // Trending colors
        // const colors = ['#F44336', '#9C27B0', '#3F51B5', '#2196F3', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#FFC107', '#FF9800'];
        let colors = hexValues;

        // Styles
        const styles = ['warm', 'cold', 'bright', 'dark', 'pastel', 'vintage', 'triadic', 'complementary', 'gradient'];

        // Generate random colors based on style
        const style = styles[Math.floor(Math.random() * styles.length)];
        let paletteColors = [];
        if (style === 'warm') {
            paletteColors = colors.slice(0, 5);
        } else if (style === 'cold') {
            paletteColors = colors.slice(5, 10);
        } else if (style === 'bright') {
            paletteColors = colors.slice(0, 5).concat(colors.slice(5, 10)).sort(() => Math.random() - 0.5);
        } else if (style === 'dark') {
            paletteColors = colors.slice(0, 5).concat(colors.slice(5, 10)).sort((a, b) => b.localeCompare(a));
        } else if (style === 'pastel') {
            paletteColors = colors.map(color => {
                // Convert HEX to RGB
                const [r, g, b] = color.match(/\w\w/g).map(x => parseInt(x, 16));
                // Return pastel version of color as HEX
                return `#${(((r * 0.7) << 16) | ((g * 0.7) << 8) | (b * 0.7)).toString(16).padStart(6, '0')}`;
            });
        } else if (style === 'vintage') {
            const vintageColors = ['#722f37', '#b69a90', '#d2b6a2', '#e9d4c5', '#eeded3'];
            paletteColors = vintageColors.sort(() => Math.random() - 0.5);
        } else if (style === 'triadic') {
            // Select a random color from the `colors` array
            const baseColor = colors[Math.floor(Math.random() * colors.length)];
            // Convert the base color to HSL
            const [baseHue, baseSaturation, baseLightness] = hexToHsl(baseColor);
            // Generate the two additional colors by adding or subtracting 120 from the base hue
            const color1 = hslToHex((baseHue + 120) % 360, baseSaturation, baseLightness);
            const color2 = hslToHex((baseHue + 240) % 360, baseSaturation, baseLightness);
            paletteColors = [baseColor, color1, color2];
        } else if (style === 'complementary') {
            // Select a random color from the `colors` array
            const baseColor = colors[Math.floor(Math.random() * colors.length)];
            // Convert the base color to HSL
            const [baseHue, baseSaturation, baseLightness] = hexToHsl(baseColor);
            // Generate the additional color by adding or subtracting 180 from the base hue
            const color1 = hslToHex((baseHue + 180) % 360, baseSaturation, baseLightness);
            paletteColors = [baseColor, color1];
        } else if (style === 'monochromatic') {
            // Pick a random color from the array
            const baseColor = colors[Math.floor(Math.random() * colors.length)];
            // Convert the base color to HSL
            const [hue, saturation, lightness] = hexToHsl(baseColor);
            // Generate 5 variations of the base color by adjusting the lightness
            paletteColors = Array.from({ length: 5 }, (_, i) => {
                const newLightness = Math.max(0, Math.min(100, lightness + i * 20 - 50));
                // Convert the modified HSL color back to HEX
                return hslToHex(hue, saturation, newLightness);
            });
        } else if (style === 'gradient') {
            // Generate two random HEX values
            const color1 = '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');
            const color2 = '#' + Math.floor(Math.random() * 16777216).toString(16).padStart(6, '0');

            // Create the gradient palette using the random colors
            paletteColors = [color1, color2];
        }

        // Generate random colors based on golden ratio
        const goldenRatio = 0.618033988749895;
        let h = Math.random();
        paletteColors = paletteColors.concat(
            Array.from({ length: 5 }).map(() => {
                h += goldenRatio;
                h %= 1;
                // Return HSL as HEX
                const [r, g, b] = hslToRgb(h, 1, 0.5);
                return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
            })
        );

        paletteColors = paletteColors.slice(0, 8);

        setPalette(paletteColors);
    };

    const hslToRgb = (h, s, l) => {
        let r, g, b;

        if (s === 0) {
            r = g = b = l; // achromatic
        } else {
            const hue2rgb = (p, q, t) => {
                if (t < 0) t += 1;
                if (t > 1) t -= 1;
                if (t < 1 / 6) return p + (q - p)
                t * 6;
                if (t < 1 / 2) return q;
                if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };

            const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const p = 2 * l - q;
            r = hue2rgb(p, q, h + 1 / 3);
            g = hue2rgb(p, q, h);
            b = hue2rgb(p, q, h - 1 / 3);
        }

        return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    };

    const hslToHex = (h, s, l) => {
        s /= 100;
        l /= 100;

        let c = (1 - Math.abs(2 * l - 1)) * s,
            x = c * (1 - Math.abs((h / 60) % 2 - 1)),
            m = l - c / 2,
            r = 0,
            g = 0,
            b = 0;

        if (0 <= h && h < 60) {
            r = c; g = x; b = 0;
        } else if (60 <= h && h < 120) {
            r = x; g = c; b = 0;
        } else if (120 <= h && h < 180) {
            r = 0; g = c; b = x;
        } else if (180 <= h && h < 240) {
            r = 0; g = x; b = c;
        } else if (240 <= h && h < 300) {
            r = x; g = 0; b = c;
        } else if (300 <= h && h < 360) {
            r = c; g = 0; b = x;
        }
        r = Math.round((r + m) * 255);
        g = Math.round((g + m) * 255);
        b = Math.round((b + m) * 255);

        return `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
    };

    const hexToHsl = hex => {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

        let r = parseInt(result[1], 16);
        let g = parseInt(result[2], 16);
        let b = parseInt(result[3], 16);

        r /= 255;
        g /= 255;
        b /= 255;

        let max = Math.max(r, g, b), min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;

        if (max == min) {
            h = s = 0; // achromatic
        } else {
            let d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }

            h /= 6;
        }

        return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
    };



    const copyColorCode = async (color) => {
        // Clipboard.setString(color);
        await Clipboard.setStringAsync(color);
        fetchCopyColorCode();

    };
    const fetchCopyColorCode = async () => {
        const color = await Clipboard.getStringAsync();
        setCopiedCode(color);
    };


    return (
        <>
            <View style={styles.container}>
                <Text style={{
                    fontFamily: 'Inter_900Black',
                    fontSize: '20px',
                    alignSelf: 'center',
                    color: 'white',
                    marginBottom: '1rem'
                }}>Random Palette</Text>
                <Text style={{
                    fontFamily: 'Inter_900Black',
                    fontSize: '18px',
                    alignSelf: 'center',
                    color: '#ff9f1c',
                    marginBottom: '1rem'
                }}>Try it out!</Text>
                <TouchableOpacity
                    onPress={() => { setCopiedCode(''); generatePalette(); }}
                    style={{
                        backgroundColor: '#ff1654',
                        padding: '1vh',
                        border: 'solid',
                        borderColor: 'white',
                        borderWidth: 4,
                        borderRadius: 10,
                        // marginTop: 10,
                        marginBottom: 4,
                        width: '20rem'
                    }}
                >
                    <Text style={{
                        color: 'white',
                        marginTop: '0.5vh',
                        fontSize: '3vw',
                        fontFamily: 'Inter_900Black',
                        alignSelf: 'center'
                    }}>Generate!</Text>

                </TouchableOpacity>

                <View style={styles.palette}>
                    {palette.map((color, index) => (
                        <TouchableOpacity key={index} onPress={() => copyColorCode(color)}>
                            <View style={[styles.color, { backgroundColor: color }]} />
                        </TouchableOpacity>
                    ))}
                </View>
                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontFamily: 'Inter_900Black',
                    alignSelf: 'center',
                    marginBottom: '1rem'
                    // width: '200px'
                    // margin: '1rem'
                }}>{copiedCode}</Text>
                {copiedCode != '' &&
                    <>
                        <Text style={{
                            color: 'white',
                            fontSize: 20,
                            margin: '0.5rem',
                            fontFamily: 'Inter_900Black',
                            alignSelf: 'center'
                        }}>Copied!</Text>
                        <View style={{
                            width: '100px',
                            alignSelf: 'center',
                            height: '100px',
                            borderRadius: 6,
                            borderWidth: 1,
                            borderColor: 'rgba(100, 100, 100, 0.25)',
                            backgroundColor: `${copiedCode}`
                        }}></View>
                    </>
                }

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // alignSelf: 'center',
        margin: '1rem'
    },
    palette: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    color: {
        width: 50,
        height: 50,
        borderRadius: 25,
        margin: 10,
    },
    copiedText: {
        marginTop: 10,
        fontSize: 16,
    },
});


