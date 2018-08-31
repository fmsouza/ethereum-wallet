import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { colors, measures } from '@common/styles';
import { inject, observer } from 'mobx-react';
import { General as GeneralActions, Recents as RecentsActions } from '@common/actions';
import NoRecents from './NoRecents';

@inject('recents')
@observer
export default class Recents extends React.Component {

    componentDidMount() {
        this.loadRecents();
    }

    async loadRecents() {
        try {
            await RecentsActions.loadRecents();
        } catch (e) {
            GeneralActions.notify(e.message, 'long');
        }
    }

    renderRecent = ({ item }) => (
        <TouchableWithoutFeedback onPress={() => this.props.onPressItem(item)}>
            <View style={styles.itemContainer}>
                <Text style={styles.itemTitle}>{item}</Text>
            </View>
        </TouchableWithoutFeedback>
    );

    renderList = (recents) => (!recents.length) ? <NoRecents /> : (
        <FlatList
            style={styles.listContainer}
            data={recents}
            keyExtractor={item => item}
            renderItem={this.renderRecent} />
    );

    renderBody = ({ loading, list }) => loading ? <ActivityIndicator /> : this.renderList(list);

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Recent destinations</Text>
                </View>
                {this.renderBody(this.props.recents)}
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