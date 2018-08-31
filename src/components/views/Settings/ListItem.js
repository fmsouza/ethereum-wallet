import React from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { measures } from '@common/styles';

export default ({ children, onPress }) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={styles.container} children={children} />
    </TouchableWithoutFeedback>
);

const styles = StyleSheet.create({
    container: {
        height: 64,
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: measures.defaultPadding
    }
});