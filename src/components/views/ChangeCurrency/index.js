import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { colors, measures } from '@common/styles';
import { Icon } from '@components/widgets';
import { Prices as PricesActions } from '@common/actions';
import { Prices as PricesConstants } from '@common/constants';

import ListItem from './ListItem';

@inject('prices')
@observer
export class ChangeCurrency extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Select currency'
    });

    get selectedRate() {
        return this.props.prices.selectedRate;
    }

    selectCurrency(currency) {
        PricesActions.selectActiveRate(currency);
    }

    renderItems = (items) => items.map((item, index) => (
        <ListItem onPress={() => this.selectCurrency(item.label)} key={index}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.title}</Text>
                {(this.selectedRate === item.label) && (
                    <Icon name="checkmark" />
                )}
            </View>
        </ListItem>
    ));

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderItems(PricesConstants.AVAILABLE_RATES)}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultBackground,
        flex: 1
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemTitle: {
        fontSize: measures.fontSizeMedium,
        margin: measures.defaultMargin
    }
});