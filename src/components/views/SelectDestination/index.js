import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import autobind from 'autobind-decorator';
import { Button, InputWithIcon } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class SelectDestination extends React.Component {
    
    static navigationOptions = { title: 'Select destination' };

    @autobind
    onPressCamera() {

    }
    
    @autobind
    onPressContinue() {
        
    }

    render() {
        return (
            <View style={styles.container}>
                <InputWithIcon
                    autoFocus
                    icon="qr-scanner"
                    placeholder="Destination address"
                    onPressIcon={this.onPressCamera} />
                <View style={styles.recentDestinations} />
                <Button children="Continue" onPress={this.onPressContinue} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1,
        padding: measures.defaultPadding
    },
    recentDestinations: {
        flex: 1
    }
});