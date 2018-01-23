import React from 'react';
import { FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { colors, measures } from '@common/styles';

const mockedItems = [
    { address: '0x407428BF09ea7Dac2824A64AfE88171041a02b14' }
];

export default class Recents extends React.Component {

    state = { items: mockedItems };

    renderRecent = ({ item }) => (
        <TouchableWithoutFeedback onPress={() => this.props.onPressItem(item.address)}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item.address}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    renderList() {
        if (this.state.items.length > 0) return (
            <FlatList
                style={styles.listContainer}
                data={this.state.items}
                keyExtractor={item => item.address}
                renderItem={this.renderRecent} />
        );
        else return (
            <View style={styles.noItems}>
                <Text style={styles.title}>You didn't sent anything yet.</Text>
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Recent destinations</Text>
                </View>
                {this.renderList()}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    title: {
        fontSize: measures.fontSizeMedium - 3
    },
    listContainer: {
        borderWidth: 1,
        borderColor: colors.lightGray
    },
    itemContainer: {
        borderBottomWidth: 1,
        borderColor: colors.lightGray,
        height: 64,
        alignItems: 'flex-start',
        justifyContent: 'center',
        padding: measures.defaultPadding
    },
    itemTitle: {
        fontSize: measures.fontSizeMedium - 1
    },
    noItems: {
        marginTop: measures.defaultMargin * 2
    }
});