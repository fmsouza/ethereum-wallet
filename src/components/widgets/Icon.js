import React from 'react';
import { Platform } from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { measures } from 'common/styles';

function getSize(size) {
    if ((size >>> 0) > 0) return size;
    switch (size) {
        case 'small': return measures.iconSizeSmall;
        case 'large': return measures.iconSizeLarge;
        default:
        case 'medium': return measures.iconFontSize;
    }
} 

export const Icon = ({ name, size, color }) => {
    name = (Platform.OS === 'ios') ? `ios-${name}` : `md-${name}`;
    size = getSize(size);
    color = color || '#000';
    return <Ionicon name={name} size={size} color={color} />;
};