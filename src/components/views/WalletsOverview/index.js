import React from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderIcon } from 'components/widgets';
import { colors, measures } from 'common/styles';

export class WalletsOverview extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "Overview",
        headerRight: (
            <HeaderIcon
                name="add"
                size="large"
                color={colors.white}
                onPress={() => navigation.navigate('NewWallet')} />
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
    }
});