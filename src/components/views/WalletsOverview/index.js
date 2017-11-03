import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class WalletsOverview extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Overview",
        headerRight: (
            <TouchableOpacity onPress={() => navigation.navigate('NewWallet')}>
                <View style={styles.headerButton}>
                    <Icon
                        name="add"
                        size="large"
                        color={colors.white} />
                </View>
            </TouchableOpacity>
        )
    });

    render() {
        return (
            <View style={styles.background}>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: colors.secondary,
        padding: measures.defaultPadding
    },
    headerButton: {
        marginHorizontal: measures.defaultMargin
    }
});