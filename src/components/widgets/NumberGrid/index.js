import React from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Icon } from '@components/widgets';
import { colors, measures } from '@common/styles';

export class NumberGrid extends React.Component {

    renderBlock = (label, value) => (
        <TouchableWithoutFeedback onPress={() => this.props.onPressNumber(value)}>
            <View style={styles.block}>
                <Text style={styles.label}>{label}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    {this.renderBlock('9', '9')}
                    {this.renderBlock('8', '8')}
                    {this.renderBlock('7', '7')}
                </View>
                <View style={styles.row}>
                    {this.renderBlock('6', '6')}
                    {this.renderBlock('5', '5')}
                    {this.renderBlock('4', '4')}
                </View>
                <View style={styles.row}>
                    {this.renderBlock('3', '3')}
                    {this.renderBlock('2', '2')}
                    {this.renderBlock('1', '1')}
                </View>
                <View style={styles.row}>
                    {this.renderBlock(<Icon name="dot-single" type="ent" />, '.')}
                    {this.renderBlock('0', '0')}
                    {this.renderBlock(<Icon name="backspace" />, 'erase')}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 4,
        alignItems: 'stretch',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    row: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'center'
    },
    block: {
        flex: 1,
        borderWidth: 2,
        borderColor: colors.secondary,
        backgroundColor: colors.lightGray,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontSize: measures.fontSizeMedium,
        fontWeight: 'bold'
    }
});