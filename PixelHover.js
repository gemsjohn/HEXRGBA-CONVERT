import React, { useRef, useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';

// export const getPixelColor = (x, y) => {
//     // Get a reference to the canvas element
//     const canvas = document.getElementById('myCanvas');
//     // Get a reference to the 2D rendering context
//     const ctx = canvas.getContext('2d');
//     // Get the pixel data at the specified coordinates
//     const pixelData = ctx.getImageData(x, y, 1, 1).data;
//     // Extract the RGB values from the pixel data
//     const r = pixelData[0];
//     const g = pixelData[1];
//     const b = pixelData[2];
//     // Return the pixel color as a HEX string
//     return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
// };



export const PixelHover = () => {
    const imageRef = useRef(null);
    const canvasRef = useRef(null);
    const [pixelColor, setPixelColor] = useState('')


    const handleLoad = () => {
        console.log("TEST")
        if (canvasRef.current) {
            console.log("2nd")
            const context = canvasRef.current.getContext('2d');
            context.drawImage(imageRef.current, 0, 0);
            const imageData = context.getImageData(0, 0, imageRef.current.width, imageRef.current.height);
            console.log(imageData);
        }
    }

    // useEffect(() => {
    //     const context = canvasRef.current.getContext('2d');
    //     context.drawImage(imageRef.current, 0, 0);
    //     const imageData = context.getImageData(0, 0, imageRef.current.width, imageRef.current.height);
    //     console.log(imageData);
    //   }, [canvasRef]);

    return (
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: '2vh'}}>Click on a pixel to get its color</Text>
            <TouchableOpacity onPress={handleLoad} hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}>
                <Image
                ref={imageRef}
                style={styles.image}
                source={{ uri: 'https://picsum.photos/200' }}
                />
            </TouchableOpacity>
            {/* <Text style={{color: 'white', fontSize: '2vh'}}>{pixelColor}</Text> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 200,
        height: 200,
    },
});