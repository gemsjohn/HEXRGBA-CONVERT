import React, { useRef, useEffect, useState } from 'react';
import { View, Text, TextInput, Button, Dimensions, PixelRatio, TouchableOpacity, StyleSheet, Image } from 'react-native';
import color from 'color';
import * as Clipboard from 'expo-clipboard';

export const EyeDropper = () => {
    const [hexValue, setHexValue] = useState(null);
    const imageRef = useRef(null);
    // const image = imageRef.current;
    function handleMouseMove(event) {



        let x = event.nativeEvent.pageX;
        let y = event.nativeEvent.pageY;

        console.log(x + ", " + y)

        const imageElement = imageRef.current;
        if (!imageElement) {
          return;
        }   
    
        const width = Math.max(Number.isInteger(imageElement.naturalWidth) ? imageElement.naturalWidth : 0, 1);
const height = Math.max(Number.isInteger(imageElement.naturalHeight) ? imageElement.naturalHeight : 0, 1);
const canvas = new OffscreenCanvas(width, height);
    const context = canvas.getContext('2d');
    context.drawImage(imageElement, 0, 0);
    
        const pixel= context.getImageData(x, y, 1, 1).data;
        const hex = '#' + pixel[0].toString(16) + pixel[1].toString(16) + pixel[2].toString(16);
        console.log(hex);
      }

  
    return (
        <View>
            <TouchableOpacity onPress={(evt) => handleMouseMove(evt) }  >
                <Image ref={imageRef} source={require('./assets/favicon.png')} style={{height: 100, width: 100}} />
            </TouchableOpacity>
        </View>
    
    );
  }

