import React from 'react';
import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import { inject, observer } from 'mobx-react';
import { Icon } from '@components/widgets';
import { colors, measures } from '@common/styles';
import { General as GeneralActions } from '@common/actions';
import ListItem from './ListItem';

@inject('wallet')
@observer
export class Settings extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        title: 'Settings'
    });

    goToChangeCurrencyPage() {
        this.props.navigation.navigate('ChangeCurrency');
    }

    eraseAllData() {
        GeneralActions.eraseAllData();
        this.props.navigation.pop();
    }

    confirmErase() {
        Alert.alert(
            'Erase all data',
            'This action cannot be undone. Are you sure?',
            [
                { text: 'Cancel', onPress: () => {}, style: 'cancel' },
                { text: 'Erase', onPress: () => this.eraseAllData() }
            ],
            { cancelable: false }
        );
    }

    renderItems = (items) => items.map((item, index) => (
        <ListItem onPress={item.action} key={index}>
            <View style={styles.itemContainer}>
                <View style={styles.icon}>
                    <Icon name={item.iconName} type={item.iconType} />
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
            </View>
        </ListItem>
    ));

    render() {
        return (
            <ScrollView style={styles.container}>
                {this.renderItems([
                    { title: 'Change currency', iconName: 'attach-money', iconType: 'md', action: () => this.goToChangeCurrencyPage() },
                    { title: 'Erase all data', iconName: 'trash', iconType: '', action: () => this.confirmErase() },
                ])}
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
        justifyContent: 'flex-start'
    },
    icon: {
        width: 24,
        height: 24,
        margin: measures.defaultMargin
    },
    itemTitle: {
        fontSize: measures.fontSizeMedium
    }
});